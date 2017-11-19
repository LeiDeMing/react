import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../action/shop'
import {url} from '../../config/url'

import '../../assets/css/shopxp.css'
import {m} from '../../config/m'


class Detail extends Component {
    componentDidMount(){
        let dispatch=this.props.dispatch;
        dispatch(actions.getDetail(this.props.match.params))
    }
    render() {
        return (
            <div className={"detailWrap "+m}>
                <div className="header">
                    <Link className="left" to="/shop">
                        <i className="iconfont">&#xe607;</i>
                    </Link>
                    <a href="#" className="right">
                        <i className="iconfont">&#xe696;</i>
                    </a>
                </div>
                <div className="focus">
                    <ul>
                        <li>
                            <img src={url+this.props.d.face}/>
                        </li>
                    </ul>
                    <span className="iconfont">&#xe61f;</span>
                </div>
                <div className="main">
                    <ul>
                        <li className="li1">
                            <h3>{this.props.d.title}</h3>
                            <p className="comment">
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="num">5</i>

                            </p>
                            <p className="address">
                                <i className="iconfont">&#xe61f;</i>
                                {this.props.d.address}
                            </p>
                        </li>
                        <li className="li2">
                            <p>
                                <span>
                                    <i className="iconfont">&#xe633;</i>
                                </span>
                                牌号
						<router-link to=""></router-link>
                            </p>
                            <p>
                                <span>
                                    <i className="iconfont">&#xe82b;</i>
                                </span>
                                外卖
						<Link to={'/shop/goods/'+this.props.match.params.id}></Link>
                            </p>
                            <p>
                                <span>
                                    <i className="iconfont">&#xe69f;</i>
                                </span>
                                订餐
							<router-link ></router-link>
                            </p>
                            <p>
                                <span>
                                    <i className="iconfont">&#xe600;</i>
                                </span>
                                菜单
					</p>
                        </li>
                        <li className="li3">
                            <p className="p1"></p>
                            <p className="p2">点击展开</p>
                        </li>
                    </ul>
                </div >
                <div className="tel-address">
                    <p className="tel">
                        <i className="iconfont">&#xe601;</i>
                        <a href="#">0755-23890492</a>

                    </p>
                    <p className="address">
                        <i className="iconfont">&#xe82b;</i>
                        {this.props.d.address}
                    </p>
                </div>
                <div className="footer-comment">
                    <p className="footer-comment-title">
                        评论
				<span>15</span>
                    </p>
                    <div className="footer-msg">
                        <div className="left">
                            <i className="iconfont">&#xe620;</i>
                        </div>
                        <div className="right">
                            <p className="food-message-title">
                                <span>周哥</span>
                                <span className="mui-pull-right">2017-10-29 10:29:05</span>
                            </p>
                            <p className="food-message-score" id="food_message_score">
                                评分
						<i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                                <i className="iconfont">&#xe618;</i>
                            </p>
                            <p className="food-message-content">服务五星，很满意</p>
                            <div className="bottom">
                                <span className="span1">
                                    <i className="iconfont">&#xe639;</i>
                                    0
						</span>

                                <span className="span2">
                                    <i className="iconfont">&#xe634;</i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button>
                        <i className="iconfont">&#xe612;</i>
                        写评论
			        </button>
                </div>
            </div >
        )
    }
}

const mapStateToProps=(state,ownProps)=>({
    d:state.detail.data
})

export default connect(mapStateToProps)(Detail);