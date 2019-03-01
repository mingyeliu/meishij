import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home';
import HealthyDiet from '@/pages/HealthyDiet';

class App extends Component {
  render () {
    return (
      <div className = "page">
        <header className = "header"><div className="margin">头部</div></header>
        <div className = "nav"><div className="margin">导航</div></div>
        {/* <div className = "content">内容</div> */}
        <Switch>
          <Route path="/home" component = { Home } />
          <Route path="/healthy" component = { HealthyDiet } />
          <Redirect path="/" to="/home" />
        </Switch>
        <footer className = "footer"><div className="margin">底部</div></footer>
      </div>
    )
  }
}

export default App
