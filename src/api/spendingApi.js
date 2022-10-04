import axios from 'axios'

const createSpendingApi = async (userId, data) => {
    const resp = await axios.post(`http://localhost:12345/spending/${userId}`,
        {
            money: data.money,
            currency: data.currency,
            spendingType: data.spendingType
        },
    )

    return resp.status == 201 ? resp.data : false
    

}

module.exports={
    createSpendingApi
}