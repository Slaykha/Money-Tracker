const axios = require("axios").default;

const createSpendingApi = async (ENDPOINT ,userId, data) => {
    const resp = await axios.post(`${ENDPOINT}/spending/${userId}`,
        {
            money: data.money,
            currency: data.currency,
            spendingType: data.type
        },
    )

    return resp.status === 201 ? resp.data : false
    

}

const fetchSpendingsApi = async (ENDPOINT, userId) => {
    const resp = await axios.get(`${ENDPOINT}/spendings/${userId}`)

    return resp.status === 200 ? resp : false

}
module.exports={
    createSpendingApi,
    fetchSpendingsApi
}