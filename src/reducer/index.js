import {combineReducers} from 'redux'
import {goods} from './goods'
import {shop,detail} from './shop'
import {home,news} from './home'

export const rootReducer =combineReducers({
    goods,
    shop,
    detail,
    home,
    news
});