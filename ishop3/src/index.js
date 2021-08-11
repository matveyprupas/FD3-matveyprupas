import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop3 from './App';
import goodsHash from './goodsHash.json';

ReactDOM.render(
  <React.StrictMode>
    <Shop3 shopName={goodsHash.shopName} goodsArr={goodsHash.goodsArr} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();