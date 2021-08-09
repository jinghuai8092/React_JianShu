import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import {GlobalStyle} from './style';

ReactDOM.render(
  <React.StrictMode>
    <App />
      <GlobalStyle/>
    {/* </App> */}
  </React.StrictMode>,
  document.getElementById('root')
);
