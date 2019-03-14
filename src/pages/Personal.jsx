import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '@/api/user'
import { Divider, Tabs } from 'antd'
import "antd/dist/antd.css"

class Comp extends Component {
  constructor (props) {
    super(props);
    // this.mytime = this.getTime.bind(this);
    this.state = {
      nick: '空白666',
      time: '',
      datetime1:'2015/01/01',
      sex:"未知",
      qianming:"哥从未来过"
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
   
    if(localStorage.getItem("userlogin") ===""){
      console.log("未登录")
    }else{
      var a = localStorage.getItem("userlogin")
      setTimeout(()=>{
        
        api.requestSearch1(a).then(data=>{
          if(data===undefined){
            console.log(data)
            // setTimeout(()=>{
            //   window.location.reload();
            // },2)
          }else{
            this.setState({
              nick:data.nickname,
              datetime1:data.shengri,
              qianming:data.qianming,
              sex:data.sex,
              
            })
          }
          console.log(data)
      })
      },40)
    }
  
  }

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
                <span>{this.state.nick}</span>
                <button className="myletter">我的私信</button>
              </div>
              <div className="total">
                <Link to="#" className="toAct">生日：{this.state.datetime1.replace('/','-').replace('/','-')}</Link>
                <Divider type="vertical" />
                <Link to="#" className="toAct">性别：{this.state.sex}</Link>
              </div>
              
              <div className="adit">
                2019-03-14加入美食杰
                <Divider type="vertical" />
                <Link to="/u/user" className="toAct">编辑个人资料</Link>
              </div>
              <p>个性签名:{this.state.qianming}</p>
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
                  {/* <span>2019-03-13 09:05</span> */}
                </div>
                <div className="inform">
                  <p>亲爱的{this.state.nick}，欢迎加入美食杰，快来开始您的美食生活吧~<br />在美食杰，您可以——<br />在菜谱大全里学做菜，发菜谱；<br />在家居馆（即将上线）里用积分兑换礼品，参加试用或秒杀活动；里发起话题、回复和活动，找到志同道合的小伙伴；<br />其他问题请联系美食小编，祝您生活愉快！</p>
                  {/* <span>2019-03-13 09:05</span> */}
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
