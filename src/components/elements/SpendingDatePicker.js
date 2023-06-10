import React, { useEffect, useRef} from 'react';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const SpendingDatePicker = (props) => {
    const{
        spending,
        setSpending,
        currentDate,
    }=props

    //we use useRef here to stop useEffect from geting into loop
    const refCurrentDate = useRef(currentDate)
   
    useEffect(() => {
        handleChange(refCurrentDate.current)
    },[refCurrentDate])

    const handleChange = (newDate) => {
        if(newDate)
            setSpending(new Date(newDate));
    };

    return (
        <div
            style={{margin:"2%"}}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="Date"
                    inputFormat="DD/MM/YYYY"
                    InputProps={{style:{backgroundColor:"rgb(238, 238, 238, 0.6)"}}}
                    value={spending}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} 
                        fullWidth
                    />}
                />
            </LocalizationProvider>
        </div>
      
        
    );
};

export default SpendingDatePicker;