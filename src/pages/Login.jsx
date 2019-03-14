import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Input, Icon, Button, Checkbox, Popover } from 'antd'
import '@/style/login.scss'
import "antd/dist/antd.css"
import store from '@/store'
import action from '@/store/user/action'
import api from '../api/user';

class Comp extends Component {
  constructor (props){
    super(props);
    this.handler = this.handler.bind(this);
    this.handler1 = this.handler1.bind(this); 
    this.handlerpwd = this.handlerpwd.bind(this);
    this.onCheck = this.onCheck.bind(this);
    this.state={
      show:"更多第三方登录方式",
      flag: true,
      active1: 'nl_moredsf active1',
      uservalue: '',
      type_icon: '',
      yamvalue:'',
      password: '',
      emailvalue: '',
      emailpwd:'',
      check01: true,
      check02: true,
      content1:"手机号登录",
      content2:"邮箱登录"
    }
  }
  componentWillMount(){
    var a = localStorage.getItem('check01');
    var usern = localStorage.getItem('isLogin')
    var pass = localStorage.getItem('pwd')
    console.log(usern)
    if(a === "true"){
      this.setState({
        uservalue:usern,
        password:pass
      })
    console.log(usern)
    localStorage.setItem('check01',false);
    console.log(this.state.check01)
    }else{
      this.setState({
        uservalue:"",
        password:""
      })
      localStorage.setItem('isLogin',"")
      localStorage.setItem('pwd',"")
      console.log('不记密码')
    }
    var b = localStorage.getItem('check02');
    var usern1 = localStorage.getItem('isLogin_you')
    var pass1 = localStorage.getItem('pwd1')
    // this.state.emailpwd
    console.log(usern1)
    if(b === "true"){
      this.setState({
        emailvalue:usern1,
        emailpwd:pass1
      })
    console.log(usern1)
    localStorage.setItem('check02',false);
    console.log(this.state.check02)
    }else{
      this.setState({
        emailvalue:"",
        emailpwd:""
      })
      localStorage.setItem('isLogin_you',"")
      localStorage.setItem('pwd1',"")
      console.log('不记密码')
    }
  }
  Show(){
    if(this.state.flag){
      this.setState({
        show:"收起",
        flag:false,
        active1: "nl_moredsf active2",
        cuowu: ''
      })
    } else {
      this.setState({
        show:"更多第三方登录方式",
        flag:true,
        active1: "nl_moredsf active1"
      })
    }
  }
  handler(event) {
    if (event.target.value.replace(/\s/g, '').length === 11) {
      console.log(this.state.uservalue)
    }
    
    if (this.state.uservalue.replace(/\s/g, '').length < 11) {
      this.setState({
        type_icon:'info_circle',
        uservalue: event.target.value
      })
    }
  }
  handler1(event) {
    console.log(event.target.value)
    this.setState({
      yamvalue: event.target.value
    })
    if (this.state.uservalue.replace(/\s/g, '').length < 11) {
      this.setState({
        type_icon:'info_circle'
      })
    }
  }
  handlerpwd(event) {
    console.log(event);
    console.log(event.target.value)
    this.setState({
      password: event.target.value
    })
    if (this.state.password.replace(/\s/g, '').length < 11) {
      this.setState({
        type_icon:'info_circle'
      })
    }
  }
  onCheck (event) {
    console.log(event);
    // console.log(`checked = ${event.target.checked}`);
    this.setState({
      check01: !event.target.checked
      // check02: event.target.checked
    })
    console.log(this.state.check01);
    localStorage.setItem('check01',this.state.check01)
    // localStorage.setItem('check02',this.state.check02)
  }
  onCheck1 (event) {
    console.log(event);
    // console.log(`checked = ${event.target.checked}`);
    this.setState({
      check02: !event.target.checked
      // check02: event.target.checked
    })
    console.log(this.state.check02);
    localStorage.setItem('check02',this.state.check02)
    // localStorage.setItem('check02',this.state.check02)
  }
  onLogin(){
    
    console.log(this.state.uservalue)
    store.dispatch(action.requestData1(this.state.uservalue)).then(data=>{
      var login = data.data[0];
      console.log(data.data[0]);
      if(login.username === this.state.uservalue && this.state.password === login.password){
        this.setState({
          content1:"登录成功"
        })
        setTimeout(()=>{
          api.requestSearch(this.state.uservalue).then(data=>{
            console.log(data.data);
            if(data.data.length > 0){
              this.props.history.push('/u/personal')
            }else{
              this.props.history.push('/u/user/xgzl')
            }
          })
        },1000)
        
        
        localStorage.setItem('userlogin',this.state.uservalue);
        if(!this.state.check01 === true){
          console.log(this.state.check01)
          localStorage.setItem('isLogin',this.state.uservalue);
          localStorage.setItem('pwd',this.state.password);
        }else{
          localStorage.setItem('isLogin',"");
          localStorage.setItem('pwd',"");
        }
        console.log(this);
 
      }else if(login.username !== this.state.uservalue ){
        console.log("登录失败")
        this.setState({
          content1: "未找到该用户",
          uservalue:''
        })
        setTimeout(()=>{
          this.props.history.push('/j/login')
        },1000)
      }else if(login.username === this.state.uservalue && this.state.password !== login.password){
        this.setState({
          content1: "密码错误"
        })
        setTimeout(()=>{
          this.props.history.push('/j/login')
        },1000)
      }
    })
    // if(!this.state.check01 === true) {
    //   console.log(this.state.uservalue);
    //   // console.log(this.state.yamvalue);
    //   console.log(this.state.password);
    // }
  }
  handlemail (event){
    this.setState({
      emailvalue: event.target.value
    })
    console.log(this.state.emailvalue);
  }
  onEmailpwd (event) {
    this.setState({
      emailpwd: event.target.value
    })
  }
  onLogin_you(){
    console.log("11111")
    // if(!this.state.check02 === true) {
    store.dispatch(action.requestData1(this.state.emailvalue)).then(data=>{
      var login = data.data[0]
      console.log(data.data[0])
      if(login.username === this.state.emailvalue && login.password === this.state.emailpwd){
        this.props.history.push('/u/user/xgzl')
        localStorage.setItem('userlogin',this.state.emailvalue);
        if(this.state.check02 !== true) {
          localStorage.setItem('isLogin_you',this.state.emailvalue);
          
          localStorage.setItem('pwd1',this.state.emailpwd);
        }else{
          localStorage.setItem('isLogin_you',"");
          localStorage.setItem('pwd1',"");
        }
        console.log("登录成功")
        this.setState({
          content2: "登录成功"
        })
        setTimeout(()=>{
          this.props.history.push('/u/user/xgzl')
        },1000)
      }else{
        console.log("登录失败")
        this.setState({
          content2: "登录失败"
        })
        setTimeout(()=>{
          this.props.history.push('/u/user/xgzl')
        },1000)
      }
    })
    console.log(this.state.emailvalue)
    console.log(this.state.emailpwd)
    // }
  }
  render () {
    const TabPane = Tabs.TabPane;
    return (
      <div className="contentLogin">
        <div className="main_w">
          <h3 className="nl_title">
            <span className="left_span"><img src="https://s1.c.meishij.net/web1/images/nl_title_left.png" alt="123" /></span>
              登录美食杰
            <span className="right_span"><img src="https://s1.c.meishij.net/web1/images/nl_title_right.png" alt="123" /></span>
          </h3>
          <div className="nl_dsf_w1">
            <Link to="#" className="n1_a1"><span className="span_a1"></span></Link>
            <Link to="#" className="n1_a2"><span className="span_a2"></span></Link>
            <Link to="#" className="n1_a3"><span className="span_a3"></span></Link>
          </div>
          <div className="golink">
            <div className="link1" onClick={this.Show.bind(this)}>{this.state.show}&nbsp;\/</div>
            <div className={this.state.active1} >
              <Link to="#" className="a1"><i></i>&nbsp;人人网账号登录</Link>
              <Link to="#" className="a2"><i></i>&nbsp;百度账号登录</Link>
              <Link to="#" className="a3"><i></i>&nbsp;开心网账号登录</Link>
              <Link to="#" className="a4"><i></i>&nbsp;盛大通行证登录</Link>
            </div>
            <div className="tabs">
              <div className="span_ok">
                <span></span>
              </div>
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>手机登录</span>} key="1">
                  <div className="shouji">
                    <div className="username">
                      <Input size="large" type='text' placeholder="请输入手机号" defaultValue={this.state.uservalue} name="username" onChange={this.handler}/>
                      <p className="cuowu1" ><Icon type="info_circle" />&nbsp;{this.state.cuowu}</p>
                    </div>
                    <div className="pwd">
                      <Input size="large" type="password" placeholder="请输入密码" defaultValue={this.state.password} name="username" onChange={this.handlerpwd}/>
                      {/* <p className="cuowu1" ><Icon type="info_circle" />&nbsp;{this.state.cuowu}</p> */}
                    </div>
                    <div className="check">
                      <div className="check_2">
                        <div className="chec0"><Checkbox onChange={this.onCheck} className="check_1">记住密码</Checkbox></div>
                        <div className="chec1"><span><Link to="#">忘记密码?</Link></span></div>
                      </div>
                      <div className="zhuce">
                      <Popover placement="bottom" content={this.state.content1} trigger="click">
                        <Button  className="btn_zhu" onClick={this.onLogin.bind(this)}>登录</Button>
                      </Popover>
                      </div>
                    </div>
                    <p className="godeng gozhu"><Link to="/j/register">还没有账号？去注册</Link></p>
                  </div>
                </TabPane>

                <TabPane tab={<span>邮箱登录</span>} key="2">
                  <div className="youxiang">
                   <div className="you_user">
                    <Input size="large" placeholder="请输入邮箱号" defaultValue={this.state.emailvalue} name="email" onChange={this.handlemail.bind(this)}/>
                   </div>
                   <div className="you_pwd">
                    <Input size="large" type="password" placeholder="请输入密码" defaultValue={this.state.emailpwd} name="email" onChange={this.onEmailpwd.bind(this)}/>
                   </div>
                   <div className="check_2_1">
                      {/* <Checkbox onChange={this.onCheck} className="check_1">我已阅读并且同意<Link to="#">美食杰用户使用协议</Link></Checkbox> */}
                      <div className="chec0"><Checkbox onChange={this.onCheck1.bind(this)} className="check_1">记住密码</Checkbox></div>
                        <div className="chec1"><span><Link to="#">忘记密码?</Link></span></div>
                      </div>
                    <div className="zhuce_1">
                      {/* <Button  className="btn_zhu" onClick={this.onLogin_you.bind(this)}>登录</Button> */}
                      <Popover placement="bottom" content={this.state.content2} trigger="click">
                        {/* <Button>Bottom</Button>  */}
                        <Button  className="btn_zhu" onClick={this.onLogin_you.bind(this)}>登录</Button>
                      </Popover>
                    </div>
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp