import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
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
        userId,
        createSpending,
        userCurrency,
        spendings
    } = props

    const [openAddSpendingDialog, setOpenAddSpendingDialog] = useState(false)

    const handleClose = () => {
        setOpenAddSpendingDialog(false)
    }
    const handleClick = (date, money, type) =>{
        if(money && type){
            createSpending(userId, {date, money, type})
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
            <SpendingList
                spendings={spendings}
            />
        </>

        
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.id,
    userCurrency: state.user.currency,
    spendings: state.spendings

});

const mapDispatchToProps = (dispatch) => ({
    createSpending: (userId, spending)=>{
        dispatch(createSpending(userId, spending))
    }
});

export default connect(mapStateToProps,mapDispatchToProps) (Spending);