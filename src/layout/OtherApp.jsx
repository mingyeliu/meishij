import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '@/pages/Header';
import Nav from '@/pages/Nav';
import HealthyDiet from '@/pages/HealthyDiet';
import OtherFooter from '@/pages/OtherFooter';

class OtherApp extends Component {
  render () {
    return (
      <div className = "page">
        <Header />
        <Nav />
        {/* <HealthyDiet /> */}
        <Route path="/healthy" component = { HealthyDiet } />
        <OtherFooter />
      </div>
    )
  }
}

export default OtherApp
