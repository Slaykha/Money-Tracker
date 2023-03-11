import { FETCH_SPENDINGS } from "../actions/types"

const spendingReducer = (state = {}, action) => {
    switch(action.type){
        case FETCH_SPENDINGS:
            return {state: action.payload}

        default:
            return state
    }
}

export default spendingReducer