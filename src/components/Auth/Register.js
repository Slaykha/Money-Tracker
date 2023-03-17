import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import { fetchUser } from '../../actions/userActions'
import { RegisterApi } from '../../api/authApi'
import { ENDPOINT } from '../../App'
import loginBackground2 from "../../images/loginBackground2.jpg"

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
  imageContent:{
    backgroundImage: `url(${loginBackground2})`,
    backgroundSize: "fill",
    backgroundRepeat: "no-repeat",
    maxWidth: "100vw",
    height: "100vh",
  }
}))

const Register = (props) => {
  const classes = useStyles() 
  const {
    isLoggedIn,
    fetchUser
  } = props

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)

  const handleClick = () => {
    if(handleCheckPassword()){
      handleRegister()
    }
    else{
      console.log("HATA!")
    }
  }

  const handleCheckPassword = () => {
    return (password === passwordCheck)
  }

  const handleValidateEmail = () => {
    return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/.test(email))
  }  

  const handleRegister = async () => {
    try{
      const resp = await RegisterApi(ENDPOINT, {name, email, password})
      if(resp){
        fetchUser()
      }
    }catch(e){
      console.error(e)
    }
  }

  if(isLoggedIn){
    return <Navigate to="/" />
  }

  return (
    <div className={classes.imageContent}>
      <div className={classes.registerDiv}>
        <div className={classes.registerHeader}>Register</div>
        <TextField 
          label="Name" 
          variant="outlined" 
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          className={classes.registerTextField}
          
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
    </div>
  )
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps,mapDispatchToProps) (Register);