import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <nav className="nav">
        <div className="margin">
          <ul>
            <li><Link to="/" className="a1">首页</Link></li>
            <li className="te1 te2 te3"><Link to="/j/caipu" className="a1">菜谱大全</Link>
            <div className="dw clearfix te5">
              <div className="dww clearfix dww_cpdq">
                <div className="dwitem clearfix pngFix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/chufang/diy/">家常菜谱</Link></dt>		
                    <dd><Link to="https://www.meishij.net/chufang/diy/jiangchangcaipu/">家常菜</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/langcaipu/">凉菜</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/sushi/">素食</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/wancan/">晚餐</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/sijiacai/">私家菜</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/recaipu/">热菜</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/haixian/">海鲜</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/yunfu/">孕妇</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/zaocan/">早餐</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/wucan/">午餐</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/tianpindianxin/">甜品点心</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/tangbaocaipu/">汤粥</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/baobaocaipu/">宝宝食谱-婴儿食谱</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/gaodianxiaochi/">糕点主食</Link></dd>	
                    <dd><Link to="https://www.meishij.net/chufang/diy/weibolucaipu/">微波炉</Link></dd>
                  </dl>
                </div>
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/china-food/caixi/">中华菜系</Link></dt>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/chuancai/">川菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/yuecai/">粤菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/dongbeicai/">东北菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/xiangcai/">湘菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/lucai/">鲁菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/zhecai/">浙菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/hubeicai/">湖北菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/china-food/caixi/qingzhencai/">清真菜</Link></dd>
                  </dl>
                </div>
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix"><dt><Link to="https://www.meishij.net/china-food/xiaochi/">各地小吃</Link></dt>	
                    <dd><Link to="https://www.meishij.net/china-food/xiaochi/sichuan/">四川小吃</Link></dd>	
                    <dd><Link to="https://www.meishij.net/china-food/xiaochi/guangdong/">广东小吃</Link></dd>	
                    <dd><Link to="https://www.meishij.net/china-food/xiaochi/beijing/">北京小吃</Link></dd>	
                    <dd><Link to="https://www.meishij.net/china-food/xiaochi/shanxii/">陕西小吃</Link></dd>
                  </dl>
                </div><br />
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/chufang/diy/guowaicaipu1/">外国菜谱</Link></dt>
                    <dd><Link to="https://www.meishij.net/chufang/diy/guowaicaipu1/hanguo/">韩国料理</Link></dd>
                    <dd><Link to="https://www.meishij.net/chufang/diy/guowaicaipu1/japan/">日本料理</Link></dd>
                    <dd><Link to="https://www.meishij.net/chufang/diy/guowaicaipu1/faguo/">法国菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/chufang/diy/guowaicaipu1/yidali/">意大利餐</Link></dd>
                  </dl>
                </div>
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/hongpei/">烘焙</Link></dt>
                    <dd><Link to="https://www.meishij.net/hongpei/dangaomianbao/">蛋糕面包</Link></dd>
                    <dd><Link to="https://www.meishij.net/hongpei/bingganpeifang/">饼干配方</Link></dd>
                    <dd><Link to="https://www.meishij.net/hongpei/tianpindianxin/">甜品点心</Link></dd>
                  </dl>
                </div><br />
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/pengren/">厨房百科</Link></dt>
                    <dd><Link to="https://www.meishij.net/pengren/baipanzhoubian/">摆盘围边</Link></dd>
                    <dd><Link to="https://www.meishij.net/pengren/jiqiao/">烹饪技巧</Link></dd>
                    <dd><Link to="https://www.meishij.net/pengren/chufangmiaozhao/">生活妙招</Link></dd>
                    <dd><Link to="https://www.meishij.net/pengren/chufang/">美食专题</Link></dd>
                  </dl>
                </div>
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/shicai/">食材百科</Link></dt>
                    <dd><Link to="https://www.meishij.net/shicai/shucai_list">蔬菜</Link></dd>
                    <dd><Link to="https://www.meishij.net/shicai/shuiguo_list">水果</Link></dd>
                    <dd><Link to="https://www.meishij.net/shicai/gulei_list">谷类</Link></dd>
                  </dl></div>
                <div className="bgitem"></div>
              </div>
            </div>
            </li>
            <li className="te1 te2 te4"><Link to="/j/healthy" className="a1">饮食健康</Link>
            <div className="dw clearfix te6">
              <div className="dww clearfix dww_ysjk">
                <div className="dwitem clearfix pngFix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/jiankang/">饮食健康</Link></dt>
                    <dd><Link to="https://www.meishij.net/jiankang/changshi/">饮食小常识</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/meirong/">美容瘦身</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/shipinanquan/">食品安全</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/yangsheng/">养生妙方</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/jinji/">饮食禁忌</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/zhongyi/">中医保健</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/muying/">母婴健康饮食</Link></dd>
                    <dd><Link to="https://www.meishij.net/jiankang/yinshixinwen/">饮食新闻</Link></dd>
                  </dl>
                </div>
                <div className="dwitem clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/">功能性调理</Link></dt>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/qingrequhuo/">清热去火</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/jianfei/">减肥</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/qutan/">祛痰</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/wufa/">乌发</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/ziyinbushen/">滋阴补肾</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/jianpikaiwei/">健脾开胃</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/xiaohuabulang/">消化不良</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/qingrejiedu/">清热解毒</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/buyangzhuangyang/">补阳壮阳</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/gongnengxing/zengfei/">增肥</Link></dd>
                  </dl>
                </div><br />
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/">人群膳食</Link></dt>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/yunfu/">孕妇</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/laoren/">老人</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/chanfu/">产妇</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/rumu/">哺乳期</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/qingshaonian/">青少年</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/rouer/">幼儿</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/renqunshanshi/xuelingqi/">学龄期儿童</Link></dd>
                  </dl>
                </div>
                <div className="dwitem dwitem_half clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/">疾病调理</Link></dt>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/tangniaobing/">糖尿病</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/gaoxueya/">高血压</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/tongfeng/">痛风</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/weiyan/">胃炎</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/zhichuang/">痔疮</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/gengnianqi/">更年期</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/jibingtiaoli/jiakangxian/">甲状腺</Link></dd>
                  </dl>
                </div><br />
                <div className="dwitem clearfix">
                  <dl className="clearfix">
                    <dt><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/">脏腑调理</Link></dt>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/ganmao/">感冒</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/shentiaoli/">补肾</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/yangweizaoxie/">阳痿早泄</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/buxue/">补血</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/bianmi/">便秘</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/fuxie/">腹泻</Link></dd>
                    <dd><Link to="https://www.meishij.net/yaoshanshiliao/zangfu/houxuehuayu/">活血化瘀</Link></dd>
                  </dl>
                </div>
                <div className="bgitem">
                </div>
              </div>
            </div>
            </li>
            <li><Link to="#" className="a1">美食菜单</Link></li>
            <li><Link to="/j/jiajuguan" className="a1">家居馆</Link></li>
            <li><Link to="#" className="a1"><img src="https://s1.st.meishij.net/p2/20160909/20160909164810_443.png" alt=""/>美食达人</Link></li>
            <li><Link to="#" className="a1">菜谱视频</Link></li>
            <li><Link to="#" className="a1">产品下载</Link></li>
          </ul>
        </div>   
      </nav>
    )
  }
}

export default Comp
