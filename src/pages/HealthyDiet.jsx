import React, { Component } from 'react'
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
          <HealthList />
          <HealthNew />
        </div>
      </div>
    )
  }
}

export default Comp
