import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import tvshow from "../Images/tvshow.jpg";

function Article4() {
    const [articles, setArticles] = useState([
        {
            "id": 1,
            "title": "Trump Acquitted… Again",
            "text": "The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.\r\nIn US-law, the process of",
        },
        {
            "id": 2,
            "title": "Trump, the controversial president",
            "text": "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's history. While his actions have been deemed idiotic",
        },
        {
            "id": 3,
            "title": "Trump and social media",
            "text": "A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.\r\nTrump, who joined Twitter in 2009, has tweeted a total of",
        }
    ]);

    const [randomArticles, setRandomArticles] = useState([]);
    useEffect(() => {
        const getRandomArticles = () => {
            const shuffledArticles = [...articles].sort(() => Math.random() - 0.5);
            const selectedRandomArticles = shuffledArticles.slice(0, 2);
            setRandomArticles(selectedRandomArticles);
        };

        getRandomArticles();
    }, [articles]);



    return (
        <Container fluid>
            <Row id="article-title-row" style={{ marginLeft: "-12px", marginRight: "-12px" }}>

                <Col className="col-12 col-md-6 article-title-col" >

                    <Header />
                    
                    <h1>Donald Trump in «The Apprentice»</h1>
                    <p style={{fontSize: "small"}}>Illustration: [Tv-show(Getty Images)]</p>
                </Col>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={tvshow} alt="Cat" className="article-title-image" />
                </Col>

            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by Sujan</h4>
                        <hr style={{ width: "100%" }} />
                        <h4>
                            <p>“The Apprentice “, a reality TV show, which first aired in 2004, shaped the image of Donald Trump as a businessman and leader. In the series, which bases on the concept of professional Challenges, Trump plays the role of a mentor and Businessman. This Article takes a look at Trumps engagement in “The Apprentice” and the effects on Trumps public image.</p>
                            <p>In the show, Donald Trump takes the role of a judge who picks one of many candidates to lead one of his businesses. His famous saying “You're fired!” became a trademark of the show. Trump’s presence in the show helped elevate his image of a successful businessman and emphasize his abilities as a decision maker.</p>
                            <p>During his time on “The Apprentice “, Trump was shown as a self-confident and assertive leader. The show emphasized his past successes in the Real Estate business and other businesses. Donald Trump used the platform to promote himself as an assertive Leader with plenty of achievements under his belt. </p>
                            <img src={tvshow} alt="" id="capitol" className="inline-article-image"></img>
                            <p className="imageDescription">[Tv-show(Getty Images)]</p>
                            <p>Despite the success of “The Apprentice”, the show was not without controversy. Some critics argument that the depiction of Trump as a successful businessman distorted the reality and overemphasized his success. In addition to that Trump was often criticized for his controversial decisions and comments in the show, which lead to discussions about his leadership style.</p>
                            <p>After his success in “The Apprentice”, Trump entered the political Stage and was later elected as the 45. President of the United States. Some Analysts argue that his presence in the show influenced his political Career, by further strengthening his image as a successful leader and decision-maker.</p>
                            <p>The participation from Donald Trump in “The Apprentice” without doubt contributed to forming his public image. The show helped to establish him as a successful businessman and leader, but it was also accompanied by controversy and criticism. Unrelated to the opinions about Trump, “The Apprentice” remains as an important stepping stone of him becoming the 45. President of the United States of America.</p>
                            <p>Source: [Trump Apprentice(Fortune)], [Trump Apprentice(Wikipedia)]</p>
                        </h4>
                    </div>
                </Col>
                <Col className="col-12 col-md-4" >
                    <div className="sticky-md">
                        <h2 style={{ textDecoration: "underline" }}>Further articles:</h2>
                        <div>
                            {randomArticles.map((randomArticle) => (
                                <div style={{ width: "90%" }} key={randomArticle.id}>
                                    <a href={`/article/${randomArticle.id}`}>
                                        <h3> <FaLongArrowAltRight />{randomArticle.title}  </h3>
                                    </a>
                                    <p>{randomArticle.text.slice(0, 100)}...</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
                <Footer />
            </Row>

        </Container>
    );
}; export default Article4;