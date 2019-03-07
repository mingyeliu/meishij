import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comp extends Component {
  
  render () {
    return (
      <header className = "header">
        <div className="margin">
          <Link to="/home" className="h-l"></Link>
          <div className="h-c">
            <input type="search" name="" placeholder="请输入菜谱/食材/菜单/作者" className="search1" />
            <input type="submit" value="搜索" className="search2" /> 
          </div>
          <div className="h-r">
            <Link to="#" className="b1">登录</Link>
            <Link to="#" className="b1">注册</Link>
            <Link to="#" className="wb">微博登录</Link>
            <Link to="#" className="qq">QQ登录</Link>    
          </div>
        </div>  
      </header>
    )
  }
}

export default Comp
