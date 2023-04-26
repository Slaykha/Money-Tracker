import { GetUserApi, UpdateUserDailyLimitApi } from "../api/authApi"
import { ENDPOINT } from "../App"
import { FETCH_USER, UPDATE_USER_DAILY_LIMIT } from "./types"

export const fetchUser = () => async (
    dispatch
) => {
    const resp = await GetUserApi(ENDPOINT)
        dispatch({
            type: FETCH_USER,
            payload: resp.data
        })
}

export const UpdateUserDailyLimit = (userId, dailyLimit) => async (dispatch) => {
    const resp = await UpdateUserDailyLimitApi(ENDPOINT, userId, dailyLimit)
        if(resp)
            dispatch({
                type:UPDATE_USER_DAILY_LIMIT,
                payload: resp
            })
}