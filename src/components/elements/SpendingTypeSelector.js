import styled from '@emotion/styled';
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

const StyledAutocomplete = styled(Autocomplete)
    `
        background-color: rgb(238, 238, 238, 0.6);
        border-radius: 5px;
        width: ${props => props.customWidth.main};
      }
    `
Autocomplete.defaultProps = {
    customWidth:{
        main: "250px"
    }
}

const SpendingTypeSelector = (props) => {
    const{
        spending,
        setSpending,
        staticWidth
    }=props

    const handleSelect = (option) => {
        setSpending(option.target.value)
    }

    console.log(spending, "@@@")
    return (
        <StyledAutocomplete
            customWidth={{main: "96%"}}
            style={{margin: "2%"}}
            disablePortal
            id="combo-box-demo"
            value={spending}
            options={spendingOptions}
            onSelect={(option) => handleSelect(option)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Spending Type" />}
        />
    );
};

export default SpendingTypeSelector;