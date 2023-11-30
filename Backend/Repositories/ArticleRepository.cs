using Backend.Interfaces;
using Backend.Models;

namespace Backend.Repositories;

public class ArticleRepository : IArticleRepository {
  private readonly IConfiguration _configuration;
  private readonly ApplicationDbContext _context;

  public ArticleRepository(ApplicationDbContext context, IConfiguration configuration) {
    _context = context;
    _configuration = configuration;
  }

  public List<Article> GetAll() {
    return _context.article.ToList();
  }

  public Article GetById(int id) {
    return _context.article.Find(id) == null ? null : _context.article.Find(id);
  }

  public Article Create(Article article) {
    _context.article.Add(article);
    _context.SaveChanges();
    return _context.article.ToList().Last();
  }

  public Article Patch(int id, string title, string text, string image_url) {
    Article a = _context.article.Find(id);
    if (a == null) return null;

    if (title != "") a.title = title;
    if (text != "") a.text = text;
    if (image_url != "") a.image_url = image_url;

    a.last_updated_at = DateTime.Now;
    _context.SaveChanges();
    return _context.article.Find(id);
  }

  public void Delete(int id) {
    try {
      _context.comment.RemoveRange(_context.comment.Where(c => c.fk_article_id == id));
      _context.SaveChanges();

      _context.article.Remove(_context.article.Find(id));
      _context.SaveChanges();
    }
    catch {
      throw new Exception("Article not found");
    }
  }
}