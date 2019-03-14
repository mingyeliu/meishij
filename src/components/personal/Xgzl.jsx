import React, { Component } from 'react'
import './Xgzl1.scss'
import 'antd/dist/antd.css'
import {Input, DatePicker, Radio, Button } from 'antd'
import moment from "moment"
import api from '@/api/user'
import {withRouter} from 'react-router'





const { TextArea } = Input;
const dateFormat = 'YYYY/MM/DD';
const RadioGroup = Radio.Group;

class Comp extends Component {
  constructor(props){
    super(props);
    this.state = {
      radiovalue:'',
      phoneval:"",//从数据库中调用数据
      TextArea:"",
      Nicknameval:"",
      datevalue:'2015/01/01'
    }
  }
  componentWillMount(){
   
      this.setState({
        phoneval:localStorage.getItem('userlogin')
      })
      console.log(localStorage.getItem('userlogin'))
      api.requestSearch(localStorage.getItem('userlogin')).then(data=>{
        console.log(data)
        if(data.data.length === 0){
          console.log("请修改资料")
        }else{
          this.setState({
            TextArea:data.data[0].qianming,
            Nicknameval:data.data[0].nickname,
            radiovalue:data.data[0].sex,
            datevalue:data.data[0].shengri
          })
          console.log(data.data[0].qianming)
          console.log(this.state.Nicknameval)
        }
      })
  }
  Phone(){
    // console.log('Phone')
  }
  TextArea(event){
    this.setState({
      TextArea:event.target.value
    })
    // console.log('TextArea')
  }
  onChange(date, dateString){
    // console.log(date._d);
    console.log(dateString);
    this.setState({
      datevalue:dateString
    })
  }
  onChangeRadio = (e) => {
    // console.log('radio checked', e.target.value);
    this.setState({
      radiovalue: e.target.value,
    });
    
  }
  Nickname(event){
    // console.log(event.target.value)
    this.setState({
      Nicknameval:event.target.value
    })
    // console.log(this.state.Nicknameval)
  }

  Gengxin(){
    
      var obj ={}
      obj.Nicknameval=this.state.Nicknameval
      obj.phoneval=this.state.phoneval
      obj.radiovalue=this.state.radiovalue
      obj.TextArea=this.state.TextArea
      obj.datevalue=this.state.datevalue
      api.requestSearch(this.state.phoneval).then(data=>{
        console.log(data.data);
        console.log(data.data.length)
        if(data.data.length === 0){
          
          console.log("插入")
          api.requestXinxi(obj).then(data=>{
            console.log(data.data)
          }).catch(err=>{
            console.log(err);
          })
        }else{
          console.log("更新")
          api.requestXinxiUpdate(obj).then(data=>{
            console.log(data);
          }).catch(err=>console.log(err))
        }
      })
      setTimeout(()=>{
      this.props.history.push('/u/personal')
      },1000)


  }
  render(){
    return (
      <div className="sixin_list">
        <ul className="useredit_ul">
          <li className="usereditl1">
            <span className="userspan1">手机号:</span>
            <div className="spandiv01"><Input size="large" placeholder="请输入邮箱/手机号" defaultValue={this.state.phoneval} className="xgborder" onChange={this.Phone.bind(this)} /></div>
          </li>
          <li className="usereditl1">
            <span className="userspan1">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称:</span>
            <div className="spandiv01"><Input size="large" placeholder="请输入昵称" className="xgborder" defaultValue={this.state.Nicknameval}
            onChange={this.Nickname.bind(this)}/></div>
          </li>
          <li className="usereditl1">
            <span className="userspan1">生&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;日:</span>
            <div className="spandiv01">
              <DatePicker onChange={this.onChange.bind(this)} defaultValue={ moment(this.state.datevalue, dateFormat) } format={ dateFormat }/>
            </div>
          </li>
          <li className="usereditl1">
            <span className="userspan1">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:</span>
            <div className="spandiv01"> 
              <RadioGroup onChange={this.onChangeRadio.bind(this)} value={this.state.radiovalue}>
              <Radio value={"男"}>男</Radio>
              <Radio value={"女"}>女</Radio>
              </RadioGroup>
            </div>
          </li>
          <li className="usereditl1 userditl2">
            <div className="userspan4"><span>个性签名</span></div>
            <div className="spandiv01"> 
              <TextArea rows={4} onChange = {this.TextArea.bind(this) } defaultValue={this.state.TextArea} />
            </div>
          </li>
          <li className="usereditl1 userditl3">
            <span></span>
            <Button type="danger" onClick={this.Gengxin.bind(this)} >保存</Button>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Comp)



