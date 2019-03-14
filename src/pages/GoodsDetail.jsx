import React, { Component } from 'react'
import '@/style/goodsdetail.scss'
import apiCart from '@/api/cart'
import { Icon,message } from 'antd'

class Comp extends Component {

  constructor(props){ 
    super(props);
    this.state={ 
      arr:[
        // {
        //   cartid: 'https://www.meishij.net/ajax/qrcode_wap.php?i=1919876',
        //   vshopname: '你好你好你好你好',
        //   price: 66,
        //   num:0 
        // } 
      ],
      
       sum_price:0 
      } 
}
  componentDidMount(){
    var userid = localStorage.getItem('userlogin')
    apiCart.requestData(userid).then(data=>{
      console.log(data)
      this.setState({
        arr : data.data[0].goods
      })
      console.log(data);
    })
    
    // console.log(this.state.arr)
  }

    //获取输入框的值
    getInputText = (e, i) => {
      this.setState({
        arr:this.state.arr.map((item, index) => {
          if(index === i){
            item.num = e.target.value;
            return item
          }else {
            return item
          }
        })
      })
      this.SumPrice();
    }
    //jia
    augment = (e,i) => {
      var userid = localStorage.getItem('userlogin')
      this.setState({
        arr:this.state.arr.map((item, index)=>{
          if(index === i){
            item.num = item.num * 1 + 1;

            console.log(item)
            return item
          } else {
            return item
          }
        })
      })
      console.log(this.state.arr)
      apiCart.requestUpdateData(userid,this.state.arr).then(data=>{
        console.log(data)
      })
      this.SumPrice();
    }
    //jian
    reduce = (e,i) => {
      var userid = localStorage.getItem('userlogin')
      this.setState({ arr:this.state.arr.map((item,index)=>{
          if(index===i){
            item.num=item.num*1 - 1
            console.log(item)
            return item
          }else {
            return item
          }
        })
      })
      apiCart.requestUpdateData(userid,this.state.arr).then(data=>{
        console.log(data)
      })
      this.SumPrice()
    }

    //删除
    del=(e,i)=> {
      var userid = localStorage.getItem('userlogin')
      this.setState({
        arr:this.state.arr.filter((item,index)=>{
          if(index !== i){
            return true
          }else {
            return false
          }
          // console.log(item)
        })
      })
      
      setTimeout(()=>{
        var a = this.state.arr
        console.log(a)
        apiCart.requestUpdateData(userid,a).then(data=>{
          console.log(data)
        })
      },2)
      
      setTimeout(() => {
        this.SumPrice()
      }, 1)
    }

    // 实现全选与反选的操作
    CheckAllorNoAll = (e, i) => {
      console.log(e,i)
      this.setState({
        arr:this.state.arr.map((item,index) => {
          console.log(item.checked)
          if(index===i){
            item.checked= !item.checked
            console.log(index,i);
            return item
          }else{
            return item
          }
          
        })
      })
      var flag = this.state.arr.every((item, index) => {
        if(item.checked === false){
          return false
        }else {
          return true
        }
      })
      if(flag === true){
        this.refs.checkALL.checked = true;
      }else {
        this.refs.checkALL.checked = false;
      }
      this.SumPrice();
    }
    //全选全不选,判断全选状态
    CheckedAll = (e) => {
      if(e.target.checked === true) {
        this.setState({
          arr:this.state.arr.map((item,index) => {
            item.checked=true
            return item
          })
        })
      } else if(e.target.checked === false) {
        this.setState({
          arr:this.state.arr.map((item,index) => {
            item.checked = false;
            return item
          })
        })
      }
      this.SumPrice();
    }
    //计算总合计
    SumPrice = () => {
      var sum=0; this.state.arr.forEach((item, index) => {
        if(item.checked===true){
          sum += item.num * item.price;
        }
      })
      this.setState({
        sum_price:sum
      })
    }
    // componentWillMount(){
    //   var userid = localStorage.getItem('userlogin')
    //   apiCart.requestData(userid).then(data=>{
    //     this.setState({
    //       arr:data.data[0]
    //     })
    //   })
    // }

    // SettleAccounts=()=>{
    //   var shopping = []
    //   this.state.arr.forEach((item,index)=>{
    //     if(item.checked === true){
    //       shopping.push(item)
    //     }
    //   })
    // }
    //获取数据
  //   componentWillMount(){ var url="./js/shopping.json" fetch(url).then((res)=>{
  //     return res.json()
  //   }).then((res)=>{
  //     this.setState({
  //         arr:res
  //       })
  //   })
  // }

    //结算传值
    SettleAccounts=()=>{ 
      var shopping=[]
      this.state.arr.forEach((ele,index)=>{
        if(ele.checked===true){
            shopping.push(ele)
        }
    })
    console.log(shopping)
    window.localStorage.setItem("shopping",JSON.stringify(shopping))
    window.localStorage.setItem("sumprice",JSON.stringify(this.state.sum_price))
    // this.props.history.push('/personal')
    // apiCart.requestInsertOrder()
    if(this.state.sum_price>0){
      message.success('购买成功');
    }else{
      message.success('未选择商品');
    }

    }

render () {
  console.log(this.state.arr)
  return (
    <div className="goodsContent">
      <div className="margin">
        <div className="cart-top">
          <ul className="cart-top-type">
            <li></li>
            <li>图片</li>
            <li>名称</li>
            <li>单价</li>
            <li>数量</li>
            <li>小计</li>
            <li></li>
          </ul>
        </div>
        <div className="cart-middle">
        <ul className="tiao">
        {
        this.state.arr.map((item, index) => (
          
          <li className="c1" key={ index }>
            <div className="G_list">
              <div className="G_img">
                <input type="checkbox" checked={item.checked} onChange={ (e)=>{ this.CheckAllorNoAll(e,index) } }/>
                <img src={item.image} alt="" />
              </div>
              <span className="title">{item.shopname}</span>
              <p className="danjia">
                <span>{ item.price }</span>
              </p>
            <div className="G_Content">
              <div className="G_selected">
                <button onClick={ (e)=>{ this.augment(e,index) } }>+</button>
                <input type="text" ref="nums" value={item.num} onChange={ (e)=>{ this.getInputText(e,index) } }/>
                <button onClick={ (e)=>{ this.reduce(e,index) } }>-</button>
              </div>
            </div>
            <span className="xiaoji">{item.num*item.price}</span>
            <div className="G_del"> <button onClick={ (e)=>{ this.del(e,index) } } className="iconfont icon-shanchu"><Icon type="delete" /></button> </div>
          </div>
        </li>
        ))
      }
      </ul>
    </div>
      <div className="cart-bottom">
        <div className="G_footer">
          <div className="G_Checkbox">
            <input type="checkbox" ref="checkALL" onChange={ (e)=>{ this.CheckedAll(e) } }/>全选
          </div>
          <div className="G_Price"> 合计：{this.state.sum_price}</div>
          <div className="G_Button"><button onClick={()=>{ this.SettleAccounts() }}>结算</button></div>
        </div>
      </div>
      </div>
    </div>
    )
  }
}

export default Comp
