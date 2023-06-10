import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'
import SpendingTypeSelector from '../elements/SpendingTypeSelector'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const FilterSpendingDialog = (props) => {
    const {
        open,
        handleClose,
        setType,
        type,
        handleFilter,
        date,
        setDate
    } = props

    const formatteDate = (date) => {
        let today = new Date(date);
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        setDate(yyyy + '-' + mm + '-' + dd)
    }

    const handleReset = () => {
        setType("")
        setDate("")
        handleClose()
    }

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {overflowY: 'visible'}}}>
            <DialogTitle>Filter Spending</DialogTitle>
            <DialogContent style={{width:"450px", overflowY: 'visible'}}>
                <SpendingTypeSelector
                    spending={type}
                    setSpending={setType}
                />
                <div style={{margin: "2%"}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="Date"
                            inputFormat="DD/MM/YYYY"
                            InputProps={{style:{backgroundColor:"rgb(238, 238, 238, 0.6)"}}}
                            value={date}
                            onChange={(d) => formatteDate(d)}
                            renderInput={(params) => <TextField {...params} 
                                fullWidth
                            />}
                        />
                    </LocalizationProvider>
                </div>
                <div style={{display:"flex"}}>
                    <Button 
                        onClick={handleReset}
                        variant="contained"
                        sx={{
                            width: "48%",
                            height:"55px",
                            margin:"2%",
                        }}  
                    >
                        Reset Filter Values
                    </Button>
                    <Button 
                        onClick={handleFilter}
                        variant="contained"
                        sx={{
                            width: "48%",
                            height:"55px",
                            margin:"2%",
                        }}  
                    >
                        Filter
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default FilterSpendingDialog