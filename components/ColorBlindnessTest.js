import OutlinedInput from "@material-ui/core/OutlinedInput";
import React, { useEffect, useState } from "react";
import { RiChatCheckFill } from "react-icons/ri";

import testCardsOriginal from "../data/testCardsCB";
import TestCard from "./TestCard";

const ColorBlindnessTest = () => {
  const [randomIndexCB, setRandomIndexCB] = useState(0);
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [testCards, setTestCards] = useState([...testCardsOriginal]);

  useEffect(() => {
    if (!showScore) {
      const dataString = localStorage.getItem("colorBlindnessTestData");

      try {
        const testData = JSON.parse(dataString);
        if (testData) {
          setShowScore(testData.finished);
          setScore(testData.score);
        }
      } catch (e) {}
    } else {
      localStorage.setItem(
        "colorBlindnessTestData",
        JSON.stringify({ finished: showScore, score })
      );
    }
  }, [showScore]);

  const styles = {
    input: {
      height: 40,
      width: 200,
      margin: 10,
    },
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && answer !== "") {
      checkAnswer();
    }
  };

  const unSureAnswer = () => {
    setScore(score + 0);
    nextTestCard();
    setAnswer("");
  };

  const checkAnswer = () => {
    if (answer !== "" && answer === testCards[randomIndexCB].answer) {
      setScore(score + 1);
    } else {
      setScore(score + 0);
    }
    nextTestCard();
    setAnswer("");
  };

  const nextTestCard = () => {
    let currentCardArray = [...testCards];
    if (currentCardArray.length > 1) {
      currentCardArray.splice(randomIndexCB, 1);
      setTestCards(currentCardArray);
      setRandomIndexCB(Math.floor(Math.random() * currentCardArray.length));
    } else {
      setShowScore(true);
      setTestCards([...testCardsOriginal]);
    }
  };

  const resetTest = () => {
    setScore(0);
    setShowScore(false);
    localStorage.removeItem("colorBlindnessTestData");
  };

  const cardNumber = testCardsOriginal.length - testCards.length + 1;

  return (
    <div className="main">
      <div className="content-section">
        <div className="content-wrapper">
          <h2 className="section-header">Color Blind Test</h2>

          {!showScore ? (
            <div className="test-content">
              <div>
                Card {cardNumber}/{testCardsOriginal.length}
              </div>
              <div className="section-description">
                Look at the number inside the picture and enter the correct
                answer in the box below.
              </div>
              <TestCard
                imgSrc={testCards[randomIndexCB].imgSrc}
                alt={testCards[randomIndexCB].alt}
              />
              <div className="input-container flex">
                <OutlinedInput
                  style={styles.input}
                  type="number"
                  placeholder="Enter your answer here"
                  value={answer}
                  onKeyPress={(e) => {
                    handleKeyDown(e);
                  }}
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                <div
                  className="button"
                  onClick={() => {
                    unSureAnswer();
                  }}
                >
                  Not Sure
                </div>
                <div
                  className="button"
                  onClick={() => {
                    checkAnswer();
                  }}
                >
                  Submit
                </div>
              </div>
            </div>
          ) : (
            <div className="score-container">
              <div className="score">
                You scored {score}/{testCardsOriginal.length}.
              </div>
              <div className="button" onClick={() => resetTest()}>
                Try Again
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColorBlindnessTest;
