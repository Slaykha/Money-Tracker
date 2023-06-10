import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import SpendingDatePicker from '../elements/SpendingDatePicker'
import SpendingTypeSelector from '../elements/SpendingTypeSelector'
import SpendingTextField from '../elements/SpeningTextField'

const EditSpendingDialog = (props) => {
    const {
        open,
        handleClose,
        handleEdit,
        currency,
        moneyEdit,
        dateEdit,
        typeEdit,
        setMoneyEdit,
        setDateEdit,
        setTypeEdit
    } = props

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {overflowY: 'visible'}}}>
            <DialogTitle>Add Spending</DialogTitle>
            <DialogContent style={{width:"450px", overflowY: 'visible'}}>
                <SpendingDatePicker
                    spending={dateEdit}
                    setSpending={setDateEdit}
                />
                <SpendingTextField
                    currency={currency}
                    spending={moneyEdit}
                    setSpending={setMoneyEdit}
                />
                <SpendingTypeSelector
                    spending={typeEdit}
                    setSpending={setTypeEdit}
                />
                <Button 
                    onClick={handleEdit}
                    variant="contained"
                    sx={{
                        width: "96%",
                        height:"55px",
                        margin:"2%",
                    }}  
                >
                    Edit Spending
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default EditSpendingDialog