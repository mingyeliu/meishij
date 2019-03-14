import React, { Component } from 'react'
import 'element-theme-default'
import '@/components/caipu/style.scss'
import HealthNav from '@/components/caipu/healthNav'
import HealthKind from '@/components/caipu/healthKind'
// import HealthNew from '@/components/healthy/healthNew';
// import api from '@/api/caipu'

// var list1 = [];
class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      kindvalue:this.props.match.params.kindstyle,
      // list:[{
      //   caitype:"",
      //   emtitle:"",
      //   id:"",
      //   image:"",
      //   pingjia:"",
      //   weidao:"",
      //   title:"",
      //   type:""
      // }]
    }
    console.log(this.state.kindvalue)
  }
  // componentDidMount(){
    // 家常菜类型查
    
    // api.requestJCDatatype(this.state.kindvalue).then(data=>{
  
    //   if(data.length >0){
    //     this.setState({
    //       list:data
    //     })
    //     // console.log(this.state.list);
    //   }
    // }).catch(err=>console.log(err))

    // api.requestZHDatatype(this.state.kindvalue).then(data=>{
    //   if(data.length >0){
    //     this.setState({
    //       list:data
    //     })
    //     console.log(this.state.list);
    //     // list1 = this.state.list
    //   }
    // }).catch(err=>console.log(err))

    //   // creatHistory().go(0);
    // console.log(this.state.list);
  // }
  render () {
    // console.log(this.props.)
    // console.log(list1)
    return (
      <div className = "content">
        <div className="margin">
          <HealthNav />
          <HealthKind caiming={this.state.kindvalue}/>
          {/* <HealthNew /> */}
        </div>
      </div>
    )
  }
}

export default Comp
