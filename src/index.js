import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import App1 from './App1';
import { BrowserRouter } from 'react-router-dom';
//import AppForm from './form/AppForm'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <App/> */}
      {/* <App/> */}
      <App1 /> 
        {/* <AppForm/> */}
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
