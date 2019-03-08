import React, { Component } from 'react'
// import { Link } from 'react-dom'
import { Divider } from 'antd'
import "antd/dist/antd.css"

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
          <div className="contpers">
            <div className="aImg"><img src="https://s1.c.meishij.net/images/default/tx2_1.png" alt="头像"/></div>
            <div className="cont-c">
              <div className="neck">
                <span>空白666</span>
                <button className="btnGrade">LV1</button>
                <button className="myletter">我的私信</button>
              </div>
              <div className="total">
                <span>积分：24</span>
                <Divider type="vertical" />
                <span>经验值：6</span>
              </div>
              <div className="adit">
                2019-03-19加入美食杰
                <Divider type="vertical" />
                <span>编辑个人资料</span>
              </div>
            </div>
            <div className="cont-r"></div>
          </div>
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
