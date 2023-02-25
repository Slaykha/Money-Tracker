import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  registerDiv:{
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
  registerHeader:{
    textAlign:"center",
    marginTop:"15%",
    fontSize:"32px",
    color:"whitesmoke"
  },
  registerTextField:{
    width:300,
  },
  registerButton:{
    width:300,
    height:50
  },
  loginText:{
    textAlign:"center",
    marginTop:"24px",
    fontSize:"18px"
  },
  loginLink:{
    textDecoration:"none"
  },
  notchedOutline:{
    borderColor: "white !important",
    color:"whitesmoke"
  },
}))

const Register = () => {
  const classes = useStyles() 

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")

  const handleClick = () => {
    if(handleCheckPassword()){
      handleRegister()
    }
  }

  const handleCheckPassword = () => {
    return (password === passwordCheck)
  }

  const handleRegister = () => {
    console.log(email, password, name)
  }

  return (
    <div className={classes.registerDiv}>
      <div className={classes.registerHeader}>Register</div>
      <TextField 
        label="Name" 
        variant="outlined" 
        value={name}
        onChange={e => setName(e.target.value)}
        type="text"
        className={classes.registerTextField}
        required
        sx={{
          display:"flex",
          margin:"auto",
          marginTop:"10%",
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
        label="Email" 
        variant="outlined" 
        value={email}
        onChange={e => setEmail(e.target.value)}
        type="text"
        className={classes.registerTextField}
        required
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

      <TextField 
        label="Password" 
        variant="outlined" 
        value={password}
        onChange={e => setPassword(e.target.value)}
        type="password"
        className={classes.registerTextField}
        required
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

      <TextField 
        label="Password Again" 
        variant="outlined" 
        value={passwordCheck}
        onChange={e => setPasswordCheck(e.target.value)}
        type="password"
        className={classes.registerTextField}
        required
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
        className={classes.registerButton}
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
        Register
      </Button>
      <div className={classes.loginText}>
        Already have an Account?
        <Link className={classes.loginLink} to="/login"> Login</Link>
      </div>
    </div>  
  )
}

export default Register