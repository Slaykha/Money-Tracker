import { fetchSpendingsApi } from "../api/spendingApi"
import { ENDPOINT } from "../App"
import { FETCH_SPENDINGS } from "./types"

export const fetchSpendings = (userId) => async (
    dispatch
) => {
    const resp = await fetchSpendingsApi(ENDPOINT, userId)
        dispatch({
            type: FETCH_SPENDINGS,
            payload: resp.data
        })
}