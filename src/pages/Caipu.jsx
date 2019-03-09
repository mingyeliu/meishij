import React, { Component } from 'react'
import 'element-theme-default'
import '@/components/caipu/style.scss'
import HealthNav from '@/components/caipu/healthNav'
import HealthList from '@/components/caipu/healthList'
// import HealthNew from '@/components/healthy/healthNew';
import api from '@/api/caipu'


class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      seachval:this.props.match.params.type,
      list:[]
    }
    console.log(this.state.seachval);
  }
  componentDidMount(){
    // 家常菜类型查
    api.requestJCDatatype(this.state.seachval).then(data=>{
  
      if(data.length >0){
        this.setState({
          list:data
        })
        console.log(data);
      }
    }).catch(err=>console.log(err))

    api.requestZHDatatype(this.state.seachval).then(data=>{
      if(data.length >0){
        this.setState({
          list:data
        })
        console.log(data);
      }
    }).catch(err=>console.log(err))

      // creatHistory().go(0);
    console.log(this.state.list);
  }
  render () {
    console.log(this.state.list)
    return (
      <div className = "content">
        <div className="margin">
          <HealthNav />
          <HealthList list1={this.state.list}/>
          {/* <HealthNew /> */}
        </div>
      </div>
    )
  }
}

export default Comp
