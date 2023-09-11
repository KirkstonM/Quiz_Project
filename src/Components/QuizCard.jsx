import React, { Fragment, useState } from 'react';
import { map } from 'lodash';
import { updateFinalResult, clearFinalResult } from '../Redux/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import appStyles from '../styles/styles';

const QuizCard = ({
  correct_answer,
  question,
  next,
  currentQuizNumber,
  totalNumberOfQuestions,
  incorrect_answers
}) => {
  const dispatch = useDispatch();
  const answers = useSelector(state => state.app.correctlyAnswered)
  const allAnswers = [].concat(correct_answer, incorrect_answers)
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const correctAnswerSelected = selectedAnswer?.toLowerCase() === correct_answer?.toLowerCase();

  const handleNextButton = () => {
    currentQuizNumber === totalNumberOfQuestions - 1
      ? setIsCompleted(true)
      : next()
    setSelectedAnswer(null)
    correctAnswerSelected
      ? dispatch(updateFinalResult())
      : ""
  };

  const EndQuizBox = () => {
    return (
      <div style={{
        ...appStyles.QuizCompletedBox,
        color: answers > (totalNumberOfQuestions / 2) ? "#1fef10" : "red"
      }}>
        <h1> YOU SCORED : {`${answers}/${totalNumberOfQuestions}`}  </h1>
        <button onClick={() => (window.location.reload(), dispatch(clearFinalResult()))}
          style={appStyles.RedirectButton}> TAKE ME BACK &#8635; </button>
      </div>
    );
  }

  const mappedAnswers = map(allAnswers, (values, i) => {
    const isSelected = selectedAnswer === values;
    return (
      <Fragment key={i}>
        <button type='button'
          onClick={() => setSelectedAnswer(values)}
          dangerouslySetInnerHTML={{ __html: values }}
          style={{
            ...appStyles.AnswerButtons,
            ...(isSelected && appStyles.SelectedAnswerButton)
          }}
        ></button>
      </Fragment>
    );
  })

  return (
    <div style={appStyles.mainPage}>
      {
        isCompleted
          ? (
            <div >
              <EndQuizBox />
            </div>
          )
          : (
            <>
              <div style={appStyles.QuestionBox}>
                <div style={appStyles.QuestionNumberToolTip}>
                  <h3> Question <span style={{ fontSize: '20px' }}>{currentQuizNumber + 1}</span> / {totalNumberOfQuestions} </h3>
                </div>
                <div style={appStyles.Question}>
                  <h1 dangerouslySetInnerHTML={{ __html: question }}></h1>
                </div>
                <div style={appStyles.AnswerButtonsContainer}>
                  {mappedAnswers}
                </div>
                <div style={appStyles.Dividers}> </div>
                <div style={appStyles.NextButtonContainer}>
                  <button type='button' onClick={handleNextButton}
                    style={{
                      ...appStyles.NextButton,
                      opacity: selectedAnswer === null ? '0.5' : '1',
                    }}
                    disabled={selectedAnswer === null}
                  > NEXT </button>
                </div>
                <div style={appStyles.Dividers}> </div>
              </div>
            </>
          )
      }
    </div>
  )
}

export default QuizCard