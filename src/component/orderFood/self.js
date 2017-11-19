import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {m} from '../../config/m'

class Self extends Component {
    render() {
        return (
            <div className={m}>
                <div className="shopSite">
                    <a href="" className="foodTitle">
                        <span>门店选择</span>
                        <span>请选择门店<i className="iconfont">&#xe60c;</i></span>
                    </a>
                    <div>
                        <span>姓名</span>
                        <input type="text" placeholder="请输入您的姓名" />
                    </div>
                    <div>
                        <span>手机号</span>
                        <input type="text" placeholder="请输入您的手机号" />
                    </div>
                </div>
            </div>
        )
    }
} 

export default Self