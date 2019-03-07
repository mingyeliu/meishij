import React, { Component } from 'react'
import api from '@/api/health'
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

  render () {
    let listarr = this.state.list
    let listHtml = [];
    let count = 0;
    listarr.map((item, index) => {
      if(count < 12){
        listHtml.push(
          <Card bodyStyle={{ padding: 0 }} key={ item.id }>
            <img src={ item.image } alt={ item.type } />
            <div style={{ padding: 14 }} className="listTit">
              <span className='tit'>{ item.title }</span><br />
              <span className='pingjia'>{ item.pingjia }</span><br />
              <span className='emtitle'>{ item.emtitle }</span>
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
          <h1>合理的饮食，是身体健康的第一要素</h1>
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
