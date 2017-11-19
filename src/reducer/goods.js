import {handleActions} from 'redux-actions'

export const goods=handleActions({
    RECEIVE_GOODS:(state,action)=>({
        ...state,
        data:action.payload
    })
},{
    data:[]
})

