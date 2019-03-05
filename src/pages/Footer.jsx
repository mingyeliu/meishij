import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Friend from '@/components/footer/foot-c'
class Comp extends Component {
  
  render () {
    return (
      <footer className = "footer">
        <div className = "margin">
          <div className = "f-t">
            <div className = "f-t-l"></div>
            <div className = "f-t-r">
              <ul>
                <li className="sina">
                  <Link className="img" target="_blank" to="https://e.weibo.com/meishij">
                    <span>关注：49万</span>
                  </Link>
                  <p>
                    <Link target="_blank" to="https://e.weibo.com/meishij">
                    点击进入<br />美食杰官方微博
                    </Link>
                  </p>
                </li>
                <li className="tengxun">
                  <Link className="img" target="_blank" to="https://user.qzone.qq.com/613171717">
                    <span>关注：10.9万</span>
                  </Link>
                  <p>
                    <Link target="_blank" to="https://user.qzone.qq.com/613171717">
                    点击进入<br />美食杰QQ空间
                    </Link>
                  </p>
                </li>
                <li className="weixin">
                  <Link target="_blank" to="https://sj.meishi.cc/" className="img"></Link>
                  <p>
                    <Link target="_blank" to="https://sj.meishi.cc/">扫描二维码添加<br />美食杰为微信好友</Link>
                  </p>
                </li>
                <li className="download">
                  <Link target="_blank" to="https://sj.meishi.cc/" className="img"></Link>
                  <p>
                  <Link target="_blank" to="https://sj.meishi.cc/">扫描二维码下载<br />美食杰手机客户端</Link>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <Friend />
          <div className = "f-b">
            <div className="footer_con3">
              <ul className="clearfix">
                <li><Link target="_blank" to="https://j.meishi.cc/" title="公司简介">公司简介</Link></li>
                <li><Link target="_blank" to="https://j.meishi.cc/aboutus.html" title="关于我们">关于我们</Link></li>
                <li><Link target="_blank" to="https://j.meishi.cc/download.html" title="产品下载">产品下载</Link></li>
                <li><Link target="_blank" to="https://j.meishi.cc/joinus.html" title="加入我们">加入我们</Link></li>
                <li><Link target="_blank" to="https://j.meishi.cc/contactus.html" title="联系我们">联系我们</Link></li>		
                <li><Link target="_blank" to="https://j.meishi.cc/contactus.html" title="商务合作">商务合作</Link></li>
                <li><Link target="_blank" to="https://www.meishij.net/siteinfo/index.php#mzsm" title="用户协议">用户协议</Link></li>
                <li><Link target="_blank" to="https://www.meishij.net/siteinfo/maps.php" title="网站地图">网站地图</Link></li>
                <li><Link target="_blank" to="https://www.meishij.net/siteinfo/links.php" title="友情链接">友情链接</Link></li>			
              </ul>
              <p>
                <Link target="_blank" to="https://www.miibeian.gov.cn" className="gray_a">京ICP备14030359号</Link>
                <Link target="_blank" to="https://beian.gov.cn/" className="gray_a">
                <img src="https://s1.st.meishij.net/p2/20180208/20180208111357_93713.png" alt="" />京公网安备11010802026928
                </Link>
                  Copyright © 2003-2019 MEISHIJ CO.,LTD.
                </p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Comp
