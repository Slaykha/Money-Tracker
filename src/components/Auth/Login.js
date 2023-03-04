import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, TextField } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
import universe from "../../images/universe.jpg"
import { LoginApi } from '../../api/authApi';
import { ENDPOINT } from '../../App';

const useStyles = makeStyles((theme) => ({
  loginDiv:{
    width:400,
    height:600,
    background:"#ED9121",
    borderRadius:5,
    position: "absolute",
    top: "50%",
    left: "50%", 
    marginTop:-300,
    marginLeft:250
  },
  loginHeader:{
    textAlign:"center",
    marginTop:"20%",
    fontSize:"32px",
    color:"whitesmoke"
  },
  emailTextField:{
    width:300,
  },
  loginButton:{
    width:300,
    height:50
  },
  registerText:{
    textAlign:"center",
    marginTop:"24px",
    fontSize:"18px"
  },
  registerLink:{
    textDecoration:"none"
  },
  notchedOutline:{
    borderColor: "white !important",
    color:"whitesmoke"
  },

}))

const Login = () => {
    const classes = useStyles()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleClick = () => {
      
        handleLogin()
      
    }

    const handleValidateEmail = () => {
      return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email))
    } 

    const handleLogin = async () => {
      try{
        let response = await LoginApi(ENDPOINT, {email, password})
        if(response){
          setIsLoggedIn(true)
        }
      }catch(e){
        console.error(e)
      }
    }

    if(isLoggedIn){
      return <Navigate to="/" />
    }

    return (
      <div style={{ 
        backgroundImage: `url(${universe})` 
      }}>
      <div className={classes.loginDiv}>
        <div className={classes.loginHeader}>Login</div>
        <TextField 
          label="Email" 
          variant="outlined" 
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          className={classes.emailTextField}
          sx={{
            display:"flex",
            margin:"auto",
            marginTop:"20%",
            color:"white",
            input: {
              color:"whitesmoke"
            },
          }}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
        />

        <TextField 
          label="Password" 
          variant="outlined" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          className={classes.emailTextField}
          sx={{
            display:"flex",
            margin:"auto",
            marginTop:"5%"
          }}
          InputProps={{
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
          InputLabelProps={{
            style: { color: '#fff' },
          }}
        />

        <Button 
          className={classes.loginButton}
          variant="contained"
          onClick={handleClick}
          sx={{
            display:"flex",
            margin:"auto",
            marginTop:"5%",
            background:"#399564",
            "&:hover":{
              background:"#368A65"
            }
          }}
        >
          Login
        </Button>
        <div className={classes.registerText}>
          Create a new Account
          <Link className={classes.registerLink} to="/register"> Register</Link>
        </div>
      </div>
      </div>

    )
}

export default Login