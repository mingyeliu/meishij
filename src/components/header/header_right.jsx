import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '@/api/user'
class Com extends Component{
  constructor(props){
    super(props);
    this.state={
      qqd:"sadfsadfsadf",
      qqzhu:"",
    }
  }
  componentDidMount(){
    
    api.requestSearch(localStorage.getItem('userlogin')).then(data=>{
      if(data.data.length===0){
        console.log("213213")
        this.setState({
          qqd:"sp_123",
          qqzhu:"",
        })
      }else if(data.data.length > 0){
        this.setState({
          qqd:data.data[0].nickname,
          qqzhu:"购物车",
        })
      }
    })
  
  }
  render(){
    return (
      <div>
        <Link to="#" className="b1"></Link>
        <Link to="#" className="b1"></Link>
        <Link to="/j/goodsdetail"className="wb">{this.state.qqzhu}</Link>
        <Link to="/u/personal" className="qq">{this.state.qqd}</Link>   
      </div>   
    )
  }
}

export default Com