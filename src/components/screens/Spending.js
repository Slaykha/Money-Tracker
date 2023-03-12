import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import SpendingButton from '../elements/SpendingButton';
import SpendingDatePicker from '../elements/SpendingDatePicker';
import SpendingTypeSelector from '../elements/SpendingTypeSelector';
import SpendingTextField from '../elements/SpeningTextField';
import { connect } from 'react-redux';
import { createSpending } from '../../actions/spendingAction';
import SpendingList from '../spendingsList/SpendingList';

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
    }

}))

const Spending = (props) => {
    const classes = useStyles()

    const {
        setSpendingArray,
        userId,
        createSpending
    } = props

    const date = new Date()
    const staticWidth = "250px"

    const [spending, setSpending] = useState({date: 0, money: "", type: "", currency: "Turk Lirası"})

    const handleClick = () =>{
        if(spending.money && spending.type){
            createSpending(userId, spending)
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
            <div className={classes.AddDiv}>
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
            </div>
            <SpendingList />
        </>

        
    );
};

const mapStateToProps = (state) => ({
    userId: state.user.user.id    
});

const mapDispatchToProps = (dispatch) => ({
    createSpending: (userId, spending)=>{
        dispatch(createSpending(userId, spending))
    }
});

export default connect(mapStateToProps,mapDispatchToProps) (Spending);