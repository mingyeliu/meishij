import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/style/users.scss'
import "antd/dist/antd.css"
import Xgzl from '@/components/personal/Xgzl'
import Xgtx from '@/components/personal/Xgtx'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      key01:1
    }
  }
  Active01(){
    console.log(1)
    this.setState({
      key01:1
    })
  }
  Active02(){
    console.log(1)
    this.setState({
      key01:2
    })
  }
  render () {
    var html = "";
    if(this.state.key01 === 1){
      html = <Xgzl />;
    }else if(this.state.key01 === 2){
      html = <Xgtx />;
    }
    return (
      <div className="contentUser">
        <div className="margin">
          <h1 className="h1_1">修改个人资料</h1>
          <div className="user_inner_tab">
            <Link to="/u/personal" className="backuser"></Link>
            <ul className="user_inner_tab_ul">
              <li>
                <Link to="/u/user/xgzl" className="user_inner1" onClick={this.Active01.bind(this)}>
                  编辑个人资料
                </Link>
              </li>
              <li>
                <Link to="/u/user/xgtx" className="user_inner1" onClick={this.Active02.bind(this)}>
                  修改头像
                </Link>
              </li>
              <li>
                <Link to="/u/user/xgmi" className="user_inner1" >
                  修改密码
                </Link>
              </li>
              <li>
                <Link to="/u/user/youxiang" className="user_inner1">
                  邮箱设置
                </Link>
              </li>
              <li>
                <Link to="/u/user/shouji" className="user_inner1">
                  手机设置
                </Link>
              </li>
              <li>
                <Link to="/u/user/yaoqing" className="user_inner1">
                  邀请好友
                </Link>
              </li>
              <li>
                <Link to="/u/user/zhbd" className="user_inner1">
                  账号绑定
                </Link>
              </li>
            </ul>
          </div>
          { html }
        </div>
      </div>
    )
  }
}

export default Comp
