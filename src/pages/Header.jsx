import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import creatHistory from 'history/createBrowserHistory';

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  
  SearchValue(event){
    this.setState({
      value:event.target.value
    })
    console.log(this.state.value)
    
    
  }
  SearchClick(){
    creatHistory().go(0);
  }
  render () {
    return (
      <header className = "header">
        <div className="margin">
          <Link to="/home" className="h-l"></Link>
          <div className="h-c">
            <input type="search" name="" placeholder="请输入菜谱/食材/菜单/作者" className="search1" onChange={this.SearchValue.bind(this)} />
            <Link to={"/j/caipu/"+this.state.value}><input type="submit" value="搜索" className="search2" onClick={this.SearchClick.bind(this)} /> </Link>
          </div>
          <div className="h-r">
            <Link to="/j/login" className="b1">登录</Link>
            <Link to="/j/register" className="b1">注册</Link>
            <Link to="#" className="wb">微博登录</Link>
            <Link to="#" className="qq">QQ登录</Link>    
          </div>
        </div>  
      </header>
    )
  }
}

export default Comp
