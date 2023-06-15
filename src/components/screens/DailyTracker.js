import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CircleProgressBar from "../dailyTracker/CircleProgressBar";
import SpendingList from "../spendingsList/SpendingList";
import { Alert, Button, Snackbar } from "@mui/material";
import AddSpendingDialog from "../spending/AddSpendingDialog";
import { createSpending, fetchSpendings } from "../../actions/spendingAction";
import { createSpendingApi } from "../../api/spendingApi";
import { ENDPOINT } from "../../App";
import SettingsIcon from '@mui/icons-material/Settings';
import LimitSettingsDialog from "../dailyTracker/LimitSettingsDialog";
import { UpdateUserApi } from "../../api/authApi";
import { UpdateUser } from "../../actions/userActions";

const useStyles = makeStyles((theme) => ({
    title:{
        fontSize:"36px", 
        color:"whitesmoke", 
        marginTop:"5%", 
        marginLeft:"5%"
    },
    graphTitle:{
        display:"flex", 
        fontSize:"24px", 
        color:"whitesmoke", 
        justifyContent:"center", 
        margin:"2%"
    },
    AddSpendingDialogButton:{
        display:"block",
        textAlign: "right",
        margin:"2%",
        marginRight:"10%"
    }
}));

const DailyTracker = (props) => {
    const classes = useStyles();

    const { 
        user,
        userId,
        dailyLimit, 
        todaysSpendings, 
        currency,
        createSpending,
        todaysTotal,
        fetchSpendings,
        alert,
        setAlert,
        UpdateUser
    } = props;

    const [openAddSpendingDialog, setOpenAddSpendingDialog] = useState(false)
    const [openLimitSettingDialog, setOpenLimitSettingDialog] = useState(false)

    const [dailyLimitEdit, setDailyLimitEdit] = useState(dailyLimit)

    const getFormattedDate = (date) => {
        let today = new Date(date);
        let yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        return yyyy + "-" + mm + "-" + dd;
    }


    const handleClose = () => {
        setOpenAddSpendingDialog(false)
    }
    
    const handleClick = async (date, money, type) =>{
        if(money && type){
            try {
                let resp = await createSpendingApi(ENDPOINT, userId, {date, money, type})
                if(resp){
                    createSpending(resp)
                    handleGetTodaysSpendings()
                    setAlert({ open: true, message: "Spending Created Successfully.", status: "success" })
                }else{
                    setAlert({ open: true, message: "An Error Occured.", status: "error" })
                }
            } catch (error) {
                console.log(error)
                setAlert({ open: true, message: "An Error Occured.", status: "error" })
            }
        }else{
            setAlert({ open: true, message: "Please Fill all necessary fields.", status: "error" })
        }
    }

    const handleGetTodaysSpendings = () => {
        fetchSpendings(userId, getFormattedDate(new Date()), "", "", "")
    }

    const handleUpdateUser = async () => {
        try {
            let floatDailyLimit = parseFloat(dailyLimitEdit)
            let resp = await UpdateUserApi(ENDPOINT, user.id, {name: user.name, email: user.email, dailyLimit: floatDailyLimit})
            if(resp){
                UpdateUser(resp)
                setAlert({ open: true, message: "Daily Spending Limit Updated Successfuly.", status: "success" })
            }else{
                setAlert({ open: true, message: "An error occured!", status: "error" })
            }
        } catch (error) {
            console.log(error)
            setAlert({ open: true, message: "An error occured!", status: "error" })
        }
    }

    useEffect(() => {
        if(userId)
            handleGetTodaysSpendings()
    }, [userId])
    
    return (
        <div>
            <div className={classes.title}>
                Daily Spending Limit
            </div>
            <div style={{marginTop:"2%",}}>
                <div className={classes.graphTitle}>
                    Daily Limit: {dailyLimit}{currency}
                </div>
                <CircleProgressBar 
                    todaysTotal={todaysTotal}user
                    dailyLimit={dailyLimit}
                    currency={currency}
                />
            </div>
            <div style={{marginTop:"2%"}}>
                <div
                    className={classes.AddSpendingDialogButton}
                >
                    <Button
                        onClick={() => setOpenLimitSettingDialog(true)}
                        variant="contained"
                        sx={{
                        background: "whitesmoke",
                        '&:hover': {
                            background: "ghostWhite",
                        },
                        marginRight:"2%"
                        }}
                    >
                        <SettingsIcon sx={{ color: "gray" }} />
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setOpenAddSpendingDialog(true)}
                    >
                        Add Spending
                    </Button>
                </div>
                <AddSpendingDialog 
                    open={openAddSpendingDialog}
                    handleClose={handleClose}
                    handleClick={handleClick}
                    currency={currency}
                    setAlert={setAlert}
                />
                <SpendingList
                    spendings={todaysSpendings}
                    setAlert={setAlert}
                />
                <LimitSettingsDialog 
                    open={openLimitSettingDialog}
                    handleClose={() => setOpenLimitSettingDialog(false)}
                    limit={dailyLimitEdit}
                    setLimit={setDailyLimitEdit}
                    handleEdit={handleUpdateUser}
                />
            </div>
            <Snackbar
                open={alert.open}
                autoHideDuration={2000}
                onClose={() => setAlert({ open: false, message: "", status: "" })}
            >
                <Alert severity={alert.status || "info"}>{alert.message}</Alert>
            </Snackbar>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    userId: state.user.id,
    dailyLimit: state.user.dailyLimit,
    todaysSpendings: state.spendings,
    currency: state.user.currency
});

const mapDispatchToProps = (dispatch) => ({
    fetchSpendings: (userId, date, type, moneySort, dateSort) => {
        dispatch(fetchSpendings(userId, date, type, moneySort, dateSort))
    },
    createSpending: (resp)=>{
        dispatch(createSpending(resp))
    },
    UpdateUser: (resp) => {
        dispatch(UpdateUser(resp))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DailyTracker);
