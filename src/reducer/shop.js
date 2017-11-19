import {handleActions} from 'redux-actions'

export const shop=handleActions({
    RECEIVE_SHOP:(state,action)=>({
        ...state,
        data:action.payload
    })
},{
    data:[]
})

export const detail=handleActions({
    RECEIVE_DETAIL:(state,action)=>({
        ...state,
        data:action.payload
    })
},{
    data:[]
})
