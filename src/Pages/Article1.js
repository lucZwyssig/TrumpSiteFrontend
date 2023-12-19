import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import { useState, useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import capitol from "../Images/capitol.jpg";

function Article1() {
    const [articles, setArticles] = useState([
        {
            "id": 2,
            "title": "Trump, the controversial president",
            "text": "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's ",
        },
        {
            "id": 3,
            "title": "Trump and social media",
            "text": "A well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.\r\nTrump,",
        },
        {
            "id": 4,
            "title": "Donald Trump in «The Apprentice»",
            "text": "“The Apprentice “, a reality TV show, which first aired in 2004, shaped the image of Donald Trump as a businessman and leader."
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
                    
                    <h1>Trump Acquitted… Again</h1>
                    <p style={{fontSize: "small", color: "white"}}>Illustration: [Capitol building (Getty Images)]</p>
                </Col>
                <Col className="col-12 col-md-6 article-title-col" >
                    <img src={capitol} alt="Cat" className="article-title-image" />
                </Col>

            </Row>
            <Row className="d-flex">
                <Col className="col-12 col-md-8">
                    <div className="article-content">
                        <h4>written by Luc</h4>
                        <hr style={{ width: "100%" }} />
                        <h4>
                            <p>The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.</p>
                            <p>In US-law, the process of impeachment occurs when the House of Representatives, comprised of members from every state, decides to charge the current president or vice president for alleged misconduct. Since Trump had already left office, this was also the first time an impeachment trial has been held against a former president. Donald Trump is, until now, the only US president to be impeached twice. The other presidents that were impeached were Andrew Johnson in 1868 and Bill Clinton in 1998.</p>
                            <img src={capitol} alt="" id="capitol" className="inline-article-image"></img>
                            <p className="imageDescription">[Capitol building (Getty Images)]</p>
                            <p>This time around, Trump has been charged with incitement of insurrection. The reason for the impeachment was, on the one hand, the Capitol attack on January 6, about a month beforehand. Thousands of supporters of the former president felt an urge to rebel against the results of the presidential election, which Trump lost. They also were shouting “hang Mike Pence”, since he was overseeing Biden’s election process. A total of five people died during the events, and over 130 were injured. This was the first time the Capitol had ever been breached by rioters.</p>
                            <p>The other reason for his impeachment was a phone call he had had with Secretary of State Brad Raffensperger (oversees elections in the state of Georgia). During this phone call, he pressured Raffensperger to investigate Georgia’s election results, even after being told multiple times that the results had been correct.</p>
                            <p>Ultimately however, Trump was acquitted in a 57-43 vote, 10 short of the needed two-thirds to have him convicted. Today Trump is currently running for president again, which would not have been possible had he been convicted.</p>
                            <p>Source: [Trump Impeachment(Wikipedia)]</p>
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
}; export default Article1;