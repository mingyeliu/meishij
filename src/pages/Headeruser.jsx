import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Headr from '@/components/header/head-r'

class Comp extends Component {
  
  render () {
    return (
      <header className = "header">
        <div className="margin">
          <div id="topAnchor"></div>
          <div>
            <a href="#topAnchor"><button id="btnTop" title="返回顶部">返回顶部</button></a>
          </div>
          <Link to="/home" className="h-l"></Link>
          <div className="h-c">
            <input type="search" name="" placeholder="请输入菜谱/食材/菜单/作者" className="search1" />
            <input type="submit" value="搜索" className="search2" /> 
          </div>
          <Headr />
        </div>  
      </header>
    )
  }
}

export default Comp
