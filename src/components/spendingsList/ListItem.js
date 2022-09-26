import { makeStyles } from '@mui/styles';
import React from 'react';
import { format } from 'date-fns';

const useStyles = makeStyles({
    HeaderDiv:{
        marginTop:"2%",
        marginBottom:0,
        margin:"10%",
        padding:"1%",
        borderRadius:"10px",
        backgroundColor: "#393E46",
        display:"flex"
    },
    HeaderElement:{
        marginLeft:"15%",
        color: "rgb(238, 238, 238)",
        marginLeft:"auto",
        marginRight:"auto"
    }
})

const ListItem = (props) => {
    const classes = useStyles()

    const {
        spending
    }= props
    return (
        <div className={classes.HeaderDiv}>
            <div className={classes.HeaderElement}>{format(spending.date ,"dd/MM/yyyy")}</div>
            <div className={classes.HeaderElement}>{spending.money}</div>
            <div className={classes.HeaderElement}>{spending.type}</div>
            <div className={classes.HeaderElement}>DELETE</div>
        </div>
    );
};

export default ListItem;