import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/screens/Home";
import Spending from "./components/screens/Spending";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Page from "./components/screens/Page";
import { makeStyles } from "@mui/styles";
import { connect } from "react-redux";
import { fetchUser } from "./actions/userActions";

export const ENDPOINT = "http://localhost:12345"

const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      padding: 0,
      overflowX: "auto"
    },
  }));

function App(props) {
  const classes = useStyles();
  document.body.style = "background-color: #222831;"

  const {
    fetchUser
  } = props

  useEffect(() => {
    fetchUser()
  }, [])
  

  const [spendingArray, setSpendingArray] = useState([])
  
  return (
    <div>
      <HashRouter>


        <Routes>
          <Route path="/" element={<Page component={Home} title={"Home Screen"} />}/>
          <Route path="/spending" element={<Page component={Spending} title={"Spending"} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
        </Routes>
          
      </HashRouter>
     {/*  <AddSpending
        setSpendingArray={setSpendingArray}
      />
      <SpendingList
        spendingArray={spendingArray}
        setSpendingArray={setSpendingArray}
      /> */}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => {
    dispatch(fetchUser());
  },
});

export default connect(mapStateToProps,mapDispatchToProps) (App);