import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Divider, Tabs } from 'antd'
import "antd/dist/antd.css"

class Comp extends Component {
  constructor (props) {
    super(props);
    // this.mytime = this.getTime.bind(this);
    this.state = {
      nick: '空白666',
      time: ''
    }
  }
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
  // getTime () {
  //   let date = new Date();
  //   let year = date.getFullYear();
  //   let month = date.getMonth() + 1;
  //   let day = date.getDate();
  //   let hours = date.getHours();
  //   let min = date.getMinutes();
  //   let mon = month.length === 2 ? month : '0' + month;
  //   let d = day.length === 2 ? day : '0' + day;
  //   let myDate = year + '-' + mon + '-' + d + ' ' + hours + ':' + min;
  //   this.setState({
  //     time: myDate
  //   })
  // }
  render () {
    const TabPane = Tabs.TabPane;
    return (
      <div className = "persContent">
        <div className="margin">
          <div className="titpers">欢迎来到我的美食空间</div>
          <div className="contpers">
            <div className="aImg"><img src="https://s1.c.meishij.net/images/default/tx2_1.png" alt="头像"/></div>
            <div className="cont-c">
              <div className="neck">
                <span>空白666</span>
                <button className="myletter">我的私信</button>
              </div>
              <div className="total">
                <Link to="#" className="toAct">积分：24</Link>
                <Divider type="vertical" />
                <Link to="#" className="toAct">经验值：6</Link>
              </div>
              <div className="adit">
                2019-03-19加入美食杰
                <Divider type="vertical" />
                <Link to="#" className="toAct">编辑个人资料</Link>
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
          <div className="menupers">
            <Tabs type="card">
              <TabPane tab="通知列表" key="1">
                <div className="inform">
                  <p>亲爱的{ this.state.nick }，恭喜恭喜！欢迎初来乍到美食杰的你！从现在开始，只要多发菜谱，玩转论坛，“菜谱收集”的称号等着你呢！！我们期待你优秀的作品出炉！</p>
                  <span>2019-03-13 09:05</span>
                </div>
                <div className="inform">
                  <p>亲爱的空白666，欢迎加入美食杰，快来开始您的美食生活吧~<br />在美食杰，您可以——<br />在菜谱大全里学做菜，发菜谱；<br />在家居馆（即将上线）里用积分兑换礼品，参加试用或秒杀活动；里发起话题、回复和活动，找到志同道合的小伙伴；<br />其他问题请联系美食小编，祝您生活愉快！</p>
                  <span>2019-03-13 09:05</span>
                </div>
              </TabPane>
              <TabPane tab="我的私信列表" key="2">
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp
