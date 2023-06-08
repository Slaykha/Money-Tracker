import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createSpending, fetchSpendings } from '../../actions/spendingAction';
import SpendingList from '../spendingsList/SpendingList';
import AddSpendingDialog from '../spending/AddSpendingDialog';
import { Alert, Button, Snackbar } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FilterSpendingDialog from '../spending/FilterSpendingDialog';
import { createSpendingApi } from '../../api/spendingApi';
import { ENDPOINT } from '../../App';

const useStyles = makeStyles((theme) => ({
    AddDiv:{
        marginTop:0,
        marginBottom:0,
        display:"flex",
        margin:"100px",
        padding:"5%",
        borderRadius:"10px",
        backgroundColor: "#393E46"
    },
    "@media (max-width: 700px)": {
        AddDiv: {
          display: "block"
         }
    },
    AddSpendingDialogButton:{
        display:"block",
        textAlign: "right",
        margin:"2%",
        marginRight:"10%"
    }
}))

const Spending = (props) => {
    const classes = useStyles()

    const {
        user,
        createSpending,
        userCurrency,
        spendings,
        fetchSpendings,
        alert,
        setAlert
    } = props

    const [openAddSpendingDialog, setOpenAddSpendingDialog] = useState(false)
    const [openFilterSpendingDialog, setOpenFilterSpendingDialog] = useState(false)

    const [dateFilter, setDateFilter] = useState("")
    const [typeFilter, setTypeFilter] = useState("")


    const handleClose = () => {
        setOpenAddSpendingDialog(false)
    }

    const handleCloseFilter = () => {
        setOpenFilterSpendingDialog(false)
    }

    const handleClick = async (date, money, type) =>{
        if(money && type){
            try {
                let resp = await createSpendingApi(ENDPOINT, user.id, {date, money, type})
                if(resp){
                    createSpending(resp)
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

    const handleFilter = () => {
        fetchSpendings(user.id, dateFilter, typeFilter)
        handleCloseFilter()
    }
    
    useEffect(() => {
        if(user && user.id !== ""){
          fetchSpendings(user.id, "", "")
        }
        return () => {}
    }, [user])

    return (
        <>
            <div className={classes.AddSpendingDialogButton}>
                <Button
                    onClick={() => setOpenFilterSpendingDialog(true)}
                    variant="contained"
                    sx={{
                    background: "whitesmoke",
                    '&:hover': {
                        background: "ghostWhite",
                    },
                    marginRight:"2%"
                    }}
                >
                    <FilterAltIcon sx={{ color: "gray" }} />
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
                currency={userCurrency}
            />
            <FilterSpendingDialog 
                open={openFilterSpendingDialog}
                handleClose={handleCloseFilter}
                setType={setTypeFilter}
                type={typeFilter}
                handleFilter={handleFilter}
            />
            <SpendingList
                spendings={spendings}
                setAlert={setAlert}
            />

            <Snackbar
                open={alert.open}
                autoHideDuration={2000}
                onClose={() => setAlert({ open: false, message: "", status: "" })}
            >
                <Alert severity={alert.status || "info"}>{alert.message}</Alert>
            </Snackbar>
        </>
    );
};

const mapStateToProps = (state) => ({
    user: state.user,
    userCurrency: state.user.currency,
    spendings: state.spendings

});

const mapDispatchToProps = (dispatch) => ({
    createSpending: (resp)=>{
        dispatch(createSpending(resp))
    },
    fetchSpendings: (userId, date, type) => {
        dispatch(fetchSpendings(userId, date, type))
    },
});

export default connect(mapStateToProps,mapDispatchToProps) (Spending);