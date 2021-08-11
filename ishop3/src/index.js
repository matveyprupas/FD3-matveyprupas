import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Shop3 from './App';
// import reportWebVitals from './reportWebVitals';

let goodsHash = {
  shopName: "IShop3",
  goodsArr: [
    {name: 'iPhone', code: 1, cost: 749, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone12_white.png", left: 5}, 
    {name: 'iPad', code: 2, cost: 949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/p/ipad_pro_12_9-in_wi-fi_space_gray_2-up_screen__usen_5.jpg", left: 16}, 
    {name: 'MacBook', code: 3, cost: 1449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/m/b/mbp13_m1_space_3.png", left: 958}, 
    {name: 'iMac', code: 4, cost: 1949, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/i/m/imac21non_3.png", left: 666}, 
    {name: 'iWatch', code: 5, cost: 449, imageLink: "https://www.ideal.lt/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/a/p/apple_watch_series_6_gps_40mm_gold_aluminum_pink_sand_sport_band_34r_screen__usen.png", left: 222}, 
    {name: 'iCat', code: 6, cost: 666, imageLink: "https://petsi.net/images/catbreed/kanadskiy-sfinks.jpg", left: 0}, 
  ],
};

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
