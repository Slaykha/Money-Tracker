import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    HeaderDiv:{
        marginTop:"1%",
        marginBottom:"2%",
        margin:"10%",
        padding:"1.5%",
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

const ListHead = () => {
    const classes = useStyles()

    return (
        <div className={classes.HeaderDiv}>
            <div className={classes.HeaderElement}>DATE</div>
            <div className={classes.HeaderElement}>MONEY</div>
            <div className={classes.HeaderElement}>SPENDING TYPE</div>
            <div className={classes.HeaderElement}>DELETE</div>
        </div>
    );
};

export default ListHead;