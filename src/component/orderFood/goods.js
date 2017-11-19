import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../action/goods'
import * as sa from '../../action/shop'
import '../../assets/css/menu.css'
import {m} from '../../config/m'

class Goods extends Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getGoods());
        // dispatch(sa.getDetail())
    }
    render() {
        return (
            <div>
                <header >
                    <div className="headerL">
                        <Link to={'/shop/detail/' + this.props.match.params.id}><i className="iconfont">&#xe607;</i></Link>
                        <a href="javascript:;"><i className="iconfont">&#xe61f;</i><span>深圳市</span><i className="iconfont">&#xe611;</i></a>
                    </div>
                    <a href="">外送须知</a>
                </header>
                <div className={"leftSide "+m}>
                    <ul >
                        {
                            this.props.goods.map((ele, inx) => (
                                <li key={inx}>{ele.title}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className={"rightContent "+m} >
                    <div className="listBox">
                        <div className="g">
                            {
                                this.props.goods.map((ele, inx) => (
                                    ele.foods.map((val, key) => (
                                        <div  >
                                            <div className="left">
                                                <img src={'http://localhost:4338/' + val.pic} alt="" />
                                            </div>
                                            <div className="right">
                                                <div className="rightT">
                                                    <h3>{val.title}</h3>
                                                    <p>{val.price}<em>/锅</em></p>
                                                </div>
                                                <div className="rightB">
                                                    <em >
                                                        <i className="iconfont" >&#xe7f3;</i>

                                                        <span ></span>
                                                    </em>
                                                    <i className="iconfont" >&#xe60d;</i>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ))
                            }
                        </div>
                        <div style={{height:80+'px'}}></div>
                    </div>
                </div>
                <footer >
                    <a href=""><em>0</em><i className="iconfont">&#xe605;</i><span>¥</span></a>
                    <Link to={'/shop/goods/delivery/del/'+this.props.match.params.id}>去结算</Link>
                </footer>
            </div >
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    goods: state.goods.data,
    d:state.detail.data
});

export default connect(mapStateToProps)(Goods);