import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/style/homedetail.scss'

class Comp extends Component {
  render () {
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
                <h1>亚马逊VISIONS芝加哥刀具三件套</h1>
                <form id="orderform">
                  <div className="buy-tab">
                    <span>积分兑换</span>
                  </div>
                  <div className="buy-tab-1">
                    <ul>
                      <li>
                        兑换积分：
                        <strong className="price">53400</strong>
                      </li>
                      <li>
                        达人专享：
                        <strong className="price-favorable">27600</strong>
                        <span className="price-favorable-title">七级达人优惠价格</span>
                      </li>
                      <li>
                        用户评分：
                        <span className="star"></span>
                        已兑换：<s>4</s> 件
                      </li>
                      <li>
                        我要兑换：
                        <input type="text" placeholder="1"/>
                        件  （库存8件）
                      </li>
                    </ul>
                    <span className="buy">加入购物车</span>
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