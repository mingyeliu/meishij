import React, { Component } from 'react'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  componentDidMount () {
    let ali = Array.from(document.querySelectorAll("i"));
    // console.log(ali);
    // 转换class的值
    for(var i = 0; i < ali.length; i++) {
      ali[i].addEventListener('click', function () {
        for( var j = 0; j < ali.length; j++){
          ali[j].className = '';
        }
        this.className = "active";
      })
    }
  }
  render () {
    return (
      <div className = "persContent">
        <div className="margin">
          <div className="titpers">欢迎来到我的美食空间</div>
          <div className="contpers"></div>
          <div className="navpers">
            <ul>
              <li className="anav"><i className="active">动态</i></li>
              <li className="anav"><i herf="#">作品</i></li>
              <li className="anav"><i herf="#">任务</i></li>
              <li className="anav"><i herf="#">收藏</i></li>
              <li className="anav"><i herf="#">喜好</i></li>
              <li className="anav"><i herf="#">测试</i></li>
              <li className="anav"><i herf="#">讨论</i></li>
              <li className="anav"><i herf="#">浏览记录</i></li>
            </ul>
          </div>
          <div className="menupers"></div>
        </div>
      </div>
    )
  }
}

export default Comp
