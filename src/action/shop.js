import { createAction } from 'redux-actions'
import { url } from '../config/url'
import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'

const receiveShop = createAction('RECEIVE_SHOP');
const receiveDetail = createAction('RECEIVE_DETAIL');
const uri = url + 'api/shop';
let shopMsg = null;

const fetchData = () => {
    return new Promise((resolve, reject) => {
        if (resolve) {
            fetchJsonp(uri)
                .then((response) => (
                    response.json()
                ))
                .then((json) => {
                    resolve(json.result);
                })
                .catch((ex) => {
                    console.log('parsing failed' + ex)
                })
        } else {
            reject(() => {
                console.error('shop action error');
            })
        }
    })
}

const fetchDetail = (param) => {
    return new Promise((resolve, reject) => {
        if (resolve) {
            axios.post(uri, { param })
                .then((response) => {
                    shopMsg = response.data.result;
                    resolve(response.data.result)
                })
                .catch((error) => {
                    console.log(error);
                })
        } else {
            reject(() => {
                console.log('detail action error');
            })
        }
    });
}
export const getShop = () => async dispatch => {
    let shopList = await fetchData();
    dispatch(receiveShop(shopList));
}

export const getDetail = (o) => async dispatch => {
    if (shopMsg === null) {
        let detail = await fetchDetail(o);
        shopMsg=detail;   
    }  
    dispatch(receiveDetail(shopMsg));
}



