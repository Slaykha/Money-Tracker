import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { fetchSpendings } from "../../actions/spendingAction";
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
    fetchUser
  } = props

  const PageComponent = props.component;

  const storedLocation = localStorage.getItem("currentLocation") || "/";

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("currentLocation", location.pathname);
  }, [location]);

  useEffect(() => {
    if(user && user.id !== ""){
      fetchSpendings(user.id)
    }
  }, [user])

  if(!isLoggedIn){
    navigate(storedLocation)
  }

  return (
    <>
      <>
        <Header user={user}/>
        <Menu/>
        <div style={{marginLeft:"250px"}}>

          <PageComponent user={user} spendings={spendings}/>
        </div>
      </>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  spendings :state.spendings
});

const mapDispatchToProps = (dispatch) => ({
  fetchSpendings: (userId) => {
    dispatch(fetchSpendings(userId))
  },
  fetchUser: () => {
    dispatch(fetchUser());
  },
});


export default connect(mapStateToProps,mapDispatchToProps) (Page);