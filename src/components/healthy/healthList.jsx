import React, { Component } from 'react'
import { Card, Layout, Pagination  } from 'element-react'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  changePage () {
    console.log("changePage");
  }
  render () {
    return (
      <div className="list">
        <div className="cont">
          <Layout.Row>
            <Layout.Col span={ 8 } offset={ 0 }>
              <Card bodyStyle={{ padding: 0 }}>
                <img src="@/images/93aa18b7817f21322bf1632c6a7ad44c_150x150.jpg" alt="img" className="image" />
                <div style={{ padding: 14 }}>
                <span>图片的标题title</span>
                  <div className="bottom clearfix">
                    <span>7</span>评论
                    <span>134</span>人气
                  </div>
                  <span>作者的别名author</span>
                </div>
              </Card>
            </Layout.Col>
            <Layout.Col span={ 8 } offset={ 2 }>
              <Card bodyStyle={{ padding: 0 }}>
                <img src="@/images/54aad9503158cf80a783eb13657079ff_150x150.jpg" alt="img" className="image" />
                <div style={{ padding: 14 }}>
                  <span>图片的标题title</span>
                  <div className="bottom clearfix">
                    <span>7</span>评论
                    <span>134</span>人气
                  </div>
                  <span>作者的别名author</span>
                </div>
              </Card>
            </Layout.Col>
          </Layout.Row>
        </div>
        <div className="block">
          <Pagination layout="prev, pager, next, total, jumper" total={400} pageSize={12} currentPage={1} pager={100} onCurrentChange={ this.changePage.bind(this) }/>
        </div>
      </div>
    )
  }
}

export default Comp
