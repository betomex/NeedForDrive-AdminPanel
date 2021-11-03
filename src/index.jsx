import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App';
import store from "./redux/reduxStore";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <App/>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();