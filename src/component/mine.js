import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {m} from '../config/m'

import mineboy from '../assets/images/mine-boy.jpg'
import '../assets/css/mine.css'

class Mine extends Component {
    render() {
        return (
            <div className={"mineWrap "+m}>
                <div className="header">
                    <Link to="/home" className="left">
                        <i className="iconfont">&#xe607;</i>
                    </Link>
                    <a href="#" className="right">
                        <i className="iconfont">&#xe6da;</i>
                    </a>
                </div>
                <div className="person">
                    <div className="person-top">
                        <div className="top-after">
                            <div className="person-logo">
                                <img src={mineboy} />
                                <span></span>
                            </div>
                            <div className="person-msg">
                                <h4>
                                    <span>捞粉儿 &nbsp;&nbsp;</span>
                                    <i className="iconfont">&#xe65e;</i>
                                </h4>
                                <p className="p1">会员卡号:15211596529  </p>
                                <p className="p2">未添加任何标签</p>
                            </div>
                        </div>
                        <div className="bg"></div>
                        <div className="person-bg"></div>
                    </div>
                    <div className="person-bottom"></div>

                </div>
                <div className="main">
                    <ul >
                        <li>
                            <router-link to="/mine/myorder">
                                <i className="iconfont icon1">&#xe6c9;</i>
                                <span>我的订单</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </router-link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe673;</i>
                                <span>我的积分</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe60e;</i>
                                <span>我的卡卷</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li style={{marginBottom:0.08+ 'rem'}}>
                            <a href="#">
                                <i className="iconfont icon1">&#xe65b;</i>
                                <span>免密支付</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li style={{marginBottom:0.08+ 'rem'}}>
                            <a href="#">
                                <i className="iconfont icon1">&#xe608;</i>
                                <span>积分抽奖</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe64f;</i>
                                <span>海捞卡</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li style={{marginBottom:0.08+ 'rem'}}>
                            <a href="#">
                                <i className="iconfont icon1">&#xe64f;</i>
                                <span>AR相机</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe67c;</i>
                                <span>Hi说说</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe633;</i>
                                <span>Hi地盘</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li><li>
                            <a href="#">
                                <i className="iconfont icon1">&#xe604;</i>
                                <span>Hi游戏</span>
                                <i className="iconfont icon2">&#xe60c;</i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Mine