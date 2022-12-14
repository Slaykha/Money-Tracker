import { Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyles = makeStyles({
    headerDiv:{
        marginBottom:"2%",
        padding:"25px",
        borderRadius:"10px",
        backgroundColor: "#1A1A1A",
        display:"flex",
        paddingLeft:0
    },
    logo:{
        width:"250px",
        textAlign:"center",
        color:"white",
        fontWeight:500,
        fontSize:"26px"
    }
  
})

export const Header = () => {
    const classes = useStyles()

    return (
        <div className={classes.headerDiv}>
            <div className={classes.logo}>Spending Tracker</div>
        </div>
    )
    }
