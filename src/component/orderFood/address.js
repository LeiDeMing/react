import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {m} from '../../config/m'

import '../../assets/css/Address.css'

class Address extends Component {
    render() {
        return (
            <div className={"addressO "+m}>
                <div className="headerA">
                    <Link className="cha" to={'/shop/goods/delivery/del/'+this.props.match.params.id}></Link>
                    <div className="wen">订餐</div>
                    <div className="cai"></div>
                </div>
                <div className="mainLiu">
                    <ul>
                        <li>姓名<input type='text'  name="name" placeholder="请输入姓名" />
                            <span className="sex"><input type="radio" value="1" name="sex" />男
				    <input type="radio" value="0" name="sex" />女</span>
                        </li>
                        <li>手机号<input type='text'  placeholder="请输入您的手机号码" name="tel" /></li>
                        <li>外送地址
					<span className="xz">选择配送地址</span>

                        </li>
                        <li>详情地址<input type='text'  placeholder="16号 3单元" name="address" /></li>
                    </ul>
                    <div className="qd">
                        <input type="submit" value="提交" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Address