import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'

import { Carousel } from 'antd';
import * as action from '../action/home'
import {url} from '../config/url'

import numeral from '../assets/images/numeral.png'
import meal from '../assets/images/meal.png'
import more from '../assets/images/more.png'
import my from '../assets/images/my.png'
import '../assets/css/home.css'
import '../assets/css/footer.css'

import {m} from '../config/m'

class Home extends Component {
    componentDidMount(){
        let dispatch=this.props.dispatch;
        dispatch(action.getCar());
        dispatch(action.getNews());
    }
    render() {
        return (
            <div className="homeWrap">
                <Carousel autoplay>
                    {
                        this.props.car.map((val,inx)=>((
                            <div key={inx}><img src={url+val.pic} alt="" /></div>
                        )))
                    }
                </Carousel>
                <div className={"home-list "+m}>
								<div className="home-list-left">
									<h5></h5>
									<p>【神回复】</p>
									<p className="home-list-icon">
										<span><img />5</span>
										<span><img />2</span>
										<span>2017-10-28</span>
									</p>
								</div>
								<div className="home-list-right">
									<img  />
								</div>
							</div>
                <ul className={"home-footer "+m}>
                    <li><Link to='/home'><img src={numeral} alt='' /><span>首页</span></Link></li>
                    <li><Link to='/shop'><img src={meal} alt='' /><span>订餐</span></Link></li>
                    <li><Link to='/'><img src={more} alt='' /><span>更多</span></Link></li>
                    <li><Link to='/mine'><img src={my} alt='' /><span>我的</span></Link></li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>({
    car:state.home.data
})

export default connect(mapStateToProps)(Home);
