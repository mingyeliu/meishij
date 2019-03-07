import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderPers from '@/pages/HeaderPers';
import Nav from '@/pages/Nav';
import Personal from '@/pages/Personal';
import OtherFooter from '@/pages/OtherFooter';

class PersApp extends Component {
  render () {
    return (
      <div className = "page">
        <HeaderPers />
        <Nav />
        <Route path="/personal" component = { Personal } />
        <OtherFooter />
      </div>
    )
  }
}

export default PersApp
