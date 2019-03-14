import React, { Component } from 'react'
import '@/style/detail.scss'
import { Carousel } from 'antd'
import qq from '@/static/detail/qq.jpg'
import qq_k from '@/static/detail/qq_k.jpg'
import weibo from '@/static/detail/weibo.jpg'
import api from '@/api/caipu'

class Comp extends Component {
  constructor(props){
    super(props);
    this.state={
      title:"",
      image:"",
    }
  }
  componentWillMount(){
    console.log(this.props.match.params.id);
    api.requestAllCai(this.props.match.params.id).then(data=>{
      console.log(data)
      this.setState({
        title:data[0].title,
        image:data[0].image
      })
    })

  }
  render () {
    return (
      <div className="content">
        <div className="margin">
          <div className="c-top">
            <p className="title"><span className="shouye">首页</span> <s> > </s> <span>菜谱大全</span> <s> > </s></p>
            <div className="img-main">
              <div className="img-l">
                <img src={ this.state.image } alt="404"/>
              </div>
              <div className="img-r">
                <div className="img-r-t">
                  <h1 className="title">{this.state.title}</h1>
                  <div className="erweima">
                    <div className="ewmbox">
                      <div className="box-t">
                        <strong>用手机查看这篇菜谱</strong>
                        <p className="p">手机扫描右侧二维码，<br/>将这篇菜谱带进厨房，让您边做边看！<br/><br/>您也可以下载美食杰手机客户端 ><br/>随时随地看菜谱!</p>
                      </div>
                      <img src="https://www.meishij.net/ajax/qrcode_wap.php?i=1919876" alt="33"/>
                    </div>
                  </div>
                  <p className="shoucang">收藏</p>
                  <div className="fenxiang">
                    <span className="fengxiangdao">分享到：</span>
                    <img className="qq" src={ qq } alt="404"/>
                    <img className="qq_k" src={ qq_k } alt="404"/>
                    <img className="weibo" src={ weibo } alt="404"/>
                  </div>
                  <ul className="gongxiao">
                    <li>强身健体</li>
                    <li>抵抗力</li>
                    <li>贫血</li>
                    <li>强身健体</li>
                    <li>抵抗力</li>
                    <li>贫血</li>
                  </ul>
                </div>
                <div className="jieshao">
                  <p className="jieshao-c">
                    <strong>“</strong>
                    香脆弹牙的潮汕牛肉丸 配上颜值巨高的太阳蛋 抖动的蛋黄~ 流淌的溏心~
                    <br/>
                    再加几根青菜 看似朴素 又十分鲜美的一碗面汤 
                    <br/>
                    每天都在忙碌工作的我们也不能忘了给自己和家人来一碗热腾腾的快手面条补充能量哦
                    <strong>”</strong>
                  </p>
                </div>
                <div className="user">
                  <img className="img-user" src="https://s1.st.meishij.net/user/65/51/t13262815_153970851463621.jpg" alt="user"/>
                  <div className="user-con">
                    <h4>
                      <span className="user-title">超级幸运辣</span>
                      <span className="V"></span>
                      <p className="xinxi"> 菜谱：17 / 关注：2 / 粉丝：249 </p>
                      <strong> 2019-02-24　/　434人看过 </strong>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="c-bottom">
            <div className="c-bottom-l">
              <h2>{this.state.title}的做法</h2>
              <div className="way">
                <div className="way1">
                  <em>1.</em>
                  <div className="way1-c">
                    <p>我准备的是牛肉丸6颗 洗净后可以用刀割出喜欢的形状 还有一包附送的炸蒜米很香</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126038295.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>2.</em>
                  <div className="way1-c">
                    <p>2块面条 用水冲洗一下</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094131499819.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>3.</em>
                  <div className="way1-c">
                    <p>青菜洗净备用</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094125330209.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>4.</em>
                  <div className="way1-c">
                    <p>蒜苗洗净切碎备用</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094125519230.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>5.</em>
                  <div className="way1-c">
                    <p>锅内放少许油 把蒜苗小炒爆香后放碗中备用</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126158423.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>6.</em>
                  <div className="way1-c">
                    <p>锅内放2大碗水 朋友们可以按照需要多少面汤放水 然后将水煮沸</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126273169.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>7.</em>
                  <div className="way1-c">
                    <p>把青菜放入 烫熟之后捞起</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094142034165.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>8.</em>
                  <div className="way1-c">
                    <p>面条放入水中 煮5分钟</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126386533.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>9.</em>
                  <div className="way1-c">
                    <p>放入刚刚爆香的蒜苗 牛肉丸 和 炸蒜米</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126449919.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>10.</em>
                  <div className="way1-c">
                    <p>根据自己的口味放入盐和鸡粉 我这里放的是5克盐和2.5克鸡粉 大家可以参考一下 随后锅内搅匀一下 再煮5分钟 面条就能起锅了</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094130486713.jpg" alt="21" />
                  </div>
                </div>
              </div>
              <div className="way">
                <div className="way1">
                  <em>11.</em>
                  <div className="way1-c">
                    <p>我们用平底锅煎出美美的太阳蛋</p>
                    <img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094126572060.jpg" alt="21" />
                  </div>
                  <h3 className="tt">牛肉丸太阳面成品图</h3>
                  <Carousel autoplay>
                    <div className="swiper"><img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094155454508.jpg" alt="66"/></div>
                    <div className="swiper"><img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094154071875.jpg" alt="66"/></div>
                    <div className="swiper"><img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094152298255.jpg" alt="66"/></div>
                    <div className="swiper"><img src="https://s1.st.meishij.net/rs/65/51/13262815/n13262815_155094150674991.jpg" alt="66"/></div>
                  </Carousel>
                  <h2>烹饪技巧</h2>
                  <p className="jiqiao">
                    ① 这份食谱是2人份的面汤
                    <br/>
                    ② 青菜只要烫一下就熟了 不要煮久哦
                    <br/>
                    ③ 美食教程持续更新中 喜欢的朋友一定要记得关注我哦 有任何问题都可以给我留言 么么哒～ 
                  </p>
                </div>
              </div>
            </div>
            <div className="c-bottom-r">
              <ul>
                <li>广告位</li>
                <li>广告位</li>
                <li>广告位</li>
              </ul>
            </div>
          </div>
        </div> 
      </div>  
    )
  }
}

export default Comp

