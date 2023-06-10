import { FETCH_SPENDINGS, CREATE_SPENDING, DELETE_SPENDING, UPDATE_SPENDING } from "../actions/types"

const spendingReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_SPENDINGS:
            return action.payload
        case CREATE_SPENDING:
            return [...state, action.payload]
        case DELETE_SPENDING:
            return [...state.filter(spending => spending.id !== action.payload)]
        case UPDATE_SPENDING:
            let spendings = state

            for (let i = 0; i < spendings.length; i++) {
                if(spendings[i].id === action.payload.id){
                    spendings[i] = action.payload
                    break;
                }
            }

            return spendings
        default:
            return state
    }
}

export default spendingReducer