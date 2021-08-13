import React from 'react';
import ReactDOM from 'react-dom';
import './style.js';
import App from './App';
import {GlobalStyle} from './style';
// import {IconFontGlobalStyle} from './status/iconfont/iconfont'


ReactDOM.render(
    <App >
      <GlobalStyle/>
      {/* <IconFontGlobalStyle/> */}
    </App> ,
  document.getElementById('root')
);
