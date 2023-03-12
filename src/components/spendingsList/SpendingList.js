import React, { useEffect } from 'react';
import { fetchSpendingsApi } from '../../api/spendingApi';
import ListHead from './ListHead';
import ListItem from './ListItem';
import { ENDPOINT } from "../../App";
import { connect } from 'react-redux';

const SpendingList = (props) => {
    const{
        spendingArray,
        setSpendingArray,
        userId,
        spendings
    }=props


    /* useEffect(() => {
        getSepndings()
    }, [])

    const getSepndings = async () => {
        try {
            const response = await fetchSpendingsApi(ENDPOINT, userId)

            setSpendingArray(response.data)
        } catch (error) {
            console.info(error)
        } 
    } */
    
    return (
        <div>
            <ListHead/>
            {spendings && spendings.map((spending) => (
                <ListItem
                    spending={spending}
                />
            ))}
            
        </div>
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.user.id,
    spendings: state.spendings
});

const mapDispatchToProps = (dispatch) => ({
   
});

export default connect(mapStateToProps,) (SpendingList);
