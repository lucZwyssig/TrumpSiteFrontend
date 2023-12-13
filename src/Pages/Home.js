import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Home() {

  function formatLastUpdatedAt(inputDate) {
    const date = new Date(inputDate);
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  };

  const hardCodeArticles = [
    {
      "id": 1,
      "user_id": "user1",
      "title": "Trump Acquitted… Again",
      "text": "The former president of the United States, Donald John Trump, has been impeached twice but was also acquitted for the second time last January.\r\nIn US-law, the process of impeachment occurs when the House of Representatives, comprised of members from every state, decides to charge the current president or vice president for alleged misconduct. Since Trump had already left office, this was also the first time an impeachment trial has been held against a former president. Donald Trump is, until now, the only US president to be impeached twice. The other presidents were Andrew Johnson in 1868 and Bill Clinton in 1998.\r\nThis time around, Trump has been charged with incitement of insurrection. The reason for the impeachment was, on the one hand, the Capitol attack on January 6, about a month beforehand. Thousands of supporters of the former president felt an urge to rebel against the results of the presidential election, which Trump lost. They also were shouting “hang Mike Pence”, since he was overseeing Biden’s election process. A total of five people died during the events, and over 130 were injured. This was the first time the Capitol had ever been breached by rioters. \r\nThe other reason for his impeachment was a phone call he had had with Secretary of State Brad Raffensperger (oversees elections in the state of Georgia). During this phone call, he pressured Raffensperger to investigate Georgia’s election results, even after being told multiple times that the results had been correct.\r\nUltimately however, Trump was acquitted in a 57-43 vote, 10 short of the needed two-thirds to have him convicted. Today Trump is currently running for president again, which would not have been possible had he been convicted.\r\nSources: Wikipedia\r\n",
      "image_url": "https://luczwyssig.github.io/TrumpImageRepo/insur.jpg",
      "created_at": "2020-01-01T00:00:00",
      "last_updated_at": "2023-11-25T00:00:00"
    },
    {
      "id": 2,
      "user_id": "user1",
      "title": "Trump, the controversial president",
      "text": "Donald Trump, the 45th President of the United States, can be described as one of the most controversial leaders in the nation's history. While his actions have been deemed idiotic and incomprehensible by some, others are of the opinion that he was a great leader and are fans of his political doings.\r\nWe first must look at the US political system to understand the political divide. The US Parliament is made up of two major political parties that control almost all seats. Currently, 48 of the 100 seats in the United States Senate are occupied by the Democratic Party, 49 by the Republican Party, and the remaining 3 by independent politicians. This is a stark contrast to the Swiss political system, where the seats are divided between many more parties. With there being only two parties in the United States, they tend to have completely different ideas and motives. Consequently, the current US president is usually disliked or disapproved of by a large part of the country, while the other half usually supports him.\r\nHowever, this still leaves us with the question of why Trump stands out as being so controversial. Trump has put in place several policies, the most controversial of which have to do with immigrants. One of his key executive orders was the travel ban to the US from several Muslim countries, commonly referred to as the “Muslim Ban”. The decision triggered widespread backlash, both domestic and international. \r\nAnother of Trump’s controversial orders was the “zero tolerance policy” imposed on immigrants crossing into the United States from the Mexican border. He would also announce an increase in spending on border control, which would also lead to the famous 'Wall,' which started construction in 2018 along the US-Mexican border but has since been halted by President Joe Biden.\r\nIn summary, Trump’s controversial policies, having to do with immigration but also with further topics (including the US’s withdrawal from the Paris agreement on the response to climate change), have made him stand out as an unorthodox and disruptive executive leader.\r\nSources: Wikipedia, Washington Post\r\n",
      "image_url": "https://luczwyssig.github.io/TrumpImageRepo/TrumpWall.jpg",
      "created_at": "2020-02-01T00:00:00",
      "last_updated_at": "2023-11-20T00:00:00"
    },
    {
      "id": 3,
      "user_id": "user1",
      "title": "Trump and social media",
      "text": " \r\n \r\nA well-known fact about Donald Trump is that he is, or at least was, very active on the social media platform Twitter.\r\nTrump, who joined Twitter in 2009, has tweeted a total of around 57,000 times. 25000 of those have been written during his presidency - 8,000 during his first presidential election in 2016 alone. Additionally, it would also be incorrect to say that he hasn’t accumulated a following on the mentioned site since he was sitting at around 89 million followers before his ban. \r\nDuring his constant storm of tweets, he has also been known to spread lies and misleading comments. According to a study conducted by CNBC, four of Trump's 10 most popular tweets contained false claims or information; of his most popular 100 tweets, 36 of them did. Trump uses social media to relay his thoughts and suggestions, especially regarding political matters, which can be dangerous since many of his followers take his comments seriously. An example of this is the Capitol insurrection on January 6.\r\nThe reason why Trump’s followers believe him so much, not only on Twitter but also in general, can be traced back to several reasons. First and most importantly of all, people tend to believe in politicians who share their own ideas and opinions. This is a reason why his followers believe his political lies, especially those that have to do with Republican principles.\r\nFurthermore, many of Trump's followers see him as a victim of the United States political system and still stand with him. They see the accusations against him as a desperate attempt by the Democratic Party, or more generally,by all non-Trump supporters, to not only get him out of office but also discredit him.\r\nTrump is also known to deeply distrust the media, famously calling it 'fake news.' This distrust has clearly carried over to his followers and has also been aided by right-winged news networks; the most famous and influential one is Fox News Network.\r\nNowadays, Trump isn’t posting anything on Twitter, or X, as it's called now, but is instead expressing his opinions on his own platform, 'Truth Social.' Whether or not this will play a deciding role in the current election is yet to be determined.\r\nSources: Wikipedia, CNN\r\n\r\n",
      "image_url": "https://luczwyssig.github.io/TrumpImageRepo/TrumpTwitter.jpg",
      "created_at": "2020-04-01T00:00:00",
      "last_updated_at": "2023-11-23T00:00:00"
    }
  ]

  return (
    <Container fluid className="HomeContainer">
      <Row id="HomepageRow">
        <Header />
        <div>
          <h1>Trump</h1>
          <h2 >Luc Zwyssig, Peter Schreivogel, Tarek Schütz, Sujan Saravana</h2>
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
              <img src={article.image_url} alt="Cat" style={{ width: "90%", borderRadius: "5px" }} />
            </Col>
          </Row>
        ))
      }
      <Footer />
    </Container>
  );
}

export default Home;
