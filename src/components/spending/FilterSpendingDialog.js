import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'
import SpendingButton from '../elements/SpendingButton'
import SpendingTypeSelector from '../elements/SpendingTypeSelector'
import { styled } from '@mui/styles'

const FilterSpendingDialog = (props) => {
    const {
        open,
        handleClose,
        setType,
        type,
        handleFilter
    } = props

    const ColorButton = styled(Button)(({ theme }) => ({
        color: "rgb(0, 173, 181)",
        backgroundColor: "rgb(238, 238, 238, 0.6)",
        width: "96%",
        height:"55px",
        margin:"2%",
        '&:hover': {
          backgroundColor: "rgb(238, 238, 238, 1)",
        },
      }));

    const date = new Date()


    const handleReset = () => {
        setType("")
    }

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {overflowY: 'visible'}}}>
            <DialogTitle>Filter Spending</DialogTitle>
            <DialogContent style={{width:"450px", overflowY: 'visible'}}>
                <SpendingTypeSelector
                    spending={type}
                    setSpending={setType}
                />
                <ColorButton 
                    onClick={handleFilter}
                >
                    Filter
                </ColorButton>
                <ColorButton 
                    onClick={handleReset}
                >
                    Reset Values
                </ColorButton>
            </DialogContent>
        </Dialog>
    )
}

export default FilterSpendingDialog