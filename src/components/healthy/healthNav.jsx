import React, { Component } from 'react'
import { Tabs } from 'element-react'

class Comp extends Component {
  // constructor (props) {
  //   super(props);
  // }
  render () {
    const label = <span>用户管理</span>
    return (
      <div className="tabHealthy">
        <Tabs type="border-card" activeName="1">
          <Tabs.Pane label={label} name="1">用户管理</Tabs.Pane>
          <Tabs.Pane label="配置管理" name="2">配置管理</Tabs.Pane>
          <Tabs.Pane label="角色管理" name="3">角色管理</Tabs.Pane>
          <Tabs.Pane label="定时补偿任务" name="4">定时补偿任务</Tabs.Pane>
        </Tabs>
      </div>
    )
  }
}

export default Comp
