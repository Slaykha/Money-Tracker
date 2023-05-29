import {combineReducers} from "redux";
import spendingReducer from "./spendingReducer";
import userReducer from "./userReducer";
import totalReducer from "./total";

const reducers = combineReducers({
    user: userReducer,
    spendings: spendingReducer,
    todaysTotal: totalReducer
});

export default reducers;