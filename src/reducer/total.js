import { FETCH_TODAYS_TOTAL } from "../actions/types";

const totalReducer = (state = 0, action) => {
    switch (action.type) {
        case FETCH_TODAYS_TOTAL:
            return action.payload
        default:
            return state
    }
};

export default totalReducer;