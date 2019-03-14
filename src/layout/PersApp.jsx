import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import HeaderUser from '@/pages/HeaderUser'
import Nav from '@/pages/Nav'
import Personal from '@/pages/Personal'
import OtherFooter from '@/pages/OtherFooter'
import User from '@/pages/User'

class PersApp extends Component {
  render () {
    return (
      <div className = "page">
        <HeaderUser />
        <Nav />
        <Switch>
          <Route path="/u/user" component = { User } />
          <Route path="/u/personal" component = { Personal } />
          <Redirect path="/u" to="/u/personal" />
        </Switch>
        <OtherFooter />
      </div>
    )
  }
}

export default PersApp
