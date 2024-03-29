import { fetchSpendingsApi, getTodaysTotalApi } from "../api/spendingApi"
import { ENDPOINT } from "../App"
import { CREATE_SPENDING, FETCH_SPENDINGS, DELETE_SPENDING, FETCH_TODAYS_TOTAL, UPDATE_SPENDING} from "./types"

export const fetchSpendings = (userId, date, type, moneySort, dateSort) => async (
    dispatch
) => {
    const resp = await fetchSpendingsApi(ENDPOINT, userId, date, type, moneySort, dateSort)
        if (resp)
            dispatch({
                type: FETCH_SPENDINGS,
                payload: resp.data
            })
}

export const createSpending = (resp) => async (dispatch) => {
    dispatch({
        type: CREATE_SPENDING,
        payload: resp
    })
}

export const deleteSpending = (spendingId) => dispatch => {
    dispatch({
        type: DELETE_SPENDING,
        payload: spendingId
    })
}

export const fetchTodaysTotal = (userId) => async (dispatch) => {
    const resp = await getTodaysTotalApi(ENDPOINT, userId)
    if(resp){
        dispatch({
            type: FETCH_TODAYS_TOTAL,
            payload: resp.data
        })
    }
}

export const updateSpending = (resp) => async (dispatch) => {
    dispatch({
        type: UPDATE_SPENDING,
        payload: resp
    })
}