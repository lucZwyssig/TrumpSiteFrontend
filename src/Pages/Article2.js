import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import wall from "../Images/wall.jpg";

function Article2() {
    const [articles, setArticles] = useState([
        {
            "id": 1,
            "title": "Trump Acquitted… Again",
            "text": "The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.",
        },
        {
            "id": 3,
            "title": "Trump and social media",
            "text": " A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.\r\nTrump, who joined",
        },
        {
            "id": 4,
            "title": "Donald Trump in «The Apprentice»",
            "text": "“The Apprentice “, a reality TV show, which first aired in 2004, shaped the image of Donald Trump as a businessman and leader. In the series, "
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
                    <h1>Trump, the controversial president</h1>
                    <p style={{fontSize: "small"}}>Illustration: [Trump Wall (Flickr)]</p>
                </Col>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={wall} alt="Cat" className="article-title-image" />
                </Col>

            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by Luc</h4>
                        <hr style={{ width: "100%" }} />
                        <h4>
                            <p>Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's history. While his actions have been deemed idiotic and incomprehensible by some, others are of the opinion that he was a great leader and are fans of his political doings.</p>
                            <p>We first must look at the US political system to understand the political divide. The US Parliament is made up of two major political parties that control almost all seats. Currently, 48 of the 100 seats in the United States Senate are occupied by the Democratic Party, 49 by the Republican Party, and the remaining 3 by independent politicians. This is a stark contrast to the Swiss political system, where the seats are divided between many more parties. With there being only two major parties in the United States, they tend to have completely different ideas and motives. Consequently, the current US president is usually disliked or disapproved of by a large part of the country, while the other half usually supports him.</p>
                            <img src={wall} alt="" className="inline-article-image" id="wall"></img>
                            <p className="imageDescription">[Trump Wall (Flickr)]</p>
                            <p>However, this still leaves us with the question of why Trump stands out as being so controversial. Trump has put in place several policies, the most controversial of which have to do with immigrants. One of his key executive orders was the travel ban to the US from several Muslim countries, commonly referred to as the “Muslim Ban”. The decision triggered widespread backlash, both domestic and international. </p>
                            <p>Another of Trump’s controversial orders was the “zero tolerance policy” imposed on immigrants crossing into the United States from the Mexican border. He would also announce an increase in spending on border control, which would also lead to the famous 'Wall,' which started construction in 2018 along the US-Mexican border but has since been halted by President Joe Biden.</p>
                            <p>In summary, Trump’s controversial policies, having to do with immigration but also with further topics (including the US’s withdrawal from the Paris agreement on the response to climate change), have made him stand out as an unorthodox and disruptive executive leader.</p>
                            <p>Source: [Trump Controversy(Wikipedia)]</p>          
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
}; export default Article2;