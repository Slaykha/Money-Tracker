import React from 'react';
import ListHead from './ListHead';
import ListItem from './ListItem';

const SpendingList = (props) => {
    const{
        spendingArray
    }=props

    console.log(spendingArray, "array")
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