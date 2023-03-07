import { Divider } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles({
    headerDiv:{
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
        fontSize:"26px",
        cursor:"pointer",
        textDecoration:"none"
    },
    rightSide:{
        textAlign:"right",
        color:"white",
        fontSize:"18px",
        cursor:"pointer",
        textDecoration:"none",
        marginLeft:"auto"
    }
  
})

export const Header = ({user}) => {
    const classes = useStyles()

    return (
        <div className={classes.headerDiv}>
            <Link to="/" className={classes.logo}>Spending Tracker</Link>
            <div className={classes.rightSide}>
                {user.name}
            </div>
        </div>
    )
    }
