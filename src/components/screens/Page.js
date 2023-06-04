import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchTodaysTotal } from "../../actions/spendingAction";


const useStyles = makeStyles({
  bodyComponent:{
    marginLeft:"250px", 
    marginTop:"120px"
  }
});

function Page(props) {
  const classes = useStyles();

  const {
    user,
    isLoggedIn,
    spendings,
    fetchTodaysTotal,
    todaysTotal
  } = props

  const PageComponent = props.component;

  const navigate = useNavigate()

  
  useEffect(() => {
    if(user && user.id !== ""){
      fetchTodaysTotal(user.id)
    }
    return () => {}
  }, [spendings])

  if(!isLoggedIn){
    navigate("/login")
  }


  return (
    <>
      <>
        <Header user={user}/>
        <Menu/>
        <div className={classes.bodyComponent}>
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
  fetchTodaysTotal: (userId) => {
    dispatch(fetchTodaysTotal(userId));
  },
});


export default connect(mapStateToProps,mapDispatchToProps) (Page);