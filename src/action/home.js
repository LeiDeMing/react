import {createAction} from 'redux-actions';
import {url} from '../config/url'
import fetchJsonp from 'fetch-jsonp'

const urlCar=url+'api/focus';
const urlNews=url+'api/news';
const receiveCar=createAction('RECEIVE_CAR');
const receiveNews=createAction('REECIVE_NEWS');


const fetchCar=()=>{
    return new Promise((resolve,reject)=>{
        if(resolve){
            fetchJsonp(urlCar)
            .then((response)=>(
                response.json()
            ))
            .then((json)=>{
                resolve(json.result);
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

const fetchNews=()=>{
    return new Promise((resolve,reject)=>{
        if(resolve){
            fetchJsonp(urlNews)
            .then((response)=>(
                response.json()
            ))
            .then((json)=>{
                resolve(json.result);
            })
            .catch((ex)=>{
                console.log('parsing failed', ex);
            })
        }else{
            reject(()=>{
                console.log('parse error');
            })
        }
    })
}

export const getCar=()=>async dispatch=>{
    let car=await fetchCar();
    dispatch(receiveCar(car));
}

export const getNews=()=>async dispatch=>{
    let news=await fetchNews();
    dispatch(receiveNews(news))
}



