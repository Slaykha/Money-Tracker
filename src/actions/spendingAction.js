import { createSpendingApi, fetchSpendingsApi } from "../api/spendingApi"
import { ENDPOINT } from "../App"
import { CREATE_SPENDING, FETCH_SPENDINGS, DELETE_SPENDING} from "./types"

export const fetchSpendings = (userId) => async (
    dispatch
) => {
    const resp = await fetchSpendingsApi(ENDPOINT, userId)
        dispatch({
            type: FETCH_SPENDINGS,
            payload: resp.data
        })
}

export const createSpending = (userId, spending) => async (dispatch) => {
    const resp = await createSpendingApi(ENDPOINT, userId, spending)
        if(resp){
            dispatch({
                type: CREATE_SPENDING,
                payload: resp
            })
        }
}

export const deleteSpending = (spendingId) => dispatch => {
    console.log(spendingId)
    dispatch({
        type: DELETE_SPENDING,
        payload: spendingId
    })
}