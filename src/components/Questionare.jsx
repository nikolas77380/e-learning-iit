import { Grid } from '@mui/material';
import React, { useState } from 'react';
import WhyComponents from './WhyComponents';
import '../pages/style.css';
import MainButton from './MainButton';

const textQuestionStyle = {
  fontFamily: 'Montserrat',
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: '30px',
  textAlign: 'center',
  color:'white',
  margin:'0'
}

const textStyle = {
  fontFamily: 'Montserrat',
  fontSize: '1rem',
  fontWeight: 700,
  lineHeight: '30px',
  textAlign: 'left',
  color:'white',
  margin:'0'
}



export default function Questionare() {
    const questions = [
        {
          id: 'question1',
          text: 'як довго ти будеш пробувати виконати  щось?  який у тебе ліміт повторних спроб?',
          options: ['Спробую один раз, якщо не вийде - покину', 
                    'Спробую кілька разів але якщо нічого не вийде. Tо є багато інших речей якими можна зайнятись', 
                    'Якщо я починаю робити щось, то мене не зупинити - буду старатись поки не виконаю', 
                    'ніхто не повинен очікувати, що з самого початку буде зроблено щось ідеальне. Я дивлюся на це таким чином. Якщо я чогось не розумію або не бачу покращення, це очікувано. Я продовжу намагатися, і наступного разу вийде краще.']
        },
        {
          id: 'question2',
          text: 'Наскільки ти зосереджений, коли працюєш? Чи легко тебе відволікти??',
          options: ['Концентрація? Кому взагалі вона портібна?', 
                'Друзі та рідні знають, що не можливо відволікти мене віт поточної справи - я навчився виключати зовнішні фактори', 
                'Мені потрібне тихе місце, щоб зосередитися. Мені важко думати через шум, музику, телевізор, розмови людей. ', 
                'Я можу зосередитися на одній справі, можливо, десять хвилин. Або поки моя улюблена пісня не зазвучить на радіо. Тоді мені важко повернутися в курс і я зазвичай знаходжу щось інше, веселіше.']
        },
        {
            id: 'question2',
            text: 'Наскільки ти зосереджений, коли працюєш? Чи легко тебе відволікти??',
            options: ['Концентрація? Кому взагалі вона портібна?', 
                  'Друзі та рідні знають, що не можливо відволікти мене віт поточної справи - я навчився виключати зовнішні фактори', 
                  'Мені потрібне тихе місце, щоб зосередитися. Мені важко думати через шум, музику, телевізор, розмови людей. ', 
                  'Я можу зосередитися на одній справі, можливо, десять хвилин. Або поки моя улюблена пісня не зазвучить на радіо. Тоді мені важко повернутися в курс і я зазвичай знаходжу щось інше, веселіше.']
          },
      ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

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
  };

  return (
    <Grid container direction='row' alignContent='center' justifyContent='center' sx={{backgroundColor:'#412B14'}}>
      <Grid container item xs={10} spacing={1} key={questions[currentQuestion]} >
        <Grid container>
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
        <Grid item marginLeft='20px'>
            <form>
            {questions[currentQuestion].options.map((option, index) => (
                <Grid key={index} container display='flex' direction='row' paddingTop='10px'>
                    <Grid xs={1}>
                        <input
                            type="radio"
                            value={option}
                            checked={answers[questions[currentQuestion].id] === option}
                            onChange={() => handleAnswerChange(questions[currentQuestion].id, option)}
                        />
                    </Grid>
                    <Grid xs={10}>
                        <h2 style={textStyle}>{option}</h2>
                    </Grid>
                </Grid>
            ))}
            </form>
        </Grid>
        <Grid>
            {currentQuestion !== 0 && currentQuestion !== (questions.length-1) && <MainButton text={'Назад'} onClickHandler={handleBack}/>}
            {currentQuestion !== (questions.length-1) && <MainButton text={'Далі'} onClickHandler={handleNext}/>}
            {currentQuestion === (questions.length-1) && <MainButton text={'Отримати результат'} onClickHandler={handleSubmit}/>}
        </Grid>
      </Grid>
    </Grid>
  );
};
