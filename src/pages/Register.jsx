import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs, Input, Icon,Button,Checkbox,Popover } from 'antd'
import '@/style/login.scss'
import "antd/dist/antd.css"
import store from '@/store'
import action from '@/store/user/action'

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
      isdata:'',
      content1:'',
      content2:''
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
    // console.log(event);
    // console.log(event.target.value)
    // this.setState({
    //   uservalue: event.target.value
    // })
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
  Yanzheng(){ 
    setTimeout(() => {
      this.setState({
        yamvalue:"123456"
      })
    }, 1000);
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
    console.log(`checked = ${event.target.checked}`);
    this.setState({
      check01: !event.target.checked,
      check02: !event.target.checked
    })
    console.log(this.state.check01)
  }
  onZhuce(){
    if(!this.state.check01 === true) {
      console.log(this.state.check01)
      console.log(this.state.uservalue);
      console.log(this.state.yamvalue);
      console.log(this.state.password);
      if(!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.state.uservalue))){
        console.log("不是正确的手机格式")
        this.setState({
          uservalue:'',
          content1:"不是正确的手机格式"
        })
      }else if((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.state.uservalue)) && this.state.yamvalue !=="123456"){
        console.log("验证码不正确")
        this.setState({
          yamvalue:'',
          content1:"验证码不正确"
        })
      }else if((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.state.uservalue)) && this.state.yamvalue ==="123456" && this.state.password.length <=5){
        console.log("密码长度不符合")
        this.setState({  
          content1:"密码长度不符合"
        })
      }else if((/^1[3|4|5|8][0-9]\d{4,8}$/.test(this.state.uservalue)) && this.state.yamvalue ==="123456" && this.state.password.length >5){
        store.dispatch(action.requestData(this.state.uservalue,this.state.password)).then(data =>{
          console.log(data);
          console.log(typeof(data));
          if(data === 1){
            console.log('ok')
            this.setState({
              content1:"注册成功"
            })
            this.props.history.push('/userapp/login');
          }else if(data === 0){
            console.log("注册过了")
            this.setState({
              content1:"已注册"
            })
          } else if(data === -1){
            console.log("注册失败")
            this.setState({
              content1:"注册失败"
            })
          }
        })
        this.setState({
          uservalue:'',
          password:'',
          yamvalue:''
        }) 
      }
      // if(this.state.isdata === 1){
      //   console.log("注册成功")
      // }
      console.log(this.state.isdata)
    }else if(!this.state.check01 === false){
      this.setState({
        content1:"请阅读并点击同意美食杰用户使用条例"
      })
    }
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
  onZhuce_you(){
    // var msg = /^([0-9A-Za-z\-_\.]+)@([0-9a-z]+\.[a-z]{2,3}(\.[a-z]{2})?)$/g;
    var msg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
    
    if(this.state.check02 === true) {
      if(!msg.test(this.state.emailvalue)){
        this.setState({
          content2:'邮箱格式不正确'
        })
        console.log("邮箱格式不正确")
      }else if(msg.test(this.state.emailvalue) && this.state.emailpwd.length <=5){
        this.setState({
          content2:'密码长度不符'
        })
        console.log("密码长度不符");
      }else if(msg.test(this.state.emailvalue) && this.state.emailpwd.length >5){
        store.dispatch(action.requestData(this.state.emailvalue,this.state.emailpwd)).then(data=>{
          console.log(data)
          if (data === 1) {
            this.setState({
              content2:'注册成功'
            })
            this.props.history.push('/userapp/login');
            console.log("注册成功")
          }else if(data === 0){
            this.setState({
              content2:'已注册'
            })
            console.log("已注册")
            console.log(this);
          }else if(data === 0){
            console.log("注册失败")
            this.setState({
              content2:'注册失败'
            })
          }
          console.log(typeof(data))
        })
        console.log("注册成功");
      }
      // console.log(this.state.emailvalue)
      // console.log(this.state.emailpwd)
      // store.dispatch(action.requestData())
    }else if(this.state.check02 === false){
      this.setState({
        content2:'请阅读并点击同意美食杰用户使用条例'
      })
    }
  }
  render () {
    const TabPane = Tabs.TabPane;
    return (
      <div className = "contentLogin">
        <div className="main_w">
          <h3 className="nl_title">
            <span className="left_span"><img src="https://s1.c.meishij.net/web1/images/nl_title_left.png" alt="线" /></span>
              注册美食杰
            <span className="right_span"><img src="https://s1.c.meishij.net/web1/images/nl_title_right.png" alt="线" /></span>
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
                <TabPane tab={<span>手机注册</span>} key="1">
                  <div className="shouji">
                    <div className="username">
                      <Input size="large" placeholder="请输入手机号" value={this.state.uservalue} name="username" onChange={this.handler}/>
                      <p className="cuowu1" ><Icon type="info_circle" />&nbsp;{this.state.cuowu}</p>
                    </div>
                    <div className="yanzheng">
                      <div className="yzm">
                        <Input size="large"  placeholder="请输入验证码" value={this.state.yamvalue} name="username" onChange={this.handler1}/>
                      </div>
                      <div className="yzm_l">
                       <Button  className="btn_yan" onClick={this.Yanzheng.bind(this)}>验证码</Button>
                      </div>
                      <p className="cuowu1" ><Icon type="info_circle" />&nbsp;</p>
                    </div>
                    <div className="pwd">
                      <Input size="large" type="password" placeholder="请输入密码" value={this.state.password} name="username" onChange={this.handlerpwd}/>
                      {/* <p className="cuowu1" ><Icon type="info_circle" />&nbsp;{this.state.cuowu}</p> */}
                    </div>
                    <div className="check">
                      <div className="check_1">
                        <Checkbox onChange={this.onCheck} className="check_1">我已阅读并且同意<Link to="#">美食杰用户使用协议</Link></Checkbox>
                      </div>
                      <div className="zhuce">
                      <Popover placement="bottom" content={this.state.content1} trigger="click">
                        <Button  className="btn_zhu" onClick={this.onZhuce.bind(this)}>注册</Button>
                      </Popover>
                      </div>
                    </div>
                    <p className="godeng"><Link to="/j/login">已有账号去登陆</Link></p>
                  </div>
                </TabPane>
                <TabPane tab={<span>邮箱注册</span>} key="2">
                  <div className="youxiang">
                    <div className="you_user">
                      <Input size="large" placeholder="请输入邮箱号" value={this.state.emailvalue} name="email" onChange={this.handlemail.bind(this)}/>
                    </div>
                    <div className="you_pwd">
                      <Input size="large" type="password" placeholder="请输入密码" value={this.state.emailpwd} name="email" onChange={this.onEmailpwd.bind(this)}/>
                    </div>
                    <div className="check_1">
                      <Checkbox onChange={this.onCheck} className="check_1">我已阅读并且同意<Link to="#">美食杰用户使用协议</Link></Checkbox>
                    </div>
                    <div className="zhuce_1">
                      <Popover placement="bottom" content={this.state.content2} trigger="click">
                        <Button className="btn_zhu" onClick={this.onZhuce_you.bind(this)}>注册</Button>
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
