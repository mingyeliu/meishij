import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Tabs } from 'element-react'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    return (
      <div className="tabHealthy">
        <Tabs type="border-card" activeName="2">
          <Tabs.Pane label='我的体质（未开放）' name="1" disabled></Tabs.Pane>
          <Tabs.Pane label="饮食健康" name="2">
            <dl className="w200">
              <dt>饮食咨询</dt>
              <dd><Link to="#">新鲜资讯</Link></dd>
              <dd><Link to="#">食品安全</Link></dd>
            </dl>
            <dl className="w570">
              <dt>饮食文化</dt>
              <dd><Link to="#">美食典故</Link></dd>
              <dd><Link to="#">茶文化</Link></dd>
              <dd><Link to="#">外国饮食文化</Link></dd>
              <dd><Link to="#">酒文化</Link></dd>
              <dd><Link to="#">中西餐礼仪</Link></dd>
            </dl>
            <dl className="w210">
              <dt>专区</dt>
              <dd><Link to="#">孕妇专区</Link></dd>
            </dl>
            <dl>
              <dt>健康指南</dt>
              <dd><Link to="#">饮食小常识</Link></dd>
              <dd><Link to="#">饮食禁忌</Link></dd>
            </dl>
          </Tabs.Pane>
          <Tabs.Pane label="人群膳食" name="3">
            <dl>
              <dt>人群膳食</dt>
              <dd><Link to="#">孕妇</Link></dd>
              <dd><Link to="#">产妇</Link></dd>
              <dd><Link to="#">幼儿</Link></dd>
              <dd><Link to="#">哺乳期</Link></dd>
              <dd><Link to="#">婴儿</Link></dd>
              <dd><Link to="#">学龄前儿童</Link></dd>
              <dd><Link to="#">学龄期儿童</Link></dd>
              <dd><Link to="#">青少年</Link></dd>
              <dd><Link to="#">老人</Link></dd>
              <dd><Link to="#">高温环境作业人群</Link></dd>
              <dd><Link to="#">低温环境作业人群</Link></dd>
              <dd><Link to="#">接触电离辐射人员</Link></dd>
              <dd><Link to="#">接触化学毒素人员</Link></dd>
              <dd><Link to="#">运动员</Link></dd>
              <dd><Link to="#">围孕期</Link></dd>
            </dl>
          </Tabs.Pane>
          <Tabs.Pane label="疾病调理" name="4">
            <dl>
              <dt>人群膳食</dt>
              <dd><Link to="#">孕妇</Link></dd>
              <dd><Link to="#">产妇</Link></dd>
              <dd><Link to="#">幼儿</Link></dd>
              <dd><Link to="#">哺乳期</Link></dd>
              <dd><Link to="#">婴儿</Link></dd>
              <dd><Link to="#">学龄前儿童</Link></dd>
              <dd><Link to="#">学龄期儿童</Link></dd>
              <dd><Link to="#">青少年</Link></dd>
              <dd><Link to="#">老人</Link></dd>
              <dd><Link to="#">高温环境作业人群</Link></dd>
              <dd><Link to="#">低温环境作业人群</Link></dd>
              <dd><Link to="#">接触电离辐射人员</Link></dd>
              <dd><Link to="#">接触化学毒素人员</Link></dd>
              <dd><Link to="#">运动员</Link></dd>
              <dd><Link to="#">围孕期</Link></dd>
            </dl>
          </Tabs.Pane>
          <Tabs.Pane label="功能性调理" name="5">
            <dl>
              <dt>人群膳食</dt>
              <dd><Link to="#">孕妇</Link></dd>
              <dd><Link to="#">产妇</Link></dd>
              <dd><Link to="#">幼儿</Link></dd>
              <dd><Link to="#">哺乳期</Link></dd>
              <dd><Link to="#">婴儿</Link></dd>
              <dd><Link to="#">学龄前儿童</Link></dd>
              <dd><Link to="#">学龄期儿童</Link></dd>
              <dd><Link to="#">青少年</Link></dd>
              <dd><Link to="#">老人</Link></dd>
              <dd><Link to="#">高温环境作业人群</Link></dd>
              <dd><Link to="#">低温环境作业人群</Link></dd>
              <dd><Link to="#">接触电离辐射人员</Link></dd>
              <dd><Link to="#">接触化学毒素人员</Link></dd>
              <dd><Link to="#">运动员</Link></dd>
              <dd><Link to="#">围孕期</Link></dd>
            </dl>
          </Tabs.Pane>
          <Tabs.Pane label="腑脏调理" name="6">
            <dl>
              <dt>人群膳食</dt>
              <dd><Link to="#">孕妇</Link></dd>
              <dd><Link to="#">产妇</Link></dd>
              <dd><Link to="#">幼儿</Link></dd>
              <dd><Link to="#">哺乳期</Link></dd>
              <dd><Link to="#">婴儿</Link></dd>
              <dd><Link to="#">学龄前儿童</Link></dd>
              <dd><Link to="#">学龄期儿童</Link></dd>
              <dd><Link to="#">青少年</Link></dd>
              <dd><Link to="#">老人</Link></dd>
              <dd><Link to="#">高温环境作业人群</Link></dd>
              <dd><Link to="#">低温环境作业人群</Link></dd>
              <dd><Link to="#">接触电离辐射人员</Link></dd>
              <dd><Link to="#">接触化学毒素人员</Link></dd>
              <dd><Link to="#">运动员</Link></dd>
              <dd><Link to="#">围孕期</Link></dd>
            </dl>
          </Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Comp
