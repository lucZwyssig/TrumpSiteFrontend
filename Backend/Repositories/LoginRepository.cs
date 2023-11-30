using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Konscious.Security.Cryptography;
using Microsoft.IdentityModel.Tokens;
using Backend.Interfaces;
using Backend.Models;

namespace Backend.Repositories;

public class LoginRepository : ILoginRepository {
  private readonly IConfiguration _configuration;
  private readonly ApplicationDbContext _context;

  public LoginRepository(ApplicationDbContext context, IConfiguration configuration) {
    _context = context;
    _configuration = configuration;
  }

  public bool UserExists(string username) => _context.user.Any(u => u.username == username);

  public User Create(User user) {
    user.password = GenerateArgon2Hash(user.password);
    _context.user.Add(user);
    _context.SaveChanges();
    return user;
  }


  public User Patch(int id, string username, string password) {
    if (username != "") _context.user.FirstOrDefault(u => u.id == id).username = username;
    if (password != "") _context.user.FirstOrDefault(u => u.id == id).password = GenerateArgon2Hash(password);

    _context.SaveChanges();
    return _context.user.FirstOrDefault(u => u.id == id);
  }

  public List<User> GetAllUsers() => _context.user.ToList();

  public string GetTokenIfValid(User user) {
    var dbuser = _context.user.FirstOrDefault(u => u.username == user.username);
    if (dbuser == null || dbuser.password != GenerateArgon2Hash(user.password)) return "-1";
    return GenerateJwtToken(dbuser.id);
  }

  public User GetUserFromToken(string token) {
    var tmp = token;

    if (tmp.StartsWith("Bearer ")) tmp = tmp.Substring(7);

    var id = DecodeJwtToken(tmp);
    if (_context.user.FirstOrDefault(u => u.id == id) == null) return null;
    return _context.user.FirstOrDefault(u => u.id == id);
  }


  public string GenerateArgon2Hash(string password) {
    string _out;
    using (var hasher = new Argon2id(Encoding.UTF8.GetBytes(password))) {
      hasher.DegreeOfParallelism = 1;
      hasher.Iterations = 20;
      hasher.MemorySize = 19456;
      _out = Convert.ToBase64String(hasher.GetBytes(128));
    }

    return _out;
  }

  public string GenerateJwtToken(int id) {
    var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
    var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

    var claims = new[] {
      new Claim(JwtRegisteredClaimNames.Sub, id.ToString()),
      new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
    };

    var token = new JwtSecurityToken(
      _configuration["Jwt:Issuer"],
      _configuration["Jwt:Audience"],
      claims,
      expires: DateTime.UtcNow.AddHours(1), // Token expiration time
      signingCredentials: credentials
    );

    return new JwtSecurityTokenHandler().WriteToken(token);
  }

  public int DecodeJwtToken(string token) {
    var handler = new JwtSecurityTokenHandler();
    var jsonToken = handler.ReadToken(token);
    var tokenS = jsonToken as JwtSecurityToken;
    var id = tokenS.Claims.First(claim => claim.Type == "sub").Value;
    return Convert.ToInt32(id);
  }
}