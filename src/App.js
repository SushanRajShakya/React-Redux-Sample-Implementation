import './App.css';
import 'typeface-roboto';

import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { AppBar, Toolbar } from '@material-ui/core';
import TypoGraphy from '@material-ui/core/Typography';

import VisitScheduling from './components/VisitScheduling/VisitScheduling';
import VisitPrioritization from './components/VisitPrioritization/VisitPrioritization';


function App() {
  return (
    <Provider store={store}>
      <div>
        <AppBar position="static">
          <Toolbar>
            <TypoGraphy variant="title" color="inherit">
              Sales BI
            </TypoGraphy>
          </Toolbar>
        </AppBar>
        <VisitPrioritization/>
        <VisitScheduling/>
      </div>
    </Provider>
  );
}

export default App;