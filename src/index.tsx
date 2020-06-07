import { theme } from '@core/lib/styles';
import LuxonUtils from '@date-io/luxon';
import { ThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <App />
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.register();
