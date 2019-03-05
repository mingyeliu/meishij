import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '@/pages/Home';
import Header from '@/pages/Header';
import Nav from '@/pages/Nav';
import Footer from '@/pages/Footer';

class App extends Component {
  render () {
    return (
      <div className = "page">
        <Header />
        <Nav />
        <Switch>
          <Route path="/home" component = { Home } />
          <Redirect path="/" to="/home" />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App
