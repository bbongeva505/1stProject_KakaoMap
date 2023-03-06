import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import KakaoMap from "./pages/KakaoMaps";
import reportWebVitals from './reportWebVitals';
import Search from './app/Search';



ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    <>
      <KakaoMap />
    </>,
    document.getElementById("kakao")
  );

ReactDOM.render(<Search />, document.getElementById("search"))

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
