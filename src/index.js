import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';
import './mysass-responsive.scss';
import {AppProvider} from './contexts';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
