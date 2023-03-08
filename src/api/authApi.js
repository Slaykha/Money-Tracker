const axios = require("axios").default;

const RegisterApi = async (ENDPOINT, data) => {
    const resp = await axios.post(`${ENDPOINT}/user/register`,
        {
            name: data.name,
            email: data.email,
            password: data.password
        },
    )

    return resp.status === 201 ? resp.data : false
    

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

module.exports={
    RegisterApi,
    LoginApi,
    LogoutApi,
    GetUserApi
}