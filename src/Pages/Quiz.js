import { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Trump from "../Images/TrumpYoung.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";
import Header from "../Components/Header";
import { IoClose } from "react-icons/io5";

function Quiz() {
  const [lives, setLives] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [possibles, setPossibles] = useState([]);
  const [counter, setCounter] = useState(20);
  const [time, setTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [won, setWon] = useState(false);
  const [lost, setLost] = useState(false);

  let audio = new Audio("/tada-fanfare-a-6313.mp3");
  const questions = [
    {
      id: 1,
      question: "How many Followers did Trump have on Twitter before he was banned?",
      correctAnswer: "89 million",
      wrongAnswers: ["96 million", "54 million", "112 million"],
    },
    {
      id: 2,
      question: "Trump distrusts the Media and famously calls it…",
      correctAnswer: "Fake News",
      wrongAnswers: ["Misinput", "Bad news", "Misinformation"],
    },
    {
      id: 3,
      question: "How many times was Donald Trump impeached?",
      correctAnswer: "2",
      wrongAnswers: ["1", "3", "4"],
    },
    {
      id: 4,
      question: "What was one of the reasons for Trump's second impeachment?",
      correctAnswer: "The Capitol hill attack",
      wrongAnswers: ["Bad response to Covid-19 pandemic", "Spreading misinformation", "Involvement in a foreign conspiracy"],
    },
    {
      id: 5,
      question: "How many wives has Trump had?",
      correctAnswer: "3",
      wrongAnswers: ["4", "1", "2"],
    },
    {
      id: 6,
      question: "What was the name of Trump's tv-show?",
      correctAnswer: "The Apprentice",
      wrongAnswers: ["Executive Apprentice", "The Executive Challenge", "The Profit"],
    },
    {
      id: 7,
      question: "What is Donald Trump's middle name?",
      correctAnswer: "John",
      wrongAnswers: ["Johann", "James", "Jack"],
    },
    {
      id: 8,
      question: "What famous phrase did Trump use in his tv-show",
      correctAnswer: "You're fired!",
      wrongAnswers: ["You're hired!", "You've got the edge!", "You're the contender!"],
    }
  ];

  function start() {
    audio.play();
  };

  function setPossibleanswers(questionId) {
    if (questionId) {
      let questionsArray = [questionId.correctAnswer, ...questionId.wrongAnswers];
      questionsArray.sort(() => (Math.random() > 0.5) ? 1 : -1);
      setPossibles(questionsArray);
    };
  };

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prevQuestion => prevQuestion + 1);
      setCounter(20);
    } else {
      setWon(true);
      start();
    };
  };

  function checkCorrect(possible) {
    if (questions[currentQuestion].correctAnswer === possible) {
      return handleNextQuestion();
    }
    handleMinusLife();
  };

  function handleSetPossibles() {
    setPossibleanswers(questions[currentQuestion]);
  };

  useEffect(() => {
    let timer
    if (play && counter > 0 && !won) {
      timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter === 1) {
            handleMinusLife();
          }
          return prevCounter - 1;
        });
  
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    if (counter === 0) {
      handleMinusLife();
    }
    return (() => {
      clearInterval(timer);
    })
  }, [counter, play]);

  useEffect(() => {
    handleSetPossibles();
  }, [currentQuestion])

  function handleMinusLife() {

    if (lives === 1) {
      setLost(true);
    }
    else {
      setLives(lives - 1)
      handleNextQuestion();
    }
  };

  function handleCloseButton() {
    setPlay(false);
    setLives(3);
    setCurrentQuestion(0);
    setCounter(20);
    setWon(false);
    setLost(false);
  }

  return (
    <Container fluid className={`quizContainer ${play ? 'quizPlayContainer' : ''}`}>
      {play ?
        <div>
          <div className="QuizTitle QuizInfo">
            <h1>{questions[currentQuestion].question}</h1>

          </div>
          <div className="QuizQuestionsDiv">
            <Header />
            <Row>
              {possibles.slice(0, 2).map((possible, index) => (
                <Col key={index} className="col-12 col-md-6 quiz-col">
                  <div className={`QuizSingleQuestion color${index + 1}`} onClick={() => checkCorrect(possible)}><p>{possible}</p></div>

                </Col>
              ))}
            </Row>
            <Row>
              {possibles.slice(2, 4).map((possible, index) => (
                <Col key={index} className="col-12 col-md-6 quiz-col">
                  <div className={`QuizSingleQuestion color${index + 3}`} onClick={() => checkCorrect(possible)}><p>{possible}</p></div>
                </Col>
              ))}
            </Row>
          </div>
          <div className="QuizH2Div QuizInfo">
            <h2>Lives: {lives}</h2>
            <h2>Time Left: {counter}s</h2>
          </div>
          {won &&
            <div className="Popup">
              <div className="PopupContent">
                <div>

                  <h1>You Won! <IoClose onClick={handleCloseButton} className="CloseButton"/></h1>

                  <p>Thank you for paying such attention the the articles</p>
                </div>
                <div>
                  <h3>Time: {time}s</h3>
                </div>
              </div>
            </div>
          }
          {lost && 
          <div className="Popup">
          <div className="PopupContent">
            <div>

              <h1>You Lost :( <IoClose onClick={handleCloseButton} className="CloseButton"/></h1>

              <p>Read the articles and try again</p>
            </div>
            <div>
              <h3>Questions answered correctly: {currentQuestion - 2}</h3>
            </div>
          </div>
        </div>
          }
          
        </div>
        : (
          <div className="QuizStart">
            <Row className="QuizStartRow">
              <Col className="col-12 col-md-8 QuizStartCol">
                <Header />
                <img src={Trump}></img>
              </Col>
              <Col className="col-12 col-md-4 QuizStartCol">
                <div className="QuizStartDiv">
                  <h2>Trump quiz</h2>
                  <p>How well did you pay attention to the articles?</p>
                  <p style={{fontSize: "small", color: "black"}}>Illustration: [Trump and Flag(Getty Images)]</p>
                  <p className="QuizStartText" onClick={() => setPlay(true)}>play quiz <FaLongArrowAltRight /></p>

                </div>
              </Col>
            </Row>
          </div>
        )}

    </Container>
  );
}

export default Quiz;
