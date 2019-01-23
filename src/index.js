import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import Navigation from './components/Navigation';
import Wrapper from './components/Wrapper';

import CssBaseline from '@material-ui/core/CssBaseline';

import 'typeface-roboto';
import './global.scss';

function App() {
  return (
    <div className="pr-app">
      <CssBaseline />
      <Provider store={store}>
        <BrowserRouter>
          <Fragment>
            <Navigation />
            <Switch>
              <Route exact path="/" component={Wrapper} />
              <Route exact path="/metronome" />
              <Route exact path="/chords" />
            </Switch>
          </Fragment>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
