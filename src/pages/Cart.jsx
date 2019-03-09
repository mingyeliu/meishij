import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/style/homedetail.scss'
import api from '@/api/shkind'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      list:{}
    }
  
  }
  componentDidMount(){
    let id=this.props.match.params.id;
    api.requestDataId(id).then(data=>{
      console.log(data);
      this.setState({
        list:data[0]
      })
    }).catch(err=>console.log(err));
  }
  GoCart(){
    this.props.history.push('/',{});
  }
  render () {
    let id=this.props.match.params.id;
    console.log(id)
    return (
      <div className="content">
        <div className="top">
          <ul>
            <li><Link to="#">产品首页</Link></li>
            <li><Link to="#">特权购买</Link></li>
            <li><Link to="#">我的积分</Link></li>
            <li><Link to="#">试用中心</Link></li>
            <li><Link to="#">我的订单</Link></li>
          </ul>
        </div>
        <div className="products-buy">
          <div className="margin">
            <p className="title">
              <span>家居馆</span>
                > 
              <span>厨房家居</span>
                > 
              <span>刀具</span>
                > 
              <span>刀具套装</span>
            </p>
            <div className="products-buy-content">
              <div className="pbc-l">
                <img src="https://s1.st.meishij.net/p2/20180903/20180903120958_01864.jpg" className="img-big" alt="66"/>
                <img src="https://s1.st.meishij.net/p2/20180903/20180903120958_01864.jpg" className="img-small" alt="66"/>
              </div>
              <div className="pbc-r">
                <h1>{this.state.list.shopname}</h1>
                <form id="orderform">
                  <div className="buy-tab">
                    <span>商品详情</span>
                  </div>
                  <div className="buy-tab-1">
                    <ul>
                      <li>
                        商品价格：
                        <strong className="price">￥{this.state.list.price}</strong>
                      </li>
                      <li>
                        达人专享：
                        <strong className="price-favorable">27600</strong>
                        <span className="price-favorable-title">七级达人优惠价格</span>
                      </li>
                      <li>
                        用户评分：
                        <span className="star"></span>
                        已出售：<s>{this.state.list.sales}</s> 件
                      </li>
                      <li>
                        我要购买：
                        <input type="text" placeholder="1" disabled/>
                        件  （库存{this.state.list.kucun}件）
                      </li>
                    </ul>
                    <span className="buy" onClick={this.GoCart.bind(this)}>加入购物车</span>
                    <span className="dingdan">立即购买</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp  