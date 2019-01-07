import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import Navigation from "./components/Navigation";
import Wrapper from "./components/Wrapper";

import "normalize-scss";
import "./styles.css";

function App() {
  return (
    <div className="application">
      <Provider store={store}>
        <Navigation />
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Wrapper} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
