import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router'
// import creatHistory from 'history/createBrowserHistory';
class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      dengname:'12363sfsdf',
      gowuche:""
    }
  }
  componentWillMount(){
    
    if(localStorage.getItem('userlogin') !== ""){
      this.setState({
        dengname:localStorage.getItem('userlogin'),
        gowuche:"购物车"
      })
    }else{
      this.setState({
        dengname:'12363sfsdf',
        gowuche:""
      })
    }
  }
  Login0(){
    localStorage.setItem('userlogin',"")
    this.props.history.push('/j/login')
  }
  LoginOut(){
    localStorage.setItem('userlogin',"")
    this.setState({
      dengname:'空白666'
    })
    // creatHistory().go(0);
    this.props.history.push('/')
  }
  render () {
    return (
      <div className="head-r">
        <Link to="#" className="user a1">
          {this.state.dengname}
          <div className="hend">
            <ul className="userCent">
              <li className="l1" onClick={this.Login0.bind(this)}>重新登录</li>
              <li className="l1">发布消息</li>
              <li className="l1" onClick={this.LoginOut.bind(this)}>退出登录</li>
            </ul>
          </div>
        </Link>
        <Link to="/j/goodsdetail" className="gwc a1">{this.state.gowuche}</Link>
        <Link to="#" className="info a1">消息</Link>    
      </div>
    )
  }
}

export default withRouter(Comp)
