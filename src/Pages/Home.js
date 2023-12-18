import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import capitol from "../Images/capitol.jpg";
import wall from "../Images/wall.jpg";
import twitter from "../Images/twitter.jpg";
import tvshow from "../Images/tvshow.jpg";

function Home() {

  function formatLastUpdatedAt(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const hardCodeArticles = [
    {
      "id": 1,
      "user_id": "Luc",
      "title": "Trump Acquitted… Again",
      "text": "The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.",
      "image_url": capitol,
      "created_at": "2020-01-01T00:00:00",
      "last_updated_at": "2023-11-25T00:00:00",
      "image_source": "[Capitol building (Getty Images)]"
    },
    {
      "id": 2,
      "user_id": "Luc",
      "title": "Trump, the controversial president",
      "text": "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's history.",
      "image_url": wall,
      "created_at": "2020-02-01T00:00:00",
      "last_updated_at": "2023-11-20T00:00:00",
      "image_source": "[Trump Wall (Flickr)]"
    },
    {
      "id": 3,
      "user_id": "Luc",
      "title": "Trump and social media",
      "text": "A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.",
      "image_url": twitter,
      "created_at": "2020-04-01T00:00:00",
      "last_updated_at": "2023-11-23T00:00:00",
      "image_source": "[Trump Twitter (Axios Media)]"
    },
    {
      "id": 4,
      "user_id": "Sujan",
      "title": "Donald Trump in «The Apprentice»",
      "text": "“The Apprentice “, a reality TV show, which first aired in 2004, shaped the image of Donald Trump as a businessman and leader.",
      "image_url": tvshow,
      "created_at": "2023-11-23T00:00:00",
      "last_updated_at": "2023-12-18T00:00:00",
      "image_source": "[Tv-show(Getty Images)]"
    }
  ]

  return (
    <Container fluid className="HomeContainer">
      <Row id="HomepageRow">
        <Header />
        <div>
          <h1>Trump</h1>
          <h2 >Luc Zwyssig, Peter Schreivogel, Tarek Schütz, Sujan Saravana</h2>
          <p >[Homepage Image (Getty Images)]</p>
        </div>
      </Row>
      <svg viewBox="0 0 1440 320" id="HomepageSvg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: 'black', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#37424a', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <path fill="url(#grad1)" fillOpacity="1" d="M0,64L48,101.3C96,139,192,213,288,229.3C384,245,480,203,576,170.7C672,139,768,117,864,138.7C960,160,1056,224,1152,234.7C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
      </svg>
      {
        hardCodeArticles.map((article) => (
          <Row key={article.id} className="HomepageArticlesRow"  >
            <Col className="col-12 col-md-6 HomepageArticleCol" style={{ paddingLeft: "4%" }}>
              <div>
                <div className="HomepageArticleTitleDiv">
                  <h2>{article.title}</h2>

                </div>
              </div>
              <p className="HomepageArtictrleText">{article.text.slice(0, 300)}...</p>
              <div>
                <a href={`/article/${article.id}`} className="ToArticleLink" > to article <FaLongArrowAltRight /></a>
                <p>Last updated at: {formatLastUpdatedAt(article.last_updated_at)}</p>
              </div>
            </Col>
            <Col className="col-12 col-md-6 HomepageArticleImageCol">
              <div>
                <img src={article.image_url} alt="Cat" style={{ width: "90%", borderRadius: "5px" }} />
                <p className="imageDescription">{article.image_source}</p>
              </div>

            </Col>
          </Row>
        ))
      }
      <Footer />
    </Container>
  );
}

export default Home;
