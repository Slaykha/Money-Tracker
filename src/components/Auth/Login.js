import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Button, TextField } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  loginDiv:{
    width:400,
    height:600,
    background:"orange",
    borderRadius:5,
    position: "absolute",
    top: "50%",
    left: "50%", 
    marginTop:-300,
    marginLeft:-200

  },
  emailTextField:{
    width:300,
  },
  loginButton:{
    width:300,
    height:50
  }
}))

const Login = () => {
    const classes = useStyles()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    console.log(email, password)

    return (
      <div className={classes.loginDiv}>
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
            marginTop:"45%"
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
        />

        <Button 
          className={classes.loginButton}
          variant="contained"
          sx={{
            display:"flex",
            margin:"auto",
            marginTop:"5%"
          }}
        >
          Login
        </Button>
      </div>
    )
}

export default Login