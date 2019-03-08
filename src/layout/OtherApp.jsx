import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '@/pages/Header'
import Nav from '@/pages/Nav'
import OtherFooter from '@/pages/OtherFooter'
import '@/style/personal.scss'
import '@/style/index.scss'
import '@/style/homedetail.scss'
import HealthyDiet from '@/pages/HealthyDiet'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Jiajuguan from '@/pages/Jiajuguan'
import Detail from '@/pages/Detail'

class OtherApp extends Component {
  render () {
    return (
      <div className = "page">
        <Header />
        <Nav />
        <Switch>
          <Route path="/j/detail" component = { Detail } />
          <Route path="/j/healthy" component = { HealthyDiet } />
          <Route path="/j/cart" component = { Cart } />
          <Route path="/j/jiajuguan" component = { Jiajuguan } />
          <Route path="/j/login" component = { Login } />
          <Route path="/j/register" component = { Register } />
          <Redirect path="/j" to="/j/healthy" />
        </Switch>
        <OtherFooter />
      </div>
    )
  }
}

export default OtherApp
