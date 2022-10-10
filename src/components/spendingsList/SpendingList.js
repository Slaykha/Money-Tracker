import React, { useEffect } from 'react';
import { fetchSpendingsApi } from '../../api/spendingApi';
import ListHead from './ListHead';
import ListItem from './ListItem';
import { ENDPOINT } from "../../App";

const SpendingList = (props) => {
    const{
        spendingArray,
        setSpendingArray
    }=props


    useEffect(() => {
        getSepndings()
    }, [])

    const getSepndings = async () => {
        try {
            const response = await fetchSpendingsApi(ENDPOINT, "05647be3")
            console.log(response.data)

            setSpendingArray(response.data)
        } catch (error) {
            console.info(error)
        } 
    }
    
    console.log(spendingArray, "s")
    return (
        <div>
            <ListHead/>
            {spendingArray && spendingArray.map((spending) => (
                <ListItem
                    spending={spending}
                />
            ))}
            
        </div>
    );
};

export default SpendingList;