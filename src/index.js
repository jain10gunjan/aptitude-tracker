import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Percentage from './Topics/Percentage';
import PercentageQ from './QuestionsTemplates/PercentageQ';
import QuadraticEquation from './Topics/QuadraticEquations';
import QuadraticEquationQ from './QuestionsTemplates/QuadraticEquationQ';
import Template2 from './Topics/Template2';
import Numbersystem from './Topics/Numbersystem';
import Timeanddistance from './Topics/Timeanddistance';
import NumbersystemQ from './QuestionsTemplates/NumbersystemQ';
import TimeandworkQ from './QuestionsTemplates/TimeandworkQ';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
  <Route path="/" element={<App />} />
  <Route path="/percentage" element={<Percentage />}/>
  <Route path="/percentage/questions/:qid" element={<PercentageQ />}/>
  <Route path="/quadratic-equations" element={<QuadraticEquation />}/>
  <Route path="/quadratic-equations/questions/:qid" element={<QuadraticEquationQ />}/>
  <Route path="/number-system" element={<Numbersystem />}/>
  <Route path="/number-system/questions/:qid" element={<NumbersystemQ />}/>
  <Route path="/time-and-work" element={<Timeanddistance />}/>
  <Route path="/time-and-work/questions/:qid" element={<TimeandworkQ />}/>
  <Route path="/test1" element={<Template2 />}/>




</Routes>
    </BrowserRouter>,
  document.getElementById('root')
);