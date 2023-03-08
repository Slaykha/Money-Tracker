import React from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const useStyles = makeStyles({
});

function Page(props) {
  const classes = useStyles();

  const {
    user
  } = props

  const PageComponent = props.component;

  return (
    <>
      {user.user ?
      <>
        <Header user={user.user}/>
        <Menu/>
        <div style={{marginLeft:"250px"}}>

          <PageComponent user={user.user}/>
        </div>
      </>
      :
      <Navigate to="/login"/>
      }
    </>
    
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps) (Page);