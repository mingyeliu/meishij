import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      className1:"index_sc_dd index_sc_dd_current",
      className2:"index_sc_dd ",
      className3:"index_sc_dd ",
      className4:"index_sc_dd ",
    }
  }
  active1(){
    console.log(1)
    this.setState({
      className1:"index_sc_dd index_sc_dd_current",
      className2:"index_sc_dd ",
      className3:"index_sc_dd ",
      className4:"index_sc_dd ",
    })
  }
  active2(){
    console.log(1)
    this.setState({
      className1:"index_sc_dd ",
      className2:"index_sc_dd index_sc_dd_current",
      className3:"index_sc_dd ",
      className4:"index_sc_dd ",
    })
  }
  active3(){
    console.log(1)
    this.setState({
      className1:"index_sc_dd ",
      className2:"index_sc_dd ",
      className3:"index_sc_dd index_sc_dd_current",
      className4:"index_sc_dd ",
    })
  }
  active4(){
    console.log(1)
    this.setState({
      className1:"index_sc_dd ",
      className2:"index_sc_dd ",
      className3:"index_sc_dd ",
      className4:"index_sc_dd  index_sc_dd_current",
    })
  }

  render () {
    return (
      <div className = "content">
        <div className="margin">
          <div className = "lbt">
            {/* <div className="swiper-container margin">
              <div className="swiper-wrapper">
                <div className="swiper-slide ">
                  <h3>今日早餐推荐：让你爱上早起的滋味</h3>
                  <ul className="img">
                    <li><img src="https://s1.ig.meishij.net/p/20190305/5839b238a23e27fec6dabcccd928daf6.jpg" alt=""/>
                      <div className="c pngFix">
                        <h2><Link to="####" >韭菜鸡蛋素包子</Link></h2>
                        <strong>皮薄馅大，好吃过瘾</strong>
                        <span><Link to="####">强身健体</Link><em className="arrow pngFix"></em></span>
                      </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/96552396d7d64b79f25a8c28638b79aa.jpg" alt=""/>
                    <div className="c pngFix">
                        <h2><Link to="####">老哇撒</Link></h2>
                        <strong>陕西特色美食，暖心暖胃</strong>
                        <span><Link to="####">补充能量</Link><em className="arrow pngFix"></em></span>
                      </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/9ce7a8209f4446878f06d7730fa6fedf.jpg" alt=""/>
                    <div className="c pngFix">
                        <h2><Link to="####" >凉拌白菜丝</Link></h2>
                        <strong>清爽开胃，特别好吃</strong>
                        <span><Link to="####">补充VC</Link><em className="arrow pngFix"></em></span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="swiper-slide">
                  <h3>今日午餐推荐：米饭花样吃，带着味蕾去旅行</h3>
                  <ul className="img">
                    <li><img src="https://s1.ig.meishij.net/p/20190305/4aa79221bb44818d9a408dfb6f42ebcd.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >少油版鱼香茄子</Link></h2>
                          <strong>香软入味，绝对的下饭菜</strong>
                          <span><Link to="####">缓解疲劳</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/97a133864d2f9473a473e9bc23209fa0.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >香菇虾盏</Link></h2>
                          <strong>清淡不上火，鲜香美味</strong>
                          <span><Link to="####">延年益寿</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/9ce7a8209f4446878f06d7730fa6fedf.jpg" alt=""/>
                  <div className="c pngFix">
                        <h2><Link to="####" >胡萝卜炒蛋</Link></h2>
                        <strong>简单快手，分分钟搞定</strong>
                        <span><Link to="####">保护视力</Link><em className="arrow pngFix"></em></span>
                      </div>
                  </li>
                  </ul>
                </div>
                <div className="swiper-slide margin">
                  <h3>今日下午茶推荐：诱惑小吃，别让口水流下哦</h3>
                  <ul className="img">
                    <li><img src="https://s1.ig.meishij.net/p/20190305/9da3aaa29771e431c0b5a5c137a22da2.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >宝宝迷你热狗</Link></h2>
                          <strong>口感Q弹，宝宝爱吃</strong>
                          <span><Link to="####">补充热量</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/875ece0e6c7cf8fb4a7c5af26639785a.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >大米发糕</Link></h2>
                          <strong>又软又糯，美味挡不住</strong>
                          <span><Link to="####">增强体质</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/697d8d8f6e0b7eaeeca0bd0138ac56e9.jpg" alt=""/>
                  <div className="c pngFix">
                        <h2><Link to="####" >蜂蜜柚子茶</Link></h2>
                        <strong>润肺化痰，清新解腻</strong>
                        <span><Link to="####">清热去火</Link><em className="arrow pngFix"></em></span>
                      </div>
                  </li>
                  </ul>
                </div>
                <div className="swiper-slide">
                  <h3>今日晚餐推荐：暖心暖胃的深夜套餐奉上！</h3>
                  <ul className="img">
                    <li><img src="https://s1.ig.meishij.net/p/20190305/d8ceb6273100394d27c9870bed95fc37.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >干煸豆角</Link></h2>
                          <strong>干香爽脆，下饭美味</strong>
                          <span><Link to="####">利水消肿</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/75f7980ebd4b4683be6c607aae975eac.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####" >香烤猪蹄</Link></h2>
                          <strong>筋道有嚼劲，美味撩人</strong>
                          <span><Link to="####">美容养颜</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/9f0a62009c346c6614a08e13ccb86eba.jpg" alt=""/>
                  <div className="c pngFix">
                        <h2><Link to="####" title="韭菜鸡蛋素包子">肉片炒儿菜</Link></h2>
                        <strong>皮荤素搭配，营养美味</strong>
                        <span><Link to="####">强身健体</Link><em className="arrow pngFix"></em></span>
                      </div>
                  </li>
                  </ul>
                </div>
                <div className="swiper-slide">
                  <h3>今日夜宵推荐：解馋美食，深夜相伴</h3>
                  <ul className="img">
                    <li><img src="https://s1.ig.meishij.net/p/20190305/f45592564147d9f5f6e1154a35faddbb.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####">铁板鱿鱼</Link></h2>
                          <strong>香酥脆鲜，无比鲜美</strong>
                          <span><Link to="####">补充蛋白</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/fc1f2c394693df14e1486223b63a1608.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####">烤红薯</Link></h2>
                          <strong>香气满屋，好吃解馋</strong>
                          <span><Link to="####">增强抵抗力</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                    <li><img src="https://s1.ig.meishij.net/p/20190305/6bb341fe19fd82f75a5819c05ff6d1a7.jpg" alt=""/>
                    <div className="c pngFix">
                          <h2><Link to="####">鲜虾丸子汤</Link></h2>
                          <strong>鲜香滋润，营养丰富</strong>
                          <span><Link to="####">补钙</Link><em className="arrow pngFix"></em></span>
                        </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="swiper-button-prev jt"></div>
              <div className="swiper-button-next jt"></div>
              <div className="swiper-pagination"></div>
            </div> */}
          </div>
          
          <div className="sanyue">
            <h3>
            三月，阳气生发，万物始生
              <span><Link to="#">更多食材 ></Link></span>
            </h3>
            <div className="index_sc_w">
              <dl>
                <dd className={this.state.className1}>
                  <Link to="####" className="link" onMouseOver={this.active1.bind(this)}>水果</Link>
                  <div className="index_sc_con">
                    <div className="c">
                      <Link target="_blank" to="https://www.meishij.net/菠萝"><img src="https://s1.ig.meishij.net/p/20170330/1474452fbfa920f81a9b25e1622486cd_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>菠萝</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/草莓"><img src="https://s1.ig.meishij.net/p/20111215/58b6d849a47721a891d4a3a334a91191_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>草莓</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/香蕉"><img src="https://s1.ig.meishij.net/p/20170330/cbe31e4ef6176df562054b6b5297ca50_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>香蕉</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/圣女果"><img src="https://s1.ig.meishij.net/p/20120111/b5b81b0a06612ec8b61f310ff955683a_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>圣女果</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/梨"><img src="https://s1.ig.meishij.net/p/20170330/35af0f27e89091fb1126f81cdb6ad5c4_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>梨</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/甘蔗"><img src="https://s1.ig.meishij.net/p/20170330/3df43238975c0d2e094fa8e763a41f36_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>甘蔗</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/芒果"><img src="https://s1.ig.meishij.net/p/20150228/6084dad456eff7e4de9645b0c0918462_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>芒果</strong></span></Link>
                      <Link target="_blank" to="https://www.meishij.net/火龙果"><img src="https://s1.ig.meishij.net/p/20110714/de2e19c25348fe9784c98878738596a3_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>火龙果</strong></span></Link>
                    </div>
                  </div>
                </dd>
                <dd className={this.state.className2}>
                  <Link to="####" className="link" onMouseOver={this.active2.bind(this)}> 蔬菜</Link><div className="index_sc_con">
                  <div className="c">
                    <Link target="_blank" to="https://www.meishij.net/春笋"><img src="https://s1.ig.meishij.net/p/20120227/dddb340f4f97cf4d49383c63ca8c066a_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>春笋</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/莴笋"><img src="https://s1.ig.meishij.net/p/20170330/31900af8bf909e61f5982c91313ef665_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>莴笋</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/菠菜"><img src="https://s1.ig.meishij.net/p/20170330/39d74e9bfde79ebc96541ab744865293_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>菠菜</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/韭菜"><img src="https://s1.ig.meishij.net/p/20170330/7e2dea736c5c6c8a3871dd069fcb7171_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>韭菜</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/蒜苗"><img src="https://s1.ig.meishij.net/p/20150228/fd48ca5dfd30f945522ae7b7e0b3f903_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>蒜苗</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/油菜"><img src="https://s1.ig.meishij.net/p/20170330/501afc50b8b0d4f5508be8f96c01896c_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>油菜</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/卷心菜"><img src="https://s1.ig.meishij.net/p/20140521/effe3944174b288a948ef9ff85be82cc_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>卷心菜</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/油麦菜"><img src="https://s1.ig.meishij.net/p/20110830/7ca005000cad4f23ec2d8f9151cd6062_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>油麦菜</strong></span></Link>
                  </div>
                </div></dd>
                <dd className={this.state.className3}><Link to="####" className="link" onMouseOver={this.active3.bind(this)}>五谷</Link><div className="index_sc_con">
                  <div className="c">
                    <Link target="_blank" to="https://www.meishij.net/赤小豆"><img src="https://s1.ig.meishij.net/p/20110715/8f690769e15fd26ad5184dbfd0140052_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>赤小豆</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/玉米渣"><img src="https://s1.ig.meishij.net/p/20131104/c12a45065d38439ad02055f7db013133_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>玉米渣</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/大米"><img src="https://s1.ig.meishij.net/p/20110718/989b823c7089812d3d6e468bfc8d8cc3_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>大米</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/绿豆"><img src="https://s1.ig.meishij.net/p/20110715/58b3095b7efe444f302b8d0a5adc870d_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>绿豆</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/枣(干)"><img src="https://s1.ig.meishij.net/p/20170330/64d2110056024ccc163cf9bc8b51663d_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>枣(干)</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/花生"><img src="https://s1.ig.meishij.net/p/20170330/94b32e81e021d4a23d81fb0126fcf473_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>花生</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/燕麦"><img src="https://s1.ig.meishij.net/p/20150228/5bb1dda5bfa20c2772d81781c4a23f31_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>燕麦</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/小米"><img src="https://s1.ig.meishij.net/p/20110715/6e5402c9f8c0b48e35ae1257d7e03683_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>小米</strong></span></Link>
                  </div>
                </div></dd>
                <dd className={this.state.className4}><Link to="####" className="link" onMouseOver={this.active4.bind(this)}>生鲜</Link><div className="index_sc_con">
                  <div className="c">
                    <Link target="_blank" to="https://www.meishij.net/虾"><img src="https://s1.ig.meishij.net/p/20170330/23da49e7bb0dd02111b14d640c2a90eb_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>虾</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/黄鱼"><img src="https://s1.ig.meishij.net/p/20110822/e58343174e46f40834c1db19aa823be1_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>黄鱼</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/鸡"><img src="https://s1.ig.meishij.net/p/20170330/52c7f611c17459de9eaf1f4cdd6574cc_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>鸡</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/牛肉"><img src="https://s1.ig.meishij.net/p/20111019/a72016598763ceb63763b2f0efb75434_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>牛肉</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/五花肉"><img src="https://s1.ig.meishij.net/p/20110922/b1984b2f44c5f6c9ff7bd0e09ac1972f_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>五花肉</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/鲫鱼"><img src="https://s1.ig.meishij.net/p/20140331/4da435c5b7b482e337a31ee75de02060_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>鲫鱼</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/羊肉"><img src="https://s1.ig.meishij.net/p/20120607/1f899fcb0e876187e8af3392faa9b9a8_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>羊肉</strong></span></Link>
                    <Link target="_blank" to="https://www.meishij.net/带鱼"><img src="https://s1.ig.meishij.net/p/20170330/1cc4705a67b303ddf6e543d9ba33eff2_150x150.jpg" alt="tipian" /><span className="name pngFix"><em className="notz"></em><strong>带鱼</strong></span></Link>
                  </div>
                </div></dd>
              </dl>
            </div>
          </div>
          
          <div className="index_pxi">
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <h3 className="bbtitles">最新菜谱</h3>
                  <div className="listtyle2_w clearfix" id="listtyle1_w">
                    <div className="listtyle1_list clearfix" id="listtyle1_list">
                      <div className="listtyle1 ml0">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/niurouwantaiyangmian.html" title="牛肉丸太阳面" className="big">
                        <img className="img" alt="牛肉丸太阳面" src="https://s1.st.meishij.net/r/65/51/13262815/a13262815_155094096501538.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>牛肉丸太阳面</strong><span>3 评论  433 人气</span><em>超级幸运辣</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概30分钟</li><li className="li2">煮 / 咸鲜味</li></ul></div></div></div>
                        <strong className="gx"><span>强身健体</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/zaoniyikousu_3.html" title="枣泥一口酥" className="big">
                        <img className="img" alt="枣泥一口酥" src="https://s1.st.meishij.net/r/93/209/2677343/a2677343_155093239143341.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>枣泥一口酥</strong><span>1 评论  376 人气</span><em>米汀Waiting</em></div>
                        <div className="c2"><ul><li className="li1">10步 / 大概30分钟</li><li className="li2">烘焙 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>促发育</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/chunshougongzhuroufu.html" title="纯手工猪肉脯" className="big">
                        <img className="img" alt="纯手工猪肉脯" src="https://s1.st.meishij.net/r/173/28/13569673/a13569673_155090421165577.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>纯手工猪肉脯</strong><span>1 评论  424 人气</span><em>杰米13569673</em></div>
                        <div className="c2"><ul><li className="li1">5步 / 大概30分钟</li><li className="li2">烤 / 甜味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/nongjiaxiaochaorou_59.html" title="农家小炒肉" className="big">
                        <img className="img" alt="农家小炒肉" src="https://s1.st.meishij.net/r/09/29/13132259/a13132259_155088726506357.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>农家小炒肉</strong><span>19 评论  297 人气</span><em>造食日记</em></div>
                        <div className="c2"><ul><li className="li1">4步 / 大概5分钟</li><li className="li2">炒 / 香辣味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1 ml0">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/nanguayinerlu_4.html" title="南瓜银耳露" className="big">
                        <img className="img" alt="南瓜银耳露" src="https://s1.st.meishij.net/r/146/168/3542146/a3542146_155084832282071.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>南瓜银耳露</strong><span>0 评论  480 人气</span><em>soshaw</em></div>
                        <div className="c2"><ul><li className="li1">6步 / 大概30分钟</li><li className="li2">煮 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>防癌</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/jiachanghongshaopaigu_4.html" title="家常红烧排骨" className="big">
                        <img className="img" alt="家常红烧排骨" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080067677406.jpg" />
                        <div className="i_w">
                        <div className="i" >
                        <div className="c1"><strong>家常红烧排骨</strong><span>0 评论  479 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">8步 / 大概数小时</li><li className="li2">烧 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>补肾</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/yuntunmian_22.html" title="云吞面" className="big">
                        <img className="img" alt="云吞面" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080680668426.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>云吞面</strong><span>0 评论  484 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概90分钟</li><li className="li2">煮 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>抵抗力</span></strong></Link>
                      </div>
                      <div className="listtyle1 ">
                      <div className="index_cplist_more">
                        <h3>热门栏目推荐</h3>
                        <ul><li><Link to="/chufang/diy/">最新菜谱</Link></li><li><Link to="/chufang/diy/jiangchangcaipu/">家常菜</Link></li><li><Link to="/chufang/diy/langcaipu/">凉菜</Link></li><li><Link to="/chufang/diy/sushi/">素食</Link></li><li><Link to="/chufang/diy/zaocan/">早餐</Link></li><li><Link to="/yaoshanshiliao/gongnengxing/wufa/">乌发</Link></li><li><Link to="/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</Link></li><li><Link to="/hongpei/">烘焙</Link></li><li><Link to="/chufang/diy/guowaicaipu1/hanguo/">韩国料理</Link></li><li><Link to="/china-food/caixi/chuancai/">川菜</Link></li><li><Link to="/china-food/caixi/yuecai/">粤菜</Link></li><li><Link to="/china-food/caixi/xiangcai/">湘菜</Link></li><li><Link to="/chufang/diy/tianpindianxin/">甜点</Link></li><li><Link to="/chufang/diy/" className="hot">进入菜谱大全 &gt;&gt;</Link></li></ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <h3 className="bbtitles">每小时最热菜谱</h3>
                  <div className="listtyle2_w clearfix" id="listtyle1_w">
                    <div className="listtyle1_list clearfix" id="listtyle1_list">
                      <div className="listtyle1 ml0">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/niurouwantaiyangmian.html" title="牛肉丸太阳面" className="big">
                        <img className="img" alt="牛肉丸太阳面" src="https://s1.st.meishij.net/r/65/51/13262815/a13262815_155094096501538.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>牛肉丸太阳面</strong><span>3 评论  433 人气</span><em>超级幸运辣</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概30分钟</li><li className="li2">煮 / 咸鲜味</li></ul></div></div></div>
                        <strong className="gx"><span>强身健体</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/zaoniyikousu_3.html" title="枣泥一口酥" className="big">
                        <img className="img" alt="枣泥一口酥" src="https://s1.st.meishij.net/r/93/209/2677343/a2677343_155093239143341.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>枣泥一口酥</strong><span>1 评论  376 人气</span><em>米汀Waiting</em></div>
                        <div className="c2"><ul><li className="li1">10步 / 大概30分钟</li><li className="li2">烘焙 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>促发育</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/chunshougongzhuroufu.html" title="纯手工猪肉脯" className="big">
                        <img className="img" alt="纯手工猪肉脯" src="https://s1.st.meishij.net/r/173/28/13569673/a13569673_155090421165577.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>纯手工猪肉脯</strong><span>1 评论  424 人气</span><em>杰米13569673</em></div>
                        <div className="c2"><ul><li className="li1">5步 / 大概30分钟</li><li className="li2">烤 / 甜味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/nongjiaxiaochaorou_59.html" title="农家小炒肉" className="big">
                        <img className="img" alt="农家小炒肉" src="https://s1.st.meishij.net/r/09/29/13132259/a13132259_155088726506357.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>农家小炒肉</strong><span>19 评论  297 人气</span><em>造食日记</em></div>
                        <div className="c2"><ul><li className="li1">4步 / 大概5分钟</li><li className="li2">炒 / 香辣味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1 ml0">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/nanguayinerlu_4.html" title="南瓜银耳露" className="big">
                        <img className="img" alt="南瓜银耳露" src="https://s1.st.meishij.net/r/146/168/3542146/a3542146_155084832282071.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>南瓜银耳露</strong><span>0 评论  480 人气</span><em>soshaw</em></div>
                        <div className="c2"><ul><li className="li1">6步 / 大概30分钟</li><li className="li2">煮 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>防癌</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/jiachanghongshaopaigu_4.html" title="家常红烧排骨" className="big">
                        <img className="img" alt="家常红烧排骨" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080067677406.jpg" />
                        <div className="i_w">
                        <div className="i" >
                        <div className="c1"><strong>家常红烧排骨</strong><span>0 评论  479 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">8步 / 大概数小时</li><li className="li2">烧 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>补肾</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/yuntunmian_22.html" title="云吞面" className="big">
                        <img className="img" alt="云吞面" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080680668426.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>云吞面</strong><span>0 评论  484 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概90分钟</li><li className="li2">煮 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>抵抗力</span></strong></Link>
                      </div>
                      <div className="listtyle1 ">
                      <div className="index_cplist_more">
                        <h3>热门栏目推荐</h3>
                        <ul><li><Link to="/chufang/diy/">最新菜谱</Link></li><li><Link to="/chufang/diy/jiangchangcaipu/">家常菜</Link></li><li><Link to="/chufang/diy/langcaipu/">凉菜</Link></li><li><Link to="/chufang/diy/sushi/">素食</Link></li><li><Link to="/chufang/diy/zaocan/">早餐</Link></li><li><Link to="/yaoshanshiliao/gongnengxing/wufa/">乌发</Link></li><li><Link to="/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</Link></li><li><Link to="/hongpei/">烘焙</Link></li><li><Link to="/chufang/diy/guowaicaipu1/hanguo/">韩国料理</Link></li><li><Link to="/china-food/caixi/chuancai/">川菜</Link></li><li><Link to="/china-food/caixi/yuecai/">粤菜</Link></li><li><Link to="/china-food/caixi/xiangcai/">湘菜</Link></li><li><Link to="/chufang/diy/tianpindianxin/">甜点</Link></li><li><Link to="/chufang/diy/" className="hot">进入菜谱大全 &gt;&gt;</Link></li></ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <h3 className="bbtitles">今日最受欢迎菜谱</h3>
                  <div className="listtyle2_w clearfix" id="listtyle1_w">
                    <div className="listtyle1_list clearfix" id="listtyle1_list">
                      <div className="listtyle1 ml0">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/niurouwantaiyangmian.html" title="牛肉丸太阳面" className="big">
                        <img className="img" alt="牛肉丸太阳面" src="https://s1.st.meishij.net/r/65/51/13262815/a13262815_155094096501538.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>牛肉丸太阳面</strong><span>3 评论  433 人气</span><em>超级幸运辣</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概30分钟</li><li className="li2">煮 / 咸鲜味</li></ul></div></div></div>
                        <strong className="gx"><span>强身健体</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/zaoniyikousu_3.html" title="枣泥一口酥" className="big">
                        <img className="img" alt="枣泥一口酥" src="https://s1.st.meishij.net/r/93/209/2677343/a2677343_155093239143341.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>枣泥一口酥</strong><span>1 评论  376 人气</span><em>米汀Waiting</em></div>
                        <div className="c2"><ul><li className="li1">10步 / 大概30分钟</li><li className="li2">烘焙 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>促发育</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/chunshougongzhuroufu.html" title="纯手工猪肉脯" className="big">
                        <img className="img" alt="纯手工猪肉脯" src="https://s1.st.meishij.net/r/173/28/13569673/a13569673_155090421165577.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>纯手工猪肉脯</strong><span>1 评论  424 人气</span><em>杰米13569673</em></div>
                        <div className="c2"><ul><li className="li1">5步 / 大概30分钟</li><li className="li2">烤 / 甜味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/nongjiaxiaochaorou_59.html" title="农家小炒肉" className="big">
                        <img className="img" alt="农家小炒肉" src="https://s1.st.meishij.net/r/09/29/13132259/a13132259_155088726506357.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>农家小炒肉</strong><span>19 评论  297 人气</span><em>造食日记</em></div>
                        <div className="c2"><ul><li className="li1">4步 / 大概5分钟</li><li className="li2">炒 / 香辣味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1 ml0">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/nanguayinerlu_4.html" title="南瓜银耳露" className="big">
                        <img className="img" alt="南瓜银耳露" src="https://s1.st.meishij.net/r/146/168/3542146/a3542146_155084832282071.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>南瓜银耳露</strong><span>0 评论  480 人气</span><em>soshaw</em></div>
                        <div className="c2"><ul><li className="li1">6步 / 大概30分钟</li><li className="li2">煮 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>防癌</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/jiachanghongshaopaigu_4.html" title="家常红烧排骨" className="big">
                        <img className="img" alt="家常红烧排骨" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080067677406.jpg" />
                        <div className="i_w">
                        <div className="i" >
                        <div className="c1"><strong>家常红烧排骨</strong><span>0 评论  479 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">8步 / 大概数小时</li><li className="li2">烧 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>补肾</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/yuntunmian_22.html" title="云吞面" className="big">
                        <img className="img" alt="云吞面" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080680668426.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>云吞面</strong><span>0 评论  484 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概90分钟</li><li className="li2">煮 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>抵抗力</span></strong></Link>
                      </div>
                      <div className="listtyle1 ">
                      <div className="index_cplist_more">
                        <h3>热门栏目推荐</h3>
                        <ul><li><Link to="/chufang/diy/">最新菜谱</Link></li><li><Link to="/chufang/diy/jiangchangcaipu/">家常菜</Link></li><li><Link to="/chufang/diy/langcaipu/">凉菜</Link></li><li><Link to="/chufang/diy/sushi/">素食</Link></li><li><Link to="/chufang/diy/zaocan/">早餐</Link></li><li><Link to="/yaoshanshiliao/gongnengxing/wufa/">乌发</Link></li><li><Link to="/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</Link></li><li><Link to="/hongpei/">烘焙</Link></li><li><Link to="/chufang/diy/guowaicaipu1/hanguo/">韩国料理</Link></li><li><Link to="/china-food/caixi/chuancai/">川菜</Link></li><li><Link to="/china-food/caixi/yuecai/">粤菜</Link></li><li><Link to="/china-food/caixi/xiangcai/">湘菜</Link></li><li><Link to="/chufang/diy/tianpindianxin/">甜点</Link></li><li><Link to="/chufang/diy/" className="hot">进入菜谱大全 &gt;&gt;</Link></li></ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <h3 className="bbtitles">一周最新欢迎菜谱</h3>
                  <div className="listtyle2_w clearfix" id="listtyle1_w">
                    <div className="listtyle1_list clearfix" id="listtyle1_list">
                      <div className="listtyle1 ml0">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/niurouwantaiyangmian.html" title="牛肉丸太阳面" className="big">
                        <img className="img" alt="牛肉丸太阳面" src="https://s1.st.meishij.net/r/65/51/13262815/a13262815_155094096501538.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>牛肉丸太阳面</strong><span>3 评论  433 人气</span><em>超级幸运辣</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概30分钟</li><li className="li2">煮 / 咸鲜味</li></ul></div></div></div>
                        <strong className="gx"><span>强身健体</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/zaoniyikousu_3.html" title="枣泥一口酥" className="big">
                        <img className="img" alt="枣泥一口酥" src="https://s1.st.meishij.net/r/93/209/2677343/a2677343_155093239143341.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>枣泥一口酥</strong><span>1 评论  376 人气</span><em>米汀Waiting</em></div>
                        <div className="c2"><ul><li className="li1">10步 / 大概30分钟</li><li className="li2">烘焙 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>促发育</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/chunshougongzhuroufu.html" title="纯手工猪肉脯" className="big">
                        <img className="img" alt="纯手工猪肉脯" src="https://s1.st.meishij.net/r/173/28/13569673/a13569673_155090421165577.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>纯手工猪肉脯</strong><span>1 评论  424 人气</span><em>杰米13569673</em></div>
                        <div className="c2"><ul><li className="li1">5步 / 大概30分钟</li><li className="li2">烤 / 甜味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1">
                        <Link target="_blank" to="https://www.meishij.net/zuofa/nongjiaxiaochaorou_59.html" title="农家小炒肉" className="big">
                        <img className="img" alt="农家小炒肉" src="https://s1.st.meishij.net/r/09/29/13132259/a13132259_155088726506357.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>农家小炒肉</strong><span>19 评论  297 人气</span><em>造食日记</em></div>
                        <div className="c2"><ul><li className="li1">4步 / 大概5分钟</li><li className="li2">炒 / 香辣味</li></ul></div></div></div>
                        </Link>
                      </div>
                      <div className="listtyle1 ml0">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/nanguayinerlu_4.html" title="南瓜银耳露" className="big">
                        <img className="img" alt="南瓜银耳露" src="https://s1.st.meishij.net/r/146/168/3542146/a3542146_155084832282071.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>南瓜银耳露</strong><span>0 评论  480 人气</span><em>soshaw</em></div>
                        <div className="c2"><ul><li className="li1">6步 / 大概30分钟</li><li className="li2">煮 / 甜味</li></ul></div></div></div>
                        <strong className="gx"><span>防癌</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/jiachanghongshaopaigu_4.html" title="家常红烧排骨" className="big">
                        <img className="img" alt="家常红烧排骨" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080067677406.jpg" />
                        <div className="i_w">
                        <div className="i" >
                        <div className="c1"><strong>家常红烧排骨</strong><span>0 评论  479 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">8步 / 大概数小时</li><li className="li2">烧 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>补肾</span></strong></Link>
                      </div>
                      <div className="listtyle1">
                      <Link target="_blank" to="https://www.meishij.net/zuofa/yuntunmian_22.html" title="云吞面" className="big">
                        <img className="img" alt="云吞面" src="https://s1.st.meishij.net/r/143/54/3701143/a3701143_155080680668426.jpg" />
                        <div className="i_w">
                        <div className="i">
                        <div className="c1"><strong>云吞面</strong><span>0 评论  484 人气</span><em>石榴树2008</em></div>
                        <div className="c2"><ul><li className="li1">11步 / 大概90分钟</li><li className="li2">煮 / 家常味</li></ul></div></div></div>
                        <strong className="gx"><span>抵抗力</span></strong></Link>
                      </div>
                      <div className="listtyle1 ">
                      <div className="index_cplist_more">
                        <h3>热门栏目推荐</h3>
                        <ul><li><Link to="/chufang/diy/">最新菜谱</Link></li><li><Link to="/chufang/diy/jiangchangcaipu/">家常菜</Link></li><li><Link to="/chufang/diy/langcaipu/">凉菜</Link></li><li><Link to="/chufang/diy/sushi/">素食</Link></li><li><Link to="/chufang/diy/zaocan/">早餐</Link></li><li><Link to="/yaoshanshiliao/gongnengxing/wufa/">乌发</Link></li><li><Link to="/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</Link></li><li><Link to="/hongpei/">烘焙</Link></li><li><Link to="/chufang/diy/guowaicaipu1/hanguo/">韩国料理</Link></li><li><Link to="/china-food/caixi/chuancai/">川菜</Link></li><li><Link to="/china-food/caixi/yuecai/">粤菜</Link></li><li><Link to="/china-food/caixi/xiangcai/">湘菜</Link></li><li><Link to="/chufang/diy/tianpindianxin/">甜点</Link></li><li><Link to="/chufang/diy/" className="hot">进入菜谱大全 &gt;&gt;</Link></li></ul>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="bbtitles">健康新闻<span className="paixu"><Link target="_blank" to="https://www.meishij.net/jiankang/">更多健康资讯 &gt;</Link></span></h3>

          <div className="jk">
            <div className="index_health">
              <div className="left">
                <div className="div1 mb20">
                <h2><Link target="_blank" to="https://www.meishij.net/jiankang/shipinanquan/">食品安全</Link><em className="arrow"></em></h2>
                <ul className="index_healthitem">
                  <li className="current"><Link target="_blank" to="https://www.meishij.net/changshi/dongyubaoxianbaoyingyangma.html" className="img"><img src="https://s1.ig.meishij.net/p/20170123/b43be469069cab07d99b486cc326a6bf_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/changshi/dongyubaoxianbaoyingyangma.html">冻鱼保鲜保营养吗?</Link></h3></li>
                  <li className=""><Link target="_blank" to="https://www.meishij.net/changshi/naxiepijiuyaoyanhuanzaifei.html" className="img"><img src="https://s1.ig.meishij.net/p/20170122/c6073156c81757ec3a7757371242be19_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/changshi/naxiepijiuyaoyanhuanzaifei.html">哪些啤酒谣言还在飞?</Link></h3></li>
                  <li className=""><Link target="_blank" to="https://www.meishij.net/changshi/liangbanhuoyouzhasijidouyizhongdu.html" className="img"><img src="https://s1.ig.meishij.net/p/20170111/2345a423207f6ec91011ef9b71ada0c3_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/changshi/liangbanhuoyouzhasijidouyizhongdu.html">凉拌或油炸四季豆易中毒</Link></h3></li>
                </ul>
              </div>
                <div className="div1 mb20 mr0">
                  <h2><Link target="_blank" to="https://www.meishij.net/wenhua/">文化典故</Link><em className="arrow"></em></h2>
                  <ul className="index_healthitem">
                      <li className="current"><Link target="_blank" to="https://www.meishij.net/diangu/nanfangchunjieshiwudeyuyi.html" className="img"><img src="https://s1.ig.meishij.net/p/20170122/0066c212db9fe02c82a1f3906ff0d40c_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/diangu/nanfangchunjieshiwudeyuyi.html">南方春节食物的寓意</Link></h3></li>
                      <li className=""><Link target="_blank" to="https://www.meishij.net/haiwai/qingshizhuyidaodishishimene.html" className="img"><img src="https://s1.ig.meishij.net/p/20170110/127fc7851fb456fce224e948ae5d36ff_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/haiwai/qingshizhuyidaodishishimene.html">轻食主义到底是什么呢?</Link></h3></li>
                      <li className=""><Link target="_blank" to="https://www.meishij.net/diangu/labachuliaochilabazhouhuanchishime.html" className="img"><img src="https://s1.ig.meishij.net/p/20170104/41cc4e226b54d1f7d210b4c81229c70e_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/diangu/labachuliaochilabazhouhuanchishime.html">腊八除了吃腊八粥还吃什么？</Link></h3></li>
                    </ul>
                </div>
                <div className="div1 mb0">
                  <h2><Link target="_blank" to="https://www.meishij.net/jiankang/">健康指南</Link><em className="arrow"></em></h2>
                  <ul className="index_healthitem">
                      <li className="current"><Link target="_blank" to="https://www.meishij.net/xinwencaifang/2019heizhenzhucantingzhinang.html" className="img"><img src="https://static.meishij.net/images/nopic.gif" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/2019heizhenzhucantingzhinang.html">2019“黑珍珠餐厅指南”公布，周师</Link></h3></li>
                      <li className=""><Link target="_blank" to="https://www.meishij.net/xinwencaifang/baozoudeweishengsuzhiwangdiz.html" className="img"><img src="https://s1.ig.meishij.net/p/20181204/068c197c36b14b76062766a8e6bbe174.jpg" alt="tupian"/></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/baozoudeweishengsuzhiwangdiz.html">暴走的维生素之王——地中海红柠檬</Link></h3></li>
                      <li className=""><Link target="_blank" to="https://www.meishij.net/xinwencaifang/tieqiubiaozhengquezishishuag.html" className="img"><img src="https://s1.ig.meishij.net/p/20181024/00f2487e0b25814ea5631e3ef8040263.jpg" alt="tupian"/></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/tieqiubiaozhengquezishishuag.html">贴秋膘正确姿势：刷广发信用卡半价</Link></h3></li>
                    </ul>
                </div>
                <div className="div1 mr0 mb0">
                <h2><Link target="_blank" to="https://www.meishij.net/huodong/haishen1106.php">新鲜资讯</Link><em className="arrow"></em></h2>
                <ul className="index_healthitem">
                    <li className="current"><Link target="_blank" to="https://www.meishij.net/xinwencaifang/jianzhengjiankangheikejiawe2.html" className="img"><img src="https://s1.ig.meishij.net/p/20180314/a81409c9d416c2ece1c33b6d568c3285_150x150.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/jianzhengjiankangheikejiawe2.html">见证健康黑科技，AWE2018松下nanoe</Link></h3></li>
                    <li><Link target="_blank" to="https://www.meishij.net/xinwencaifang/jiangxinsuozhibaoxianyishuso.html" className="img"><img  src="https://s1.ig.meishij.net/p/20180314/132c3c004d15ef4da3ae7b21aa08a432.jpg" alt="tupian" /></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/jiangxinsuozhibaoxianyishuso.html">匠心所制 保鲜艺术 松下发布2018健</Link></h3></li>
                    <li><Link target="_blank" to="https://www.meishij.net/xinwencaifang/2020nianjiangshixian200yixia.html" className="img"><img  src="https://s1.ig.meishij.net/p/20180314/132c3c004d15ef4da3ae7b21aa08a432.jpg" alt="tupian"  /></Link><h3><Link target="_blank" to="https://www.meishij.net/xinwencaifang/2020nianjiangshixian200yixia.html">2020年将实现200亿销售额目标 ——</Link></h3></li>
                  </ul>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comp
