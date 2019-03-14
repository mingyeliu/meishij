import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/style/homedetail.scss'
import api from '@/api/shkind'
import apiCart from '@/api/cart'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      list:{},
      // num:1,
      good : {},
      goods : []
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
    // let good = {}
    // let goods = []
    this.setState ({
      good:{
        num : 1,
        cartid:this.state.list.id,
        image:this.state.list.image,
        shopname:this.state.list.shopname,
        price:this.state.list.price,
        checked:false
      },
      goods:this.state.goods.push(this.state.good)
    })
    var aa = []
    // console.log()
    setTimeout(()=>{

      if(localStorage.getItem("userlogin")===""){

        this.props.history.push('/j/login');
      }else{
        
      

      aa.push(this.state.good)
      // console.log();
      this.setState ({
        goods:aa
      })
      console.log(this.state.goods);
    
    // 首先请求数据库判断是否有该用户 --- 
    // 2.如果有则判断是否是相同商品  ---- 如果是则更新 ---- 否则插入
    // 2.1更新----
    // 请求接口

    var userid = localStorage.getItem("userlogin");
    apiCart.requestData(userid).then(data=>{
      console.log(data.data[0])
      // 如果没有该用户(为undefined)或该用户的购物车为空
      if(data.data[0] === undefined){
        // console.log(1)
        console.log(this.state.goods)
        apiCart.requestInsertData(userid,this.state.goods).then(data=>{
          this.props.history.push('/j/goodsdetail')
          console.log(data.data)
        }).catch(err => console.log(err));
      }else{
        // 如果商品的长度不为零判断是否点击是不是同一件商品
        // if(data.data) 数据结构：[{0:goods--[{}]}]
        // console.log(data.goods);
        if(data.data[0].goods !== null){
          // 循环返回的数据，将循环数据中的id与当前山商品的id进行对比如果是同一个商品改变数量，如果不是直接push
          let result = data.data[0].goods.filter(item =>{
            if(item.cartid ===this.state.good.cartid){
              item.num = item.num*1 + 1
              // console.log(item.num)
            }
            return item.cartid === this.state.good.cartid
          })
          console.log(result);
          if(result.length === 0){
            data.data[0].goods.push(this.state.good)
          }
          apiCart.requestUpdateData(userid,data.data[0].goods).then(data=>{
            this.props.history.push('/j/goodsdetail')
            console.log(data)
          })
        }else{
          // 如果当前的商品为零则直接插入
          apiCart.requestInsertData(userid,this.state.goods).then(data=>{
            console.log(data.data)
            this.props.history.push('/j/goodsdetail')
          }).catch(err=>console.log(err))
        }
      }
    })
  }
  },10)

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
                <img src={this.state.list.image} className="img-big" alt="66"/>
                <img src={this.state.list.image} className="img-small" alt="66"/>
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
                      {/* <li>
                        达人专享：
                        <strong className="price-favorable">27600</strong>
                        <span className="price-favorable-title">七级达人优惠价格</span>
                      </li> */}
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