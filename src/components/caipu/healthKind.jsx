import React, { Component } from 'react'
import api from '@/api/caipu'
import {Link} from 'react-router-dom'
import { Card, Breadcrumb } from 'element-react'
import "antd/dist/antd.css"
import { Pagination  } from 'antd'

class Comp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      list: [],
      totalcord: 0, // 数据总数
      currentPage: 2, // 输入框改变的值
      numberPage: 1, // 单机分页按钮的页数
      aaa:''
    }
  }

  componentDidMount () {
    console.log(this.props)
    api.requestJCDatatype(this.props.caiming,1).then(data=>{
  
      if(data.length >0){
        this.setState({
          // data: data,
          list: data,
          totalcord: 90
        })
        console.log(this.state.list);
      }
    }).catch(err=>console.log(err))

    api.requestZHDatatype(this.props.caiming,1).then(data=>{
      if(data.length >0){
        this.setState({
          // data: data,
          list: data,
          totalcord: 90
        })
        console.log(this.state.list);
      }
    }).catch(err=>console.log(err))
    // console.log(this.props.list1)
  }

  onChange (event,pageNumber) {
    console.log(event);
    console.log(pageNumber)
    // var pageCode = 2
    console.log(this.props.caiming)
      api.requestJCDatatype(this.props.caiming,event).then(data=>{
  
      if(data.length >0){
        this.setState({
          // data: data,
          list: data,
          totalcord: 90
        })
        console.log(this.state.list);
      }
    }).catch(err=>console.log(err))

    api.requestZHDatatype(this.props.caiming,event).then(data=>{
      if(data.length >0){
        this.setState({
          // data: data,
          list: data,
          totalcord: 90
        })
        console.log(this.state.list);
      }
    }).catch(err=>console.log(err))
    // this.setState({
    //   currentPage:this.state.currentPage+1
    // })

  }


  Godetail(id){
    console.log(1,id)
  }
  render () {
    let listarr=[]
    // console.log(this.props.list1)
    // if (this.props.list1.length > 0){
      // listarr = this.props.list1
      listarr = this.state.list
      
    // }else{
      // listarr = this.state.list
    // }
    
    // console.log(listarr);
    let listHtml = [];
    // let count = 0;
    listarr.map((item, index) => {
        listHtml.push(
          <Card bodyStyle={{ padding: 0 }} key={ item.id } >
            <div className="listtyle1">
              <Link target="_blank" to={'/j/detail/' + item.id} title="牛肉丸太阳面" className="big">
                <img className="img" alt={ item.type } src={ item.image } onClick={this.Godetail.bind(this,item.id)} />
                <div className="i_w">
                  <div className="i">
                    <div className="c1">
                      <strong>{ item.title }</strong>
                      <span>{ item.pingjia }</span>
                      <em>{ item.emtitle }</em>
                    </div>
                    <div className="c2">
                      <ul>
                        <li className="li1">{ item.step }</li>
                        <li className="li2">{ item.weidao }</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <strong className="gx"><span>强身健体</span></strong>
              </Link>
            </div>
         </Card> 
        )
        // count++;
      return ''
    })
    return (
      <div className="list">
        <div className="title">
          <h1>印象中的那些妈妈的味道</h1>
          <Breadcrumb separator="|">
            <Breadcrumb.Item>最新</Breadcrumb.Item>
            <Breadcrumb.Item>最热</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="cont">
          { listHtml }
        </div>
        <div className="block">
          {/* <Pagination defaultCurrent={1} total={50} onChange={this.onChange.bind(this)}/> */}
          <Pagination showQuickJumper defaultCurrent={1} total={50} onChange={this.onChange.bind(this)} />
        </div>
      </div>
    )
  }
}

export default Comp
