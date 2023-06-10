import { Alert, Button, Divider, Snackbar, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { UpdateUserApi, UpdateUserPasswordApi } from '../../api/authApi';
import { ENDPOINT } from '../../App';
import { UpdateUser } from '../../actions/userActions';
import ChangePasswordDialog from '../profile/ChangePasswordDialog';

const useStyles = makeStyles(() => ({
    Box:{
        width:"95%",
        background:"#1A1A1A",
        height:"800px",
        borderRadius:"10px",
        margin:"3%",
        marginTop:"1%",
        marginBottom:"1%",
        fontSize:"14px",
        color:"whitesmoke",
    },
    title:{
        display:"flex",
        margin:"4%",
        marginBottom:"2%",
        paddingTop:"50px",
    },
    titleText:{
        fontSize:"28px",
    },
    divider:{
        background:"whitesmoke"
    },
    content:{
        marginLeft:"8%",
    },
    buttons:{
        margin:"2%",
    }
}))

const Profile = (props) => {
    const{
        user,
        UpdateUser,
        alert,
        setAlert
    } = props
    const classes = useStyles()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [dailyLimit, setDailyLimit] = useState("")
    const [createdAt, setCreadtedAt] = useState("")

    const [open, setOpen] = useState(false)
    const [isEditable, setIsEditable] = useState(false)

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [passwordCheck, setpasswordCheck] = useState("")

    const handleClose = () => {
        setOpen(false)
        setCurrentPassword("")
        setNewPassword("")
        setpasswordCheck("")
    }

    const getFormattedDate = (date) => {
        let today = new Date(date);
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return dd + '/' + mm + '/' + yyyy;
    }

    const handleUpdatePassword = async () => {
        try {
            let resp = await UpdateUserPasswordApi(ENDPOINT, user.id, {currentPassword, newPassword})
            if(resp){
                setAlert({ open: true, message: "Account Infos Updated Successfully", status: "success" })
            }else{
                setAlert({ open: true, message: "An error occured!", status: "error" })
            }
        } catch (error) {
            console.log(error)
            setAlert({ open: true, message: error.response.data, status: "error" })
        }
    }

    const handleUpdateUser = async () => {
        try {
            let floatDailyLimit = parseFloat(dailyLimit)
            let resp = await UpdateUserApi(ENDPOINT, user.id, {name, email, dailyLimit: floatDailyLimit})
            if(resp){
                UpdateUser(resp)
                setAlert({ open: true, message: "Account Infos Updated Successfully", status: "success" })
            }else{
                setAlert({ open: true, message: "An error occured!", status: "error" })
            }
            setIsEditable(false)
        } catch (error) {
            console.log(error)
            setAlert({ open: true, message: "An error occured!", status: "error" })
        }
    }

    const handleCancel = () => {
        setName(user.name)
        setEmail(user.email)
        setDailyLimit(user.dailyLimit)
        setIsEditable(false)
    }

    useEffect(() => {
      if(user.email && email !== user.email){
        setName(user.name)
        setEmail(user.email)
        setDailyLimit(user.dailyLimit)
        setCreadtedAt(getFormattedDate(user.createdAt))
      }
    }, [user])
    

    return (
        <div className={classes.Box}>
            <div className={classes.title}>
                <div className={classes.titleText}>
                    User Profile Info
                </div>
                <Button
                    onClick={() => setOpen(true)}
                    variant="contained"
                    sx={{
                        marginLeft:"auto",
                        marginRight:"2%"
                    }}
                >
                    <EditIcon sx={{ color: "whitesmoke" }} /> &nbsp; Change Password
                </Button>
            </div>
            
            <Divider classes={{root: classes.divider}} style={{marginTop:"1vh", marginBottom:"1vh"}} variant="middle"/>

            <div className={classes.content}>
                <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                    variant="filled"
                    sx={{
                        margin: "2%", 
                        width: "62%",  
                        background: isEditable ? "white" : "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }}   
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                    disabled={!isEditable}
                />
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    variant="filled"
                    sx={{
                        margin: "2%", 
                        width: "62%", 
                        background: isEditable ? "white" : "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }} 
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                    disabled={!isEditable}
                />
                <TextField
                    label={`Daily Limit (${user.currency})`}
                    value={dailyLimit}
                    onChange={(e) => setDailyLimit(e.target.value)}
                    variant="filled"
                    sx={{
                        margin: "2%",
                        width: "62%", 
                        background: isEditable ? "white" : "rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }}
                    inputProps={{style: {fontSize: 18}}}
                    disabled={!isEditable}
                />
                <TextField
                    label="Currency"
                    value={user.currency}
                    variant="filled"
                    sx={{
                        margin: "2%",
                        width: "62%",  
                        background:"rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }}
                    InputLabelProps={{ shrink: true }}
                    inputProps={{style: {fontSize: 18}}}
                    disabled={true}
                />
                <TextField
                    label="Account Create Date"
                    value={createdAt}
                    variant="filled"
                    sx={{
                        margin: "2%",
                        width: "62%",  
                        background:"rgb(245,245,245, 0.9)", 
                        borderRadius:"5px",
                        "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "rgb(0, 0, 0, 0.8)",
                        }
                    }}    
                    InputLabelProps={{ shrink: true }}            
                    inputProps={{style: {fontSize: 18}}}
                    disabled={true}
                />
                <div className={classes.buttons}>
                    {isEditable 
                    ?
                        <>
                            <Button
                                onClick={handleCancel}
                                variant="contained"
                                sx={{
                                    marginRight:"2%"
                                }}
                                color="error"
                            >
                                <CloseIcon sx={{ color: "whitesmoke" }} /> &nbsp; Cancel
                            </Button>

                            <Button
                                onClick={handleUpdateUser}
                                variant="contained"
                                sx={{
                                    marginRight:"2%"
                                }}
                                color="success"
                            >
                                <DoneIcon sx={{ color: "whitesmoke" }} /> &nbsp; Apply Edit
                            </Button>
                        </>
                    :
                        <Button
                            onClick={() => setIsEditable(true)}
                            variant="contained"
                            sx={{
                                marginRight:"2%"
                            }}
                        >
                            <EditIcon sx={{ color: "whitesmoke" }} /> &nbsp; Edit
                        </Button>
                    }
                </div>
            </div>
            <ChangePasswordDialog 
                open={open}
                handleClose={handleClose}
                currentPassword={currentPassword}
                setCurrentPassword={setCurrentPassword}
                newPassword={newPassword} 
                setNewPassword={setNewPassword}
                passwordCheck={passwordCheck}
                setpasswordCheck={setpasswordCheck}
                handleUpdatePassword={handleUpdatePassword}
                setAlert={setAlert}
            />
            <Snackbar
                open={alert.open}
                autoHideDuration={2000}
                onClose={() => setAlert({ open: false, message: "", status: "" })}
            >
                <Alert severity={alert.status || "info"}>{alert.message}</Alert>
            </Snackbar>
        </div>
    )
}

const mapStateToProps = (state) => ({
    user: state.user,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    UpdateUser: (resp) => {
        dispatch(UpdateUser(resp))
    }
  });
  
  

export default connect(mapStateToProps, mapDispatchToProps) (Profile)