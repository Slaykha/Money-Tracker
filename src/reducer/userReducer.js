import { FETCH_USER, UPDATE_USER_DAILY_LIMIT } from "../actions/types";

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload
        case UPDATE_USER_DAILY_LIMIT:
            return action.payload
        default:
            return state
    }
};

export default userReducer;