import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import SpendingButton from '../elements/SpendingButton';
import SpendingDatePicker from '../elements/SpendingDatePicker';
import SpendingTypeSelector from '../elements/SpendingTypeSelector';
import SpendingTextField from '../elements/SpeningTextField';
import { connect } from 'react-redux';
import { createSpending } from '../../actions/spendingAction';
import SpendingList from '../spendingsList/SpendingList';
import AddSpendingDialog from '../spending/AddSpendingDialog';
import { Button } from '@mui/material';

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
        setSpendingArray,
        userId,
        createSpending,
        userCurrency
    } = props

    const date = new Date()
    const staticWidth = "250px"

    const [spending, setSpending] = useState({date: 0, money: "", type: ""})
    const [openAddSpendingDialog, setOpenAddSpendingDialog] = useState(false)

    const handleClose = () => {
        setOpenAddSpendingDialog(false)
    }
    const handleClick = (date, money, type) =>{
        if(money && type){
            createSpending(userId, {date, money, type})
            /* try {
                createSpendingApi(ENDPOINT, userId, spending)
            } catch (error) {
                console.info(error)
            } 
            setSpendingArray((prevState) => [...prevState, spending]) */
        }
    }

    return (
        <>
            <div
                className={classes.AddSpendingDialogButton}
            >
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
            {/* <div className={classes.AddDiv}>
                <SpendingDatePicker
                    currentDate={date}
                    spending={spending}
                    setSpending={setSpending}
                    staticWidth={staticWidth}
                />
                <SpendingTextField
                    spending={spending}
                    setSpending={setSpending}
                    staticWidth={staticWidth}
                />
                <SpendingTypeSelector
                    spending={spending}
                    setSpending={setSpending}
                    staticWidth={staticWidth}
                />
                <SpendingButton 
                    handleClick={handleClick}
                    staticWidth={staticWidth}
                />
            </div> */}
            <SpendingList />
        </>

        
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.id,
    userCurrency: state.user.currency
});

const mapDispatchToProps = (dispatch) => ({
    createSpending: (userId, spending)=>{
        dispatch(createSpending(userId, spending))
    }
});

export default connect(mapStateToProps,mapDispatchToProps) (Spending);