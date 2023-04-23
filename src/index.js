import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Percentage from './Topics/Percentage';
import PercentageQ from './Topics/PercentageQ';
import QuadraticEquation from './Topics/QuadraticEquations';
import QuadraticEquationQ from './QuestionsTemplates/QuadraticEquationQ';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/percentage" element={<Percentage />}/>
  <Route path="/percentage/questions/:qid" element={<PercentageQ />}/>
  <Route path="/quadratic-equations" element={<QuadraticEquation />}/>
  <Route path="/quadratic-equations/questions/:qid" element={<QuadraticEquationQ />}/>

</Routes>
    </BrowserRouter>,
  document.getElementById('root')
);