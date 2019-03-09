import React, { Component } from 'react'
import api from '@/api/caipu'
import {Link} from 'react-router-dom'
import { Card, Pagination, Breadcrumb } from 'element-react'

class Comp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      list: [],
      totalcord: 0, // 数据总数
      currentPage: 1, // 输入框改变的值
      numberPage: 1 // 单机分页按钮的页数
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      // console.log(data);
      this.setState({
        data: data,
        list: data,
        totalcord: data.length
      })
    })
    console.log(this.props.list1)
  }

  changePage () {
    let number = document.getElementsByClassName('active')[0].innerHTML*1;
    let arr = [];
    let count = 0;
    for (let i = (number - 1)*12; i < this.state.data.length; i++) {
      if(count < 12){
        console.log(i);
        arr.push(this.state.data[i]);
        count++;
      } else {
        break;
      }
    }
    this.setState({
      list: arr
    })
    console.log(arr);
  }
  Godetail(id){
    console.log(1,id)
  }
  render () {
    let listarr = this.state.list
    // console.log(listarr);
    let listHtml = [];
    let count = 0;
    listarr.map((item, index) => {
      if(count < 12){
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
        count++;
      }
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
          <Pagination layout="prev, pager, next, total, jumper" total={ this.state.totalcord } pageSize={12} currentPage={ this.state.currentPage } onCurrentChange={ this.changePage.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default Comp
