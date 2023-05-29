import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LogoutApi } from '../../api/authApi'
import { ENDPOINT } from '../../App'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const useStyles = makeStyles({
    headerDiv:{
        padding:"25px",
        borderRadius:"10px",
        backgroundColor: "#1A1A1A",
        display:"flex",
        paddingLeft:0,
        position: "sticky",
        top: 0, 
        zIndex:9999

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
        display:"flex",
        textAlign:"right",
        color:"white",
        cursor:"pointer",
        marginLeft:"auto",
        marginRight:"3%"
    },
    icon:{
        paddingRight:"15%"
    },
    userName:{
        fontSize:"20px",
        textDecoration:"none",
    }
  
})

export const Header = ({user}) => {
    const classes = useStyles()

    const handleLogOut = async () => {
        try{
            await LogoutApi(ENDPOINT)
            window.location.reload()
        }catch(e){
            console.error(e)
        }
    }

    return (
        <div className={classes.headerDiv}>
            <Link to="/" className={classes.logo}>Spending Tracker</Link>
            <div className={classes.rightSide} onClick={() => handleLogOut()}>
                <div className={classes.icon}>
                    <AccountCircleIcon 
                    />
                </div>
                <div className={classes.userName}>
                    {user.name}
                </div>
            </div>
        </div>
    )
    }
