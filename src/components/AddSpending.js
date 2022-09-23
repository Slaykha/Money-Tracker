import { Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import AddSpendingButton from './elements/AddSpendingButton';
import MoneyTextField from './elements/MoneyTextField';
import SpendingTypeSelector from './elements/SpendingTypeSelector';

const useStyles = makeStyles({
    mainStack:{
        margin:"10%",
        padding:"5%",
        borderRadius:"10px",
        backgroundColor: "#393E46"
    }
})

const AddSpending = (props) => {
    const classes = useStyles()

    const [spending, setSpending] = useState({money: "", type: ""})

    const handleClick = () =>{
        console.log(spending)
    }

    return (
        <div>
            <Stack
                className={classes.mainStack}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <MoneyTextField
                    spending={spending}
                    setSpending={setSpending}
                />
                <SpendingTypeSelector
                    spending={spending}
                    setSpending={setSpending}
                />
                <AddSpendingButton 
                    handleClick={handleClick}
                />
            </Stack>
            
        </div>
    );
};

export default AddSpending;