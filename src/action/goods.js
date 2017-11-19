import {createAction} from 'redux-actions'
import {url} from '../config/url'
import fetchJsonp from 'fetch-jsonp'

const receiveGoods=createAction('RECEIVE_GOODS');
const uri=url+'api/goods';

const fetchData=()=>{
    return new Promise((resolve,reject)=>{
        if(resolve){
            fetchJsonp(uri)
            .then((response)=>(
                response.json()
            ))
            .then((json)=>{
                resolve(json.data)
            })
            .catch((ex)=>{
                console.log('parsing failed', ex);
            })
        }else{
            reject(()=>{
                console.error("url error");
            })
        }
    })
}

export const getGoods=()=>async dispatch=>{
    let goods=await fetchData();
    dispatch(receiveGoods(goods));
    
}
