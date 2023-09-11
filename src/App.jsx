import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Quiz from './Pages/Quiz';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/quiz' element={<Quiz />} />
      </Routes>
    </Fragment>
  )
}

export default App