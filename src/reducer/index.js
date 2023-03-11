import {combineReducers} from "redux";
import spendingReducer from "./spendingReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    user: userReducer,
    spendings: spendingReducer
});

export default reducers;