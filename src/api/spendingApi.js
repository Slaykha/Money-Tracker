const axios = require("axios").default;

const createSpendingApi = async (ENDPOINT ,userId, data) => {
    const resp = await axios.post(`${ENDPOINT}/spending/${userId}`,
        {
            money: data.money,
            currency: data.currency,
            spendingType: data.type
        },
    )

    return resp.status == 201 ? resp.data : false
    

}

module.exports={
    createSpendingApi
}