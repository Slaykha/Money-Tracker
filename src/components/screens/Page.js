import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Header } from "../header/Header";
import { Menu } from "../sideMenu/Menu";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { fetchSpendings } from "../../actions/spendingAction";


const useStyles = makeStyles({
});

function Page(props) {
  const classes = useStyles();

  const {
    user,
    fetchSpendings,
    isLoggedIn
  } = props

  const PageComponent = props.component;

  useEffect(() => {
    if(user.id && user.id != ""){
      console.log(user.id, "@@@@@@@@@@@@")
      fetchSpendings(user.id)
    }
  }, [user])


  return (
    <>
      {!isLoggedIn ?
      <>
        <Header user={user}/>
        <Menu/>
        <div style={{marginLeft:"250px"}}>

          <PageComponent user={user}/>
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

const mapDispatchToProps = (dispatch) => ({
  fetchSpendings: (userId) => {
    dispatch(fetchSpendings(userId))
  }
});


export default connect(mapStateToProps,mapDispatchToProps) (Page);