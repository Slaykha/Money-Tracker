import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { fetchSpendings, fetchTodaysTotal } from "../../actions/spendingAction";
import { fetchUser } from "../../actions/userActions";


const useStyles = makeStyles({
});

function Page(props) {
  const classes = useStyles();

  const {
    user,
    fetchSpendings,
    isLoggedIn,
    spendings,
    fetchTodaysTotal,
    todaysTotal
  } = props

  const PageComponent = props.component;

  const navigate = useNavigate()

  useEffect(() => {
    if(user && user.id !== ""){
      fetchSpendings(user.id)
      fetchTodaysTotal(user.id)
    }
  }, [user])

  

  if(!isLoggedIn){
    navigate("/login")
  }

  return (
    <>
      <>
        <Header user={user}/>
        <Menu/>
        <div style={{marginLeft:"250px"}}>

          <PageComponent user={user} spendings={spendings} todaysTotal={todaysTotal}/>
        </div>
      </>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  spendings : state.spendings,
  todaysTotal: state.todaysTotal
});

const mapDispatchToProps = (dispatch) => ({
  fetchSpendings: (userId) => {
    dispatch(fetchSpendings(userId))
  },
  fetchTodaysTotal: (userId) => {
    dispatch(fetchTodaysTotal(userId));
  },
});


export default connect(mapStateToProps,mapDispatchToProps) (Page);