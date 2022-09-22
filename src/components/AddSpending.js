import { Box, Stack } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import AddSpendingButton from './elements/AddSpendingButton';
import MoneyTextField from './elements/MoneyTextField';
import SpendingTypeSelector from './elements/SpendingTypeSelector';

const useStyles = makeStyles({
    mainStack:{
        margin:"10%",
        padding:"5%",
        borderRadius:"10px",
        backgroundColor: "#E8DFCA"
    }
})

const AddSpending = (props) => {
    const classes = useStyles()

    return (
        <div>
            <Stack
                className={classes.mainStack}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
            >
                <MoneyTextField/>
                <SpendingTypeSelector/>
                <AddSpendingButton />
            </Stack>
            
        </div>
    );
};

export default AddSpending;