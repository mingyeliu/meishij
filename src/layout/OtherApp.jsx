import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '@/pages/Header'
import Nav from '@/pages/Nav'
import OtherFooter from '@/pages/OtherFooter'
import '@/style/personal.scss'
import '@/style/index.scss'
import HealthyDiet from '@/pages/HealthyDiet'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

class OtherApp extends Component {
  render () {
    return (
      <div className = "page">
        <Header />
        <Nav />
        <Switch>
          <Route path="/other/healthy" component = { HealthyDiet } />
          <Route path="/other/login" component = { Login } />
          <Route path="/other/register" component = { Register } />
          <Redirect path="/other" to="/other/healthy" />
        </Switch>
        <OtherFooter />
      </div>
    )
  }
}

export default OtherApp
