import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    HeaderDiv:{
        marginTop:"2%",
        margin:"10%",
        padding:"2%",
        borderRadius:"10px",
        backgroundColor: "#393E46",
        display:"flex"
    },
    HeaderElement:{
        marginLeft:"15%"
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