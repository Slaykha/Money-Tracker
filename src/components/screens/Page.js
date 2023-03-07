import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { GetUserApi } from "../../api/authApi";
import { ENDPOINT } from "../../App";
import { connect } from "react-redux";

const useStyles = makeStyles({
});

function Page(props) {
  const classes = useStyles();

  const {
    user
  } = props


  const PageComponent = props.component;

/* 
  React.useEffect(() => {
    document.title = props.title;
  }); */

  return (
    <>
      <Header user={user.user}/>
      <Menu/>
      <div style={{marginLeft:"250px"}}>

        <PageComponent user={user}/>
      </div>
    </>
    
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});


export default connect(mapStateToProps) (Page);