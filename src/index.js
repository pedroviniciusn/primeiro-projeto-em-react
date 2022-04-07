import React from 'react';
import ReactDOM from 'react-dom';

import {  ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, red } from '@material-ui/core/colors';

import App from './App';
import './index.css'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[900]
    },
    secondary: {
      main: red[900],
    }
  }

})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


