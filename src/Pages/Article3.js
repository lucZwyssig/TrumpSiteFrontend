import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import twitter from "../Images/twitter.jpg";

function Article3() {
    const [articles, setArticles] = useState([
        {
            "id": 1,
            "title": "Trump Acquitted… Again",
            "text": "The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second",
        },
        {
            "id": 2,
            "title": "Trump, the controversial president",
            "text": "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation",
        },
        {
            "id": 4,
            "title": "Donald Trump in «The Apprentice»",
            "text": "“The Apprentice “, a reality TV show, which first aired in 2004, shaped the image of Donald Trump as a businessman and leader. In,"
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
                    <h1>Trump and social media</h1>
                    <p style={{fontSize: "small"}}>Illustration: [Trump Twitter (Axios Media)]</p>
                </Col>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={twitter} alt="Cat" className="article-title-image" />
                </Col>

            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by Luc</h4>
                        <hr style={{ width: "100%" }} />
                        <h4>
                            <p>A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.</p>
                            <p>Trump, who joined Twitter in 2009, has tweeted a total of around 57,000 times. 25000 of those have been written during his presidency - 8,000 during his first presidential election in 2016 alone. Additionally, it would also be incorrect to say that he hasn’t accumulated a following on the mentioned site since he was sitting at around 89 million followers before his ban. </p>
                            <p>During his constant storm of tweets, he has also been known to spread lies and misleading comments. According to a study conducted by CNBC, four of Trump's 10 most popular tweets contained false claims or information; of his most popular 100 tweets, 36 of them did. Trump uses social media to relay his thoughts and suggestions, especially regarding political matters, which can be dangerous since many of his followers take his comments seriously. An example of this is the Capitol insurrection on January 6.</p>
                            <img src={twitter} alt="" className="inline-article-image"></img>
                            <p className="imageDescription" id="twitter">[Trump Twitter (Axios Media)]</p>
                            <p>The reason why Trump’s followers believe him so much, not only on Twitter but also in general, can be traced back to several reasons. First and most importantly of all, people tend to believe in politicians who share their own ideas and opinions. This is a reason why his followers believe his political lies, especially those that have to do with Republican principles.</p>
                            <p>Furthermore, many of Trump's followers see him as a victim of the United States political system and still stand with him. They see the accusations against him as a desperate attempt by the Democratic Party, or more generally,by all non-Trump supporters, to not only get him out of office but also discredit him. </p>
                            <p>Trump is also known to deeply distrust the media, famously calling it 'fake news.' This distrust has clearly carried over to his followers and has also been aided by right-winged news networks; the most famous and influential one is Fox News Network.</p>
                            <p>Nowadays, Trump isn’t posting anything on Twitter, or X, as it's called now, but is instead expressing his opinions on his own platform, 'Truth Social.' Whether or not this will play a deciding role in the current election is yet to be determined.</p>
                            <p>Sources: Wikipedia, CNN</p>
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
}; export default Article3;