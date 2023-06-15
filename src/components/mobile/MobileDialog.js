import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

const MobileDialog = (props) => {
    const {
        open,
        handleClose,
    } = props

    return (
        <Dialog open={open} PaperProps={{style: {width:"60%", overflowY: 'hidden', overflowX: 'hidden'}}}>
            <DialogTitle>Mobile Application</DialogTitle>
            <DialogContent style={{width:"90%", overflowY: 'visible'}}>
                <div>
                    Download mobile application for mobile resolution.
                </div>
                <Button 
                    onClick={handleClose}
                    variant="contained"
                    sx={{
                        width: "95%",
                        height:"50px",
                        margin:"2%",
                    }}  
                    disabled={true}
                >
                    Download Mobile App
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

export default MobileDialog