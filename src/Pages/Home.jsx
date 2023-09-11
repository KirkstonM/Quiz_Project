import React from 'react';
import { Link } from 'react-router-dom';
import appStyles from '../styles/styles';

function Home() {
  return (
    <div style={appStyles.mainPage}>
      <div style={{
        ...appStyles.QuestionBox,
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '60px' }}> QUIZ TIME!!</h1>
        <Link to={'/quiz'}>
          <button type='button' style={appStyles.quizStartBtn}> LETS GO &#8669; </button>
        </Link>
      </div>
    </div>
  )
}

export default Home