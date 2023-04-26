const axios = require("axios").default;

const RegisterApi = async (ENDPOINT, data) => {
    console.log(data)
    const resp = await axios.post(`${ENDPOINT}/user/register`,
        data,
        {withCredentials: true},
    )

    return resp.status === 201 ? resp : false
    
}

const LoginApi = async (ENDPOINT, data) => {
    const resp = await axios.post(`${ENDPOINT}/user/login`,
    {
        email: data.email,
        password: data.password
    },
    {withCredentials: true},

    )

    return resp.status === 200 ? resp : false
}

const LogoutApi = async (ENDPOINT) => {
    const resp = await axios.post(`${ENDPOINT}/user/logout`,
    {withCredentials: true},
    )

    return resp.status === 200 ? resp : false
}

const GetUserApi = async (ENDPOINT) => {
    const resp = await axios.get(`${ENDPOINT}/user/token`,
    {withCredentials: true},
    )

    return resp.status === 200 ? resp : false
}

const UpdateUserDailyLimitApi = async (ENDPOINT, userId, dailyLimit) => {
    const resp = await axios.put(`${ENDPOINT}/user/${userId}/dailyLimit`,
    dailyLimit
    )

    return resp.status === 200 ? resp.data : false
}
module.exports={
    RegisterApi,
    LoginApi,
    LogoutApi,
    GetUserApi,
    UpdateUserDailyLimitApi
}