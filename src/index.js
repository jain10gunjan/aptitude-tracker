import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import Percentage from './Topics/Percentage';
import PercentageQ from './Topics/PercentageQ';
import reportWebVitals from './reportWebVitals';
import './index.css';



ReactDOM.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/arrays" element={<Percentage />} />
      <Route path="/percentage/questions/:qid" element={<PercentageQ />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
