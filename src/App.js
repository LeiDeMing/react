import React, { Component, PropTypes } from 'react'
import { Route } from 'react-router-dom'

import 'antd/dist/antd.css'


import Goods from './component/orderFood/goods'
import Home from './component/home'
import Shop from './component/shop'
import Detail from './component/shop/detail'
import Delivery from './component/orderFood/delivery'
import Address from './component/orderFood/address'

import Mine from './component/mine'

import { StyleSheet, css } from 'aphrodite';
import { swap } from 'react-magic';

const styles = StyleSheet.create({
    magic: {
        animationName: swap,
        animationDuration: '1s'
    }
});

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path='/shop' component={Shop} />
                
                <Route path='/shop/detail/:id' component={Detail} />
                <Route exact path='/shop/goods/:id' component={Goods} />
                <Route path='/shop/goods/delivery' component={Delivery} />
                <Route path='/mine/:id' component={Address}></Route>

                <Route exact path='/mine' component={Mine} />

                <Route exact path='/' component={Home} />
                <Route exact path='/home' component={Home} />
            </div>
        );
    }
}

export default App;
