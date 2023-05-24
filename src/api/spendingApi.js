const axios = require("axios").default;

const createSpendingApi = async (ENDPOINT ,userId, data) => {
    const resp = await axios.post(`${ENDPOINT}/spending/${userId}`,
        {
            money: data.money,
            spendingType: data.type,
            spendingDate: data.date
        },
    )

    return resp.status === 201 ? resp.data : false
    

}

const fetchSpendingsApi = async (ENDPOINT, userId) => {
    const resp = await axios.get(`${ENDPOINT}/spendings/${userId}`)

    return resp.status === 200 ? resp : false

}

const deleteSpendingApi = async (ENDPOINT, spendingId) => {
    const resp = await axios.delete(`${ENDPOINT}/spending/${spendingId}`)

    return resp.status === 200 ? true : false
}

module.exports={
    createSpendingApi,
    fetchSpendingsApi,
    deleteSpendingApi
}