import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../action/shop'
import '../assets/css/showlist.css'
import {url} from '../config/url.js'

import {m} from '../config/m'



class Shop extends Component {
    componentDidMount() {
        let dispatch = this.props.dispatch;
        dispatch(actions.getShop());
    }
    render() {
        return (
            <div >
                <div className="orderFoodWrap" >
                    <div className={"nav "+m}>
                        <div className="back">
                            <Link to="/home">b</Link>
                        </div>
                        <div className="dizhi"></div>
                        <div className="wen">深圳市</div>
                        <div className="jian"></div>
                        <div className="search">
                            <input type="text" value="" placeholder="请输入门店名称" />
                            <div className="fdj"></div>
                        </div>
                    </div>
                    <div  className={"listWrap "+m}>
                        {
                            this.props.shopList.map((val, inx) => ((
                                < div className="list" key={inx}>
                                    <dl>
                                        <dd><img src={url + val.face} alt='' /></dd>
                                        <dt><span className="tit">
                                            {val.username}
                                        </span>
                                            <span className="dizhi">
                                                {val.address}
                                            </span>
                                            <span className="jx">6.24km</span>
                                            <span className="dc"><Link to='/'>订餐</Link></span>
                                        </dt>
                                    </dl>
                                    <Link to={'/shop/detail/'+val._id}></Link>
                                </div>
                            )))
                        }
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    shopList: state.shop.data
})

export default connect(mapStateToProps)(Shop)