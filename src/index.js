import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigbar from './pages/Navbar';
import reportWebVitals from './reportWebVitals';
import Main from './pages/Main';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pros from './pages/Pros';
import Calling from './pages/Calling';
import Steps from './pages/Steps';
import Contacts from './pages/Contacts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigbar />
    <Main />
    <Services />
    <Portfolio />
    <About />
    <Pros />
    <Calling />
    <Steps />
    <Contacts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
