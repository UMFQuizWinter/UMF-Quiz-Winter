import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import "./Card.css";
import Logo from './logo.png'
import Link from 'react'
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
</style>


export const CardQuiz = (props) => {
  const subject = props.subject;
  console.log("sub: ", subject) 
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jsonLink = `../../UMF-Quiz-Winter/data.json`
  const refreshPath = `#/UMF-Quiz-Winter/card/${subject}`

  // let jsonLink = "http://localhost:3000/UMF-Quiz-Winter/data.json"

  useEffect(() => {
    // retrieve data from JSON file
    fetch(jsonLink)
      .then((res) => res.json())
      .then((data) => {
        // pick a random question from the data
        const randomIndex = Math.floor(Math.random() * data.entries.length);
        setQuestion(data.entries[randomIndex].Question.toString());
        // pick 5 random answers from the question's possible answers
        let atLeastOneTrue = false;
        let randomAnswers = [];
        while (!atLeastOneTrue) {
          randomAnswers = data.entries[randomIndex].Answers.sort(
            () => Math.random() - 0.5
          ).slice(0, 5);
          randomAnswers.forEach((answer) => {
            if (answer.correct) atLeastOneTrue = true;
          });
        }
        setAnswers(randomAnswers);
      });
  }, []);

  //function to remove selected answers from array
  function removeElement(arr, element) {
    return arr.filter((elem) => elem !== element);
  }

  const handleAnswerClick = (answer) => {
    console.log("Answer: ", answer.ans, answer.correct)
    if (selectedAnswers.includes(answer)){
        setSelectedAnswers(removeElement(selectedAnswers));
    }
    else{
        setSelectedAnswers([...selectedAnswers, answer]);
    }
      
  };

  const isAnswerClicked = (answer) => {
    if (selectedAnswers.includes(answer)){
        return true;
    }
    return false;
  }

  const isAnswerCorrect = (answer) => {
    if(isAnswerClicked(answer) && answer.correct==="true"){
        return true;
    }
    if(!isAnswerClicked(answer) && answer.correct==="false"){ 
        return true; 
    }
    return false;
  }
  const cuteAlerts = ["You're doing great! Keep going!", "Acesta este semnul tau ca vei trece la anatomie.", "Gandeste-te doar la cat o sa bei dupa sesiune..."]
  const handleSubmit = () => {
    
    setIsSubmitted(true);
    const randomIndex = Math.floor(Math.random() * 4400);
    const randomAlertIndex = Math.floor(Math.random() * cuteAlerts.length);
    if(randomIndex % 13 === 0){
        alert(cuteAlerts[randomAlertIndex])
    }
  };
  const handleClearAnswers = () => {
    setSelectedAnswers([])
  }
  const handleNextQuestion = () => {
    setSelectedAnswers([]);
    setIsSubmitted(false);
  }

  return (
    <div className="page-container">
      <div className="card">
        <div className="card-content">
          <div className="card-container">
            <div className="subject-title">
              {subject === "anato" ? "Anatomie" : "Diabet"}
            </div>
            <div className="logo">
                <img src={Logo} style={{width: "35%", maxWidth: "300px"}}></img>
            </div>
            <div className="question">
              <Typography variant="h5">{question}</Typography>
            </div>
            <div className="answers-container">
              {answers.map((answer) => (
                <div key={answer.ans}>
                  <button
                    className={`answer-button${isAnswerClicked(answer) ? "-clicked" : ""}${isSubmitted ? isAnswerCorrect(answer) ? "-correct" : "-wrong": ""}`}
                    onClick={() => handleAnswerClick(answer)}
                    style={{ cursor: "pointer" }}
                  >
                    {answer.ans}
                  </button>
                </div>
              ))}
            </div>
            <div className="buttons-down-container">
              <button className="button-down" hidden={isSubmitted ? true : false} onClick={handleSubmit}>
                {isSubmitted ? "Next Question" : "Submit"}
              </button>
              <button className="button-down" onClick={handleClearAnswers} hidden={isSubmitted ? true : false}>Clear Answers</button>
              <button className="button-down" hidden={isSubmitted ? false : true} onClick={handleNextQuestion}>
                  <a href={refreshPath}>
                     Next Question
                  </a>
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQuiz;
