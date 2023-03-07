import { GetUserApi } from "../api/authApi"
import { ENDPOINT } from "../App"
import { FETCH_USER } from "./types"

export const fetchUser = () => async (
    dispatch
) => {
    const resp = await GetUserApi(ENDPOINT)
        dispatch({
            type: FETCH_USER,
            payload: resp.data
        })
    
}