import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import HeaderLeft from './../components/header/header_left'
import HeaderRight from './../components/header/header_right'
class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'川菜',
      qqd:'登录',
      qqzhu:'注册',
      deng:'微博登录',
      zhuce:"QQ登录"
    }
  }

  // componentDidMount(){
  //   api.requestSearch(localStorage.getItem('userlogin')).then(data=>{
  //     if(data.data.length===0){
  //       console.log("213213")
  //     }else if(data.data.length > 0){
  //       this.setState({
  //         qqd:data.data[0].nickname,
  //         qqzhu:"收藏",
  //         deng:"",
  //         zhuce:""
  //       })
  //     }
  //   })
  // }

  SearchValue(event){
    this.setState({
      value:event.target.value
    })
    // console.log(this.state.value)
  }
  SearchClick(){
    // creatHistory().go(0);
  }

  goTo(){  //回頂
    
    let scrollToTop = window.setInterval(function() {
      let pos = window.pageYOffset;
      console.log(pos)
      if ( pos > 0 ) {
        console.log(111)
          window.scrollTo( 0, pos - 80 ); // how far to scroll on each step
      } else {
          window.clearInterval( scrollToTop );
      }
  }, 
  );
  // console.log(document.body.scrollTop)
  // document.body.scrollTop = document.documentElement.scrollTop = 0;
  }


  render () {
    let  html = "";
    if(localStorage.getItem('userlogin') === ""){
      html =<HeaderLeft />
      // console.log(localStorage.getItem('userlogin'))
    }else{
      html = <HeaderRight />
    }
    return (
      <header className = "header">
        <div className="margin">
          {/* <div id="topAnchor"></div> */}
          <div>
            <button id="btnTop" onClick={ this.goTo }>返回顶部</button>
          </div>
          <Link to="/home" className="h-l"></Link>
          <div className="h-c">
            <input type="search" name="" placeholder="请输入菜谱/食材/菜单/作者" className="search1" onChange={this.SearchValue.bind(this)} />
            <Link to={"/j/caipu/"+this.state.value}><input type="submit" value="搜索" className="search2" onClick={this.SearchClick.bind(this)} /> </Link>
          </div>
          <div className="h-r">
            {html}
          </div>
        </div>  
      </header>
    )
  }
}

export default Comp
