import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Page1 from './page/page1';
import Page2 from './page/page2';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Page1 />} />
      <Route  path="/page2" element={<Page2 />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
