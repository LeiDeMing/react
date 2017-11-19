import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../action/shop'
import {m} from '../../config/m'

import Self from './self'
import Del from './del'
import '../../assets/css/waisong-ziqu.css'



class Delivery extends Component {
    constructor(props){
        super(props);
        this.state={
            id:null
        }
    }
    componentDidMount(){
        let mId=this.props.location.pathname.split('/');
        this.setState({
            id:mId[mId.length-1]
        })
        let dispatch=this.props.dispatch;
    }
    render() {
        return (
            <div className={"deliveryWrap "+m}>
                <div className="header-wszy">
                    <Link to={'/shop/goods/'+this.state.id}><i className="iconfont">&#xe607;</i></Link>
                    <span>外送自取</span>
                    <a href="">外送须知</a>
                </div>
                <nav>
                    <Link to={`${this.props.match.url}/del/`+this.state.id}>外送</Link>
                    <Link to={`${this.props.match.url}/self/`+this.state.id}>自取</Link>
                </nav >

                <Route path={`${this.props.match.url}/del/:id`} component={Del}></Route>
                <Route path={`${this.props.match.url}/self/:id`} component={Self}></Route>
                <div className="food">
                    <div className="foodTitle">
                        <span>锅底</span>
                    </div>
                    <div className="foodContent">
                        <div className="fondList"  >
                            <span></span>
                            <span>x<em></em></span>
                            <span>¥<em></em></span>
                        </div>
                    </div>
                    <div className="foodTitle dish">
                        <span>菜品</span>
                    </div>
                    <div className="foodContent">
                        <div className="fondList" >
                            <span></span>
                            <span><em></em>份</span>
                            <span>¥<em></em></span>
                        </div>
                    </div>
                    <div className="foodTitle waisong commonHead" >
                        <span>外送费</span>
                        <span>¥<em>0</em></span>
                    </div>
                    <div className="foodTitle vip commonHead" >
                        <span>专人服务费</span>
                        <span>¥<em>0</em></span>
                    </div>
                </div >
                <div className="spacial">
                    <div className="foodTitle" >
                        <span>特殊需求</span>
                        <i className="iconfont">&#xe60c;</i>
                    </div>
                </div>
                <div className="bill">
                    <div className="foodTitle">
                        <span>发票信息</span>
                        <i className="iconfont">&#xe60c;</i>
                    </div>
                </div>
                <div className="other" id="other">
                    <div className="foodTitle">
                        <span>其他需求</span>
                    </div>
                    <div className="foodContent">
                        <div className="fondList">
                            <span>电磁炉</span>
                            <span><i className="iconfont">&#xe7f3;</i >0<i className="iconfont">&#xe60d;</i></span>
                        </div>
                        <div className="fondList">
                            <span>锅具</span>
                            <span><i className="iconfont">&#xe7f3;</i >0<i className="iconfont">&#xe60d;</i></span>
                        </div>
                    </div>
                    <div className="foodTitle fee">
                        <span >服务费</span>
                        <span >押金</span>
                        <span>¥<em>0</em></span>
                    </div>
                </div>
                <footer>
                    <a href="#">需支付¥<span></span></a>
                    <a href="#" >提交订单</a>
                </footer >
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>({
    sId:state.detail.data
})

export default connect(mapStateToProps)(Delivery)