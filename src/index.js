import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import OtherApp from './layout/OtherApp';
import App from './layout/App';
import * as serviceWorker from './serviceWorker';
import './main.scss';
import '@/style/index.scss'

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/healthy" component = { OtherApp } />
      <Route path="/" component = { App } />
    </Switch>
  </Router>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
