import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import Percentage from './Topics/Percentage';
import PercentageQ from './Topics/PercentageQ';

ReactDOM.render(
  <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/percentage" element={<Percentage />} />
      <Route path="/percentage/questions/:qid" element={<PercentageQ />} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);