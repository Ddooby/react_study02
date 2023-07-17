// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// 가장 간단한 Component 만드는 방법 하나
import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';

import AwesomeGreegting from './AwesomeGreeting';

ReactDOM.render(
  //[1강, component]
  //<Greeting></Greeting>, 

  //[2강, props]
  <>
  <AwesomeGreegting userName="Ddooby"/>
  <AwesomeGreegting userName="정철환"/>
  <AwesomeGreegting userName="Jeong Cheol Hwan"/>
  </>,
  document.getElementById('root')
)