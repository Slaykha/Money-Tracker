import { FETCH_SPENDINGS, CREATE_SPENDING } from "../actions/types"

const spendingReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_SPENDINGS:
            return action.payload
        case CREATE_SPENDING:
            return [...state, action.payload]
        default:
            return state
    }
}

export default spendingReducer