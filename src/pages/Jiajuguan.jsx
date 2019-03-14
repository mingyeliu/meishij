import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '@/style/jiaju.scss'
import api from '@/api/shkind'
import SHkinds from './../components/shangpin/Shkind'
import SHkind1s from './../components/shangpin/Shkind1'
import SHkind2s from './../components/shangpin/Shkind2'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoplist: [],
      classname1:"left_list_a list_li1 acite_a",
      classname2:"left_list_a list_li2",
      classname3:"left_list_a list_li3",
      classname4:"left_list_a list_li4",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classname8:"left_list_a list_li8",
      classname9:"left_list_a list_li9",
      classname10:"left_list_a list_li10",
      classname11:"left_list_a list_li11",
      classname12:"left_list_a  acite_a",
      list:[],
      classn1:'',
      classn2:'',
      list1:[],
      classn3:'',
      classn4:'',
      list2:[{image:''}],
      classn5:'',
      classn6:'',
    }
  }
  componentWillMount(){
    api.requestData("tuijian1").then(data=>{
      // console.log(data)
      this.setState({
        list:data,
        classn2:"showitems"
      })
    }).catch(err => console.log(err));

    api.requestData("tuijian2").then(data=>{
      // console.log(data)
      this.setState({
        list1:data,
        classn4:"showitems"
      })
    }).catch(err => console.log(err));

    api.requestData("tuijian3").then(data=>{
      // console.log(data)
      this.setState({
        list2:data,
        classn6:"showitems"
      })
    }).catch(err => console.log(err));
  }
  Active1(event){
    api.requestData("tuijian1").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname1:"left_list_a list_li1 acite_a",
      classname2:"left_list_a list_li2",
      classname3:"left_list_a list_li3",
      classname4:"left_list_a list_li4",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    }) 
  }
  Active2(event){
    api.requestData("guoju").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    // console.log(22222);
    this.setState({
      classname2:"left_list_a list_li2 acite_a",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 ",
      classname4:"left_list_a list_li4",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active3(event){
    // console.log(3);
    api.requestData("daoju").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname2:"left_list_a list_li2",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 acite_a",
      classname4:"left_list_a list_li4",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active4(event){
    // console.log(4);
    api.requestData("cfpj").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname2:"left_list_a list_li2",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 ",
      classname4:"left_list_a list_li4 acite_a",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active5(event){
    // console.log(5);
    api.requestData("canju").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname2:"left_list_a list_li2",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 ",
      classname4:"left_list_a list_li4 ",
      classname5:"left_list_a list_li5 acite_a",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active6(event){
    // console.log(6);
    api.requestData("cjhu").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname2:"left_list_a list_li2",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 ",
      classname4:"left_list_a list_li4 ",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6 acite_a",
      classname7:"left_list_a list_li7",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active7(event){
    // console.log(7);
    api.requestData("qjie").then(data=>{
      // console.log(data)
      this.setState({
        list:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname2:"left_list_a list_li2",
      classname1:"left_list_a list_li1",
      classname3:"left_list_a list_li3 ",
      classname4:"left_list_a list_li4 ",
      classname5:"left_list_a list_li5",
      classname6:"left_list_a list_li6",
      classname7:"left_list_a list_li7 acite_a",
      classn1:"left_list_a list_li1 acite_a",
      classn2:"showitems"
    })
  }
  Active8(event){
    // console.log(7);
    api.requestData("tuijian2").then(data=>{
      // console.log(data)
      this.setState({
        list1:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname8:"left_list_a  acite_a",
      classname9:"left_list_a ",
      classname10:"left_list_a ",
      classname11:"left_list_a ",
      classn3:"left_list_a acite_a",
      classn4:"showitems"
    })
  }
  Active9(event){
    // console.log(9);
    api.requestData("changyong").then(data=>{
      // console.log(data)
      this.setState({
        list1:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname8:"left_list_a  ",
      classname9:"left_list_a  acite_a",
      classname10:"left_list_a ",
      classname11:"left_list_a ",
      classn3:"left_list_a  acite_a",
      classn4:"showitems"
    })
  }
  Active10(event){
    // console.log(7);
    api.requestData("hongpen").then(data=>{
      // console.log(data)
      this.setState({
        list1:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname8:"left_list_a  ",
      classname9:"left_list_a ",
      classname10:"left_list_a  acite_a",
      classname11:"left_list_a ",
      classn3:"left_list_a  acite_a",
      classn4:"showitems"
    })
  }
  Active11(event){
    // console.log(7);
    api.requestData("zhazhi").then(data=>{
      // console.log(data)
      this.setState({
        list1:data
      })
    }).catch(err => console.log(err));
    this.setState({
      classname8:"left_list_a ",
      classname9:"left_list_a ",
      classname10:"left_list_a ",
      classname11:"left_list_a acite_a",
      classn3:"left_list_a acite_a",
      classn4:"showitems"
    })
  }
  render () {
    return (
      <div className="content">
        <div className="margin">
          <h3 className="bbtitles">美厨出玉食&nbsp;&nbsp;精细选家居</h3>
          <div className="jjg_top">
            <div className="jjg_menu">
              <div className="jjg_menu_item image_menu1" >
                  <Link to="#" className="a_1">厨房家居</Link>
                  <div className="menu1_left">
                    <ul className="ul1">
                      <Link to="#" className="a_2">保温焖烧杯</Link>
                      <li>
                        <Link to="#" className="b_3">保温杯</Link>
                      </li>
                    </ul>
                    <ul className="ul1">
                      <Link to="#" className="a_2">餐具</Link>
                      <li>
                        <Link to="#" className="b_3">碗碟</Link>
                        <Link to="#" className="b_3">刀叉筷</Link>
                      </li>
                    </ul>
                    <ul className="ul1">
                      <Link to="#" className="a_2">茶具壶具</Link>
                      <li>
                        <Link to="#" className="b_3">水壶</Link>
                        <Link to="#" className="b_3">杯子</Link>
                        <Link to="#" className="b_3">壶具套装</Link>
                        <Link to="#" className="b_3">其他</Link>
                      </li>
                    </ul>
                    <ul className="ul1">
                      <Link to="#" className="a_2">厨房配件</Link>
                      <li>
                        <Link to="#" className="b_3">餐垫</Link>
                        <Link to="#" className="b_3">调料盒</Link>
                        <Link to="#" className="b_3">砧板</Link>
                        <Link to="#" className="b_3">灵巧配件</Link>
                      </li>
                    </ul>
                    <ul className="ul1">
                      <Link to="#" className="a_2">锅具</Link>
                      <li>
                        <Link to="#" className="b_3">锅具套装</Link>
                        <Link to="#" className="b_3">炸锅</Link>
                        <Link to="#" className="b_3">炖锅</Link>
                        <Link to="#" className="b_3">压力锅</Link>
                        <Link to="#" className="b_3">平底锅</Link>
                        <Link to="#" className="b_3">煮锅</Link>
                        <Link to="#" className="b_3">蒸锅</Link>
                        <Link to="#" className="b_3">砂锅</Link>
                        <Link to="#" className="b_3">煎锅</Link>
                      </li>
                    </ul>
                    <ul className="ul1">
                      <Link to="#" className="a_2">刀具</Link>
                      <li>
                        <Link to="#" className="b_3">刀具套装</Link>
                        <Link to="#" className="b_3">多功能刀</Link>
                        <Link to="#" className="b_3">菜刀</Link>
                        <Link to="#" className="b_3">剪刀</Link>
                        <Link to="#" className="b_3">其他</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              <div className="jjg_menu_item image_menu2 image_menu02">
                <Link to="#" className="a_1">厨房电器</Link>
                <div className="menu2_left">
                  <ul className="ul1">
                    <Link to="#" className="a_2">创意小家电</Link>
                    <li>
                      <Link to="#" className="b_3">鸡蛋助手</Link>
                      <Link to="#" className="b_3">清凉厨电</Link>
                      <Link to="#" className="b_3">温暖厨电</Link>
                    </li>
                  </ul>
                  <ul className="ul1">
                    <Link to="#" className="a_2">榨汁搅拌</Link>
                    <li>
                      <Link to="#" className="b_3">料理机</Link>
                      <Link to="#" className="b_3">豆浆机</Link>
                      <Link to="#" className="b_3">榨汁机</Link>
                      <Link to="#" className="b_3">原汁机</Link>
                      <Link to="#" className="b_3">搅拌机</Link>
                    </li>
                  </ul>
                  <ul className="ul1">
                    <Link to="#" className="a_2">烘焙帮手</Link>
                    <li>
                      <Link to="#" className="b_3">电陶炉</Link>
                      <Link to="#" className="b_3">电烤架</Link>
                      <Link to="#" className="b_3">电蒸锅</Link>
                      <Link to="#" className="b_3">烧烤帮手</Link>
                      <Link to="#" className="b_3">咖啡机</Link>
                      <Link to="#" className="b_3">电烤炉</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="jjg_menu_item image_menu3 image_menu03">
                <Link to="#" className="a_1">厨房调料</Link>
                <div className="menu3_left">
                  <ul className="ul1">
                    <Link to="#" className="a_2">西施调料</Link>
                    <li>
                      <Link to="#" className="b_3">黑胡椒汁</Link>
                      <Link to="#" className="b_3">番茄酱</Link>
                      <Link to="#" className="b_3">烘焙用料</Link>
                    </li>
                  </ul>
                  <ul className="ul1">
                    <Link to="#" className="a_2">中式调料</Link>
                    <li>
                      <Link to="#" className="b_3">鸡精</Link>
                      <Link to="#" className="b_3">食用油</Link>
                      <Link to="#" className="b_3">调味</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="jjg_menu_item clear_line image_menu4 image_menu04">
                <Link to="#" className="a_1">生活周边</Link>
                <div className="menu4_left">
                  <ul className="ul1">
                    <Link to="#" className="a_2">数码产品</Link>
                    <li>
                      <Link to="#" className="b_3">优盘硬盘</Link>
                      <Link to="#" className="b_3">CD卡</Link>
                      <Link to="#" className="b_3">小米系列</Link>
                      <Link to="#" className="b_3">充电宝</Link>
                    </li>
                  </ul>
                  <ul className="ul1">
                    <Link to="#" className="a_2">生活用品</Link>
                    <li>
                      <Link to="#" className="b_3">居家用品</Link>
                      <Link to="#" className="b_3">家用电器</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="jjg_top_right">
              <div className="index_imgbox">
                <img src="http://site.meishij.net/p2/20160513/20160513163635_90010.jpg" alt="jpg"/>
              </div>
              {/* http://site.meishij.net/p2/20160513/20160513163635_90010.jpg */}
            </div>
          </div>
          <h3 className="jjg_titles">
            美食杰特权优惠区----生活，就是要精打细算
            <Link to="/" className="jjg_a">更多特权</Link>
          </h3>
          <div className="jjg_con1">
            <Link to="#" className="jjg_a01">
              <img src="https://s1.st.meishij.net/p2/20180903/20180903120958_01864.jpg" alt="jpg"/>
            </Link>
            <div className="contc">
              <h4><Link to="#" className="yacont">亚马逊VISIONS芝加哥刀具三件套</Link></h4>
              <p className="marg_count">
                <span className="contt">兑换积分：</span>
                <strong className="cont_strong">543000积分</strong>
              </p>
              <p className="marg_count">
                <span className="contt">特权折扣：</span>
                <strong className="cont_strong">-0积分</strong>
              </p>
              <p className="marg_count">
                <span className="contt">限&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
                <strong className="cont_strong">8件</strong>
              </p>
              <div className="btn_count">
                <Link to="/" className="cha_btn">查看详情</Link>
              </div>     
            </div>
          </div>
          <h3 className="jjg_titles">
            优质产品推荐区
          </h3>
          <div className="jjg_foodsitem">
            <div className="jjg_foods_left jfl_l1">
              <div className="foods_left">
                <span className="food_t"></span>
                厨房家居
              </div>
              <ul className="jjg_foods_left_list jfl_l1">
                <li className="left_list_li">
                  <Link className={this.state.classname1} to="/" onMouseOver={this.Active1.bind(this)}>今日推荐</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname2} to="/" onMouseOver={this.Active2.bind(this)} >锅具</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname3} to="/" onMouseOver={this.Active3.bind(this)}>刀具</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname4} to="/" onMouseOver={this.Active4.bind(this)}>厨房配件</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname5} to="/" onMouseOver={this.Active5.bind(this)}>餐具</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname6} to="/" onMouseOver={this.Active6.bind(this)}>茶具壶具</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname7} to="/" onMouseOver={this.Active7.bind(this)}>清洁用品</Link>
                </li>
              </ul>
              <div className="bg_left"></div>
            </div>
            <div className="jjg_foods_show ">
              <SHkinds classn1={this.state.classn1} classn2={this.state.classn2} list={this.state.list}/>
            </div>
          </div>
          <div className="jjg_foodsitem">
            <div className="jjg_foods_left jfl_l2">
              <div className="foods_left">
                <span className="food_t"></span>
                厨房电器
              </div>
              <ul className="jjg_foods_left_list jfl_l2">
                <li className="left_list_li">
                  <Link className={this.state.classname8} to="/" onMouseOver={this.Active8.bind(this)}>今日推荐</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname9} to="/" onMouseOver={this.Active9.bind(this)} >常用电器</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname10} to="/" onMouseOver={this.Active10.bind(this)}>烘焙帮手</Link>
                </li>
                <li className="left_list_li">
                  <Link className={this.state.classname11} to="/" onMouseOver={this.Active11.bind(this)}>搅汁搅拌</ Link>
                </li>
              </ul>
              <div className="bg_left"></div>
            </div>
            <div className="jjg_foods_show ">
              <SHkind1s  classn1={this.state.classn3} classn2={this.state.classn4} list1={this.state.list1}/>
            </div>
          </div>
        
          <div className="jjg_foodsitem">
            <div className="jjg_foods_left">
              <div className="foods_left">
                <span className="food_t"></span>
                厨房调料
              </div>
              <ul className="jjg_foods_left_list">
                <li className="left_list_li">
                  <Link className={this.state.classname12} to="/" >今日推荐</Link>
                </li>
              </ul>
              <div className="bg_left"></div>
            </div>
            <div className="jjg_foods_show ">
              <SHkind2s classn1={this.state.classn5} classn2={this.state.classn6} list2={this.state.list2}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp 