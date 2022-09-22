import { Autocomplete, TextField } from '@mui/material';
import React from 'react';

const spendingOptions = [
    {label: "Market"},
    {label: "Shopping"},
    {label: "Online Shopping"},
    {label: "Restaurant"},
    {label: "Food"},
    {label: "Cafe"},
    {label: "other"},
]

const SpendingTypeSelector = () => {
    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={spendingOptions}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Spending" />}
        />
    );
};

export default SpendingTypeSelector;