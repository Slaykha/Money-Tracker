import { FETCH_SPENDINGS, CREATE_SPENDING, DELETE_SPENDING } from "../actions/types"

const spendingReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_SPENDINGS:
            return action.payload
        case CREATE_SPENDING:
            return [...state, action.payload]
        case DELETE_SPENDING:
            return [...state.filter(spending => spending.id !== action.payload)]
        default:
            return state
    }
}

export default spendingReducer