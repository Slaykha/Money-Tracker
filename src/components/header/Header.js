import { makeStyles } from '@mui/styles'
import React from 'react'
import { Link } from 'react-router-dom'
import { LogoutApi } from '../../api/authApi'
import { ENDPOINT } from '../../App'

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

    const handleLogOut = async () => {
        try{
            await LogoutApi(ENDPOINT)
        }catch(e){
            console.errır(e)
        }
    }

    return (
        <div className={classes.headerDiv}>
            <Link to="/" className={classes.logo}>Spending Tracker</Link>
            <div className={classes.rightSide} onClick={() => handleLogOut()}>
                {user.name}
            </div>
        </div>
    )
    }
