import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import React from 'react'

const LimitSettingsDialog = (props) => {
    const {
        open,
        handleClose,
        handleEdit,
        limit,
        setLimit
    } = props

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {width:"60%", overflowY: 'hidden', overflowX: 'hidden'}}}>
            <DialogTitle>Update Daily Spending Limit</DialogTitle>
            <DialogContent style={{width:"90%", overflowY: 'visible'}}>
                <TextField 
                    label="Daily Spending Limit"
                    value={limit}
                    onChange={(e) => setLimit(e.target.value)}
                    sx={{
                        width: "95%",
                        height:"50px",
                        margin:"2%",
                    }}  
                />
                <Button 
                    onClick={handleEdit}
                    variant="contained"
                    sx={{
                        width: "95%",
                        height:"50px",
                        margin:"2%",
                    }}  
                >
                    Change Daily Limit
                </Button>
                <Button 
                    onClick={handleClose}
                    variant="outlined"
                    sx={{
                        width: "95%",
                        height:"50px",
                        margin:"2%",
                    }}  
                >
                    Close
                </Button>
            </DialogContent>
        </Dialog>    
    )
}

export default LimitSettingsDialog