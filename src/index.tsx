import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import 'normalize.css';
import './assets/styles/index.scss';

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById('root'));
