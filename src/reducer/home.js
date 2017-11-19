import {handleActions} from 'redux-actions'

export const home=handleActions({
    RECEIVE_CAR:(state,action)=>({
        ...state,
        data:action.payload
    })
},{
    data:[]
})

export const news=handleActions({
    REECIVE_NEWS:(state,action)=>({
        ...state,
        data:action.payload
    })
},{
    data:[]
})