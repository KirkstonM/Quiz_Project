import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../Redux/appSlice';
import QuizCard from '../Components/QuizCard';
import appStyles from '../styles/styles';

function Quiz() {

  const quizData = useSelector(state => state.app.data);
  const isLoading = useSelector(state => state.app.loading);
  const dispatch = useDispatch();
  const totalQuestions = quizData.length;
  const [quizNumber, setQuizNumber] = useState(0);

  useEffect(() => {
    dispatch(fetchData())
  }, []);
  
  const currentQuestion = quizData[quizNumber];

  const Loader = () => {
    return <h1 style={appStyles.Loader}> Loading....</h1>
  };

  const nextQuestion = () => {
    setQuizNumber(prev => (prev + 1) % totalQuestions)
  };

  return (
    <div style={appStyles.mainPage}>
      {
        isLoading
          ? <Loader />
          :
          <QuizCard {...currentQuestion}
            next={nextQuestion}
            currentQuizNumber={quizNumber}
            totalNumberOfQuestions={totalQuestions}
          />
      }
    </div>
  )
}

export default Quiz