import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '@/pages/Header'
import Nav from '@/pages/Nav'
import OtherFooter from '@/pages/OtherFooter'
import '@/style/personal.scss'
import '@/style/index.scss'
import '@/style/homedetail.scss'
import HealthyDiet from '@/pages/HealthyDiet'
import Caipu from '@/pages/Caipu'
import Kindstyle from '@/pages/Kindstyle'
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Jiajuguan from '@/pages/Jiajuguan'
import Detail from '@/pages/Detail'
import GoodsDetail from '@/pages/GoodsDetail'
class OtherApp extends Component {
  render () {
    return (
      <div className = "page">
        <Header />
        <Nav />
        <Switch>
          <Route path="/j/kindstyle/:kindstyle" component = { Kindstyle } />
          <Route path="/j/caipu/:type" component = { Caipu } />
          <Route path="/j/detail/:id" component = { Detail } />
          <Route path="/j/goodsdetail" component = { GoodsDetail } />
          <Route path="/j/healthy" component = { HealthyDiet } />
          <Route path="/j/cart/:id" component = { Cart } />
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
