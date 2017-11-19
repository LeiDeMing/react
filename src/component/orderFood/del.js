import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {m} from '../../config/m'

class Del extends Component {
    componentDidMount(){
        // console.log(this.props);
    }
    render() {
        return (
            <div className={m}>
                <div className="num">
                    <a className="numT">
                        <span>用餐人数</span>
                        <span><em>1</em><i className="iconfont">&#xe60c;</i></span>
                    </a>
                    <Link className="numB" to={'/mine/'+this.props.match.params.id}>
                        <span><i className="iconfont">&#xe61f;</i>请填写收货地址</span>
                        <i className="iconfont">&#xe60c;</i>
                    </Link>
                </div>
            </div >
        )
    }
}

export default Del