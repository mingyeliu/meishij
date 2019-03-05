import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <nav className="nav">
        <div className="margin">
          <ul>
            <li><Link to="#">首页</Link></li>
            <li><Link to="#">菜谱大全</Link></li>
            <li><Link to="#">饮食健康</Link></li>
            <li><Link to="#">美食菜单</Link></li>
            <li><Link to="#">家居馆</Link></li>
            <li><Link to="#"><img src="https://s1.st.meishij.net/p2/20160909/20160909164810_443.png" alt=""/>美食达人</Link></li>
            <li><Link to="#">菜谱视频</Link></li>
            <li><Link to="#">产品下载</Link></li>
          </ul>
        </div>   
      </nav>
    )
  }
}

export default Comp
