import React, { Component } from 'react'
import { Card, Layout } from 'element-react'
import './style.scss'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <div className="bottom">
        <Layout.Row>
          <Layout.Col span={ 8 } offset={ 0 }>
            <Card bodyStyle={{ padding: 0 }}>
              <div className="bottom clearfix">
                <img src="@/images/93aa18b7817f21322bf1632c6a7ad44c_150x150.jpg" alt="img" className="image" />
                <span>7dffg股份回购的方法更好地方</span>
                <span>134的个 放电饭锅和</span>
              </div>
            </Card>
          </Layout.Col>
          <Layout.Col span={ 8 } offset={ 2 }>
          <Card bodyStyle={{ padding: 0 }}>
              <div className="bottom clearfix">
                <img src="@/images/93aa18b7817f21322bf1632c6a7ad44c_150x150.jpg" alt="img" className="image" />
                <span>7dffg股份回购的方法更好地方</span>
                <span>134的个 放电饭锅和</span>
              </div>
            </Card>
          </Layout.Col>
        </Layout.Row>
      </div>
    )
  }
}

export default Comp
