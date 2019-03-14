import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Com extends Component{
  constructor(props){
    super(props);
    this.state={
      value:'',
      qqd:'登录',
      qqzhu:'注册',
      deng:'用户中心',
      // zhuce:"QQ登录"
    }
  }
  render(){
    return (
      <div>
        {/* <Link to="#" className="b1">{this.state.zhuce}</Link> */}
        <Link to="/u/personal" className="b1">{this.state.deng}</Link>
        <Link to="/j/register"className="wb">{this.state.qqzhu}</Link>
        <Link to="/j/login" className="qq">{this.state.qqd}</Link>   
      </div>   
    )
  }
}

export default Com