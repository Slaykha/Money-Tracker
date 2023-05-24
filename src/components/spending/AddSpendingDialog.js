import { Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'
import SpendingButton from '../elements/SpendingButton'
import SpendingDatePicker from '../elements/SpendingDatePicker'
import SpendingTypeSelector from '../elements/SpendingTypeSelector'
import SpendingTextField from '../elements/SpeningTextField'

const AddSpendingDialog = (props) => {
    const {
        open,
        handleClose,
        handleClick,
        currency
    } = props

    const date = new Date()

    const [money, setMoney] = useState("")
    const [spendingDate, setSpendingDate] = useState(0)
    const [type, setType] = useState("")

    const handleSpendingButtonClick = () => {
        console.log(spendingDate)
        handleClick(spendingDate, money, type)
    } 

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {overflowY: 'visible'}}}>
            <DialogTitle>Add Spending</DialogTitle>
            <DialogContent style={{width:"450px", overflowY: 'visible'}}>
                <SpendingDatePicker
                    currentDate={date}
                    spending={spendingDate}
                    setSpending={setSpendingDate}
                />
                <SpendingTextField
                    currency={currency}
                    spending={money}
                    setSpending={setMoney}
                />
                <SpendingTypeSelector
                    spending={type}
                    setSpending={setType}
                />
                <SpendingButton 
                    handleClick={handleSpendingButtonClick}
                />
            </DialogContent>
        </Dialog>
    )
}

export default AddSpendingDialog