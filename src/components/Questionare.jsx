import { Grid } from '@mui/material';
import React, { useState } from 'react';
import WhyComponents from './WhyComponents';
import '../pages/style.css';
import MainButton from './MainButton';
import MainTitle from './MainTitle';
import questions from '../constants/QuastionareText';
import {textQuestionStyle, titleQueastionareStyle, textStyle, buttonStyle, radioStyle} from './styles';
import results from '../constants/QuestionareResult';


export default function Questionare() {  

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const randomResult = results[Math.floor(Math.random()*results.length)];
  const [isResult, setIsResult] = useState(false)

  const handleAnswerChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };
  console.log(answers);

  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleBack = () => {
    setCurrentQuestion(currentQuestion - 1);
  }

  const handleSubmit = () => {
    console.log('Answers:', answers);
    setIsResult(true);
  };

  return (
    <Grid container direction='row' alignContent='center' justifyContent='center' sx={{backgroundColor:'#412B14', minHeight:'100vh'}}>
      <Grid container item xs={12} direction='row' justifyContent='center' alignContent='flex-start'>
          <MainTitle text='Чи IT то твоє?' sx={titleQueastionareStyle}/>
      </Grid>
      {isResult ? (
      <Grid container item>
            <Grid
            item
            xs={12}
            className="block"
            style={{
                display: "flex",
                margin: "1rem",
                alignContent: "center",
            }}
            >
            <span style={textQuestionStyle}>{randomResult}</span>
            </Grid>
        </Grid>
        ) : (
          <Grid container item xs={11} sm={8} md={6} spacing={1} key={questions[currentQuestion]} >
          <Grid container item>
              <Grid
              item
              xs={12}
              className="block"
              style={{
                  display: "flex",
                  margin: "1rem",
                  alignContent: "center",
              }}
              >
              <span style={textQuestionStyle}>{questions[currentQuestion].text}</span>
              </Grid>
          </Grid>
          <Grid container item xs={11} direction='row' alignContent='center' justifyContent='center' sx={{margin:'auto'}}>
              <form>
              {questions[currentQuestion].options.map((option, index) => (
                  <Grid key={index} container display='flex' direction='row'  >
                      <Grid xs={1}>
                          <input style={radioStyle}
                              type="radio"
                              value={option}
                              checked={answers[questions[currentQuestion].id] === option}
                              onChange={() => handleAnswerChange(questions[currentQuestion].id, option)}
                          />
                      </Grid>
                      <Grid xs={11} sx={{paddingLeft:'5px'}}>
                          <h2 style={textStyle}>{option}</h2>
                      </Grid>
                  </Grid>
              ))}
              </form>
          </Grid>
          <Grid container item>
            <Grid container item xs={12} direction='row'
                  alignContent= 'center'
                  justifyContent= 'space-around'
                  alignitems= 'center'
                  sx={{paddingTop:'20px'}}>
                {currentQuestion !== 0 && currentQuestion !== (questions.length-1) && <MainButton sx={buttonStyle} text={'Назад'} onClickHandler={handleBack}/>}
                {currentQuestion !== (questions.length-1) && <MainButton sx={buttonStyle} text={'Далі'} onClickHandler={handleNext}/>}
                {currentQuestion === (questions.length-1) && <MainButton sx={buttonStyle} text={'Отримати результат'} onClickHandler={handleSubmit}/>}
            </Grid>
          </Grid>
        </Grid>
        )}
    </Grid>
  );
};
