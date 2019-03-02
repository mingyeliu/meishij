import React, { Component } from 'react'
import { Breadcrumb } from 'element-react'
import 'element-theme-default';
import '@/components/healthy/style.scss';
import { Link } from 'react-router-dom';
import HealthNav from '@/components/healthy/healthNav';
import HealthList from '@/components/healthy/healthList';
import HealthNew from '@/components/healthy/healthNew';

class Comp extends Component {
  render () {
    return (
      <div className = "content">
        <div className="margin">
          <div className="top">
            <Link to="/home">
              <img src="@/images/timer.png" alt="时间" />
              <span>工作、运动、学习、听音乐，是养脾的最佳时间，吃苦味和黄色食物有益脾经。</span>
            </Link>
          </div>
          <HealthNav />
          <div className="title">
            <h1>合理的饮食，是身体健康的第一要素</h1>
            <Breadcrumb separator="|">
              <Breadcrumb.Item>最新</Breadcrumb.Item>
              <Breadcrumb.Item>最热</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <HealthList />
          <HealthNew />
        </div>
      </div>
    )
  }
}

export default Comp
