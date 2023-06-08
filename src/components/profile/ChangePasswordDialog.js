import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material'
import React, { useState } from 'react'

const ChangePasswordDialog = (props) => {
    const {
        open,
        handleClose,
        currentPassword,
        setCurrentPassword, 
        newPassword, 
        setNewPassword,
        passwordCheck, 
        setpasswordCheck,
        handleUpdatePassword,
        setAlert
    } = props

    const handleCheck = () => {
        if(newPassword === passwordCheck){
            handleUpdatePassword()
            handleClose()
        }else{
            setAlert({ open: true, message: "New Passwords Does Not Match!", status: "error" })
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{style: {overflowY: 'visible'}}}>
            <DialogTitle>Change Password</DialogTitle>
            <DialogContent style={{width:"450px", overflowY: 'visible'}}>
                <TextField
                    label="Currenct Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    variant="filled"
                    type="password"
                    sx={{
                        margin: "2%", 
                        width: "95%", 
                        background: "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }} 
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                />
                <TextField
                    label="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    variant="filled"
                    type="password"
                    sx={{
                        margin: "2%", 
                        width: "95%", 
                        background: "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }} 
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                />
                <TextField
                    label="New Password Check"
                    value={passwordCheck}
                    onChange={(e) => setpasswordCheck(e.target.value)}
                    variant="filled"
                    type="password"
                    sx={{
                        margin: "2%", 
                        width: "95%", 
                        background: "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }} 
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                />
                <Button
                    onClick={handleCheck}
                    variant="contained"
                    sx={{
                        margin: "2%", 
                        width: "95%", 
                        height:"50px"
                    }}
                >
                    Change Password
                </Button>
            </DialogContent>
        </Dialog>    )
}

export default ChangePasswordDialog