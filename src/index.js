import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import './mysass-responsive.scss';
import App from './App';
// import {AppProvider} from './context';

ReactDOM.render(
  <React.StrictMode>
    {/* <AppProvider> */}
      <App />
    {/* </AppProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
