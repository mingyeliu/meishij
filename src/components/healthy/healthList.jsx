import React, { Component } from 'react'
import api from '@/api/health'
import { Card, Pagination, Breadcrumb } from 'element-react'

class Comp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      list: [],
      totalcord: 0
    }
  }

  componentDidMount () {
    api.requestData().then(data => {
      console.log(data);
      this.setState({
        list: data,
        totalcord: data.length,
        currentPage: 1
      })
    })
  }

  changePage () {
    console.log("changePage");
  }
  render () {
    let listarr = this.state.list
    let listHtml = [];
    // if (listarr.length === 0) {
    //   listHtml = <li>正在加载...</li>
    // } else {
    listarr.map((item, index) => {
      if(index < 12){
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
