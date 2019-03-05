import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Comp extends Component {
  render () {
    return (
      <div className = "f-c">
        <dl className="friend_link clearfix">
          <dt>友情链接</dt>
              <dd><Link target="_blank" to="http://www.meishij.net" title="美食">美食</Link></dd>
              <dd><Link target="_blank" to="http://tizhi.meishi.cc" title="体质测试">体质测试</Link></dd>
              <dd><Link target="_blank" to="http://sj.meishi.cc/app.php?to=guanjia" title="伊特">伊特</Link></dd>
              <dd><Link target="_blank" to="http://www.9ku.com/ " title="9酷音乐网">9酷音乐网</Link></dd>
              <dd><Link target="_blank" to="http://www.yue365.com" title="365音乐网">365音乐网</Link></dd>
              <dd><Link target="_blank" to="http://www.mapbar.com/" title="图吧">图吧</Link></dd>
              <dd><Link target="_blank" to="http://baa.bitauto.com/" title="汽车论坛">汽车论坛</Link></dd>
              <dd><Link target="_blank" to="http://food.39.net" title="39健康饮食">39健康饮食</Link></dd>
              <dd><Link target="_blank" to="http://www.qqtn.com/ " title="QQ下载 ">QQ下载</Link></dd>
              <dd><Link target="_blank" to="http://www.meilele.com/" title="家具网">家具网</Link></dd>
              <dd><Link target="_blank" to="http://chihe.sohu.com" title="搜狐美食">搜狐美食</Link></dd>
              <dd><Link target="_blank" to="http://www.meishichina.com" title="美食天下">美食天下</Link></dd>
              <dd><Link target="_blank" to="http://www.zhms.cn" title="中华美食网">中华美食网</Link></dd>
              <dd><Link target="_blank" to="http://hefei.8684.cn/" title="合肥公交网">合肥公交网</Link></dd>
              <dd><Link target="_blank" to="http://www.canyin88.com/" title="红餐微杂志">红餐微杂志</Link></dd>
              <dd><Link target="_blank" to="http://bj.fang.com" title="北京搜房网">北京搜房网</Link></dd>
              <dd><Link target="_blank" to="https://www.meishij.net/siteinfo/links.php" title="更多友情链接">更多友情链接</Link></dd>
          </dl>
      </div>
    )
  }
}

export default Comp
