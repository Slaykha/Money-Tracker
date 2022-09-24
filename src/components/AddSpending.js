import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import SpendingButton from './elements/SpendingButton';
import SpendingDatePicker from './elements/SpendingDatePicker';
import SpendingTypeSelector from './elements/SpendingTypeSelector';
import SpendingTextField from './elements/SpeningTextField';

const useStyles = makeStyles({
    AddDiv:{
        marginBottom:0,
        marginTop:"5%",
        display:"flex",
        margin:"10%",
        padding:"5%",
        borderRadius:"10px",
        backgroundColor: "#393E46"
    },

})

const AddSpending = (props) => {
    const date = new Date()

    const classes = useStyles()

    const [spending, setSpending] = useState({date:"", money: "", type: ""})

    const handleClick = () =>{
        console.log(spending)
    }

    return (
        <div className={classes.AddDiv}>
            <SpendingDatePicker
                currentDate={date}
                spending={spending}
                setSpending={setSpending}
            />
            <SpendingTextField
                spending={spending}
                setSpending={setSpending}
            />
            <SpendingTypeSelector
                spending={spending}
                setSpending={setSpending}
            />
            <SpendingButton 
                handleClick={handleClick}
            />
        </div>
    );
};

export default AddSpending;