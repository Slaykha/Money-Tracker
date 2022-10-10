import { makeStyles } from '@mui/styles';
import React from 'react';
import { format } from 'date-fns';

const useStyles = makeStyles({
    HeaderDiv:{
        marginTop:"1%",
        marginBottom:0,
        margin:"10%",
        padding:"1% 1.5%",
        borderRadius:"10px",
        backgroundColor: "#393E46",
        display:"flex"
    },
    HeaderElement:{
        width:"25%",
        color: "rgb(238, 238, 238)",
        textAlign:"center"
    }
})

const currencyMap = {turkLirası: "$"}


const ListItem = (props) => {
    const classes = useStyles()

    const {
        spending
    }= props

    console.log(currencyMap["turkLirası"])

    return (
        <div className={classes.HeaderDiv}>
            <div className={classes.HeaderElement}>{spending.spendingDate}</div>
            <div className={classes.HeaderElement}>{ spending.money}</div>
            <div className={classes.HeaderElement}>{spending.spendingType}</div>
            <div className={classes.HeaderElement}>DELETE</div>
        </div>
    );
};

export default ListItem;