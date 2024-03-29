import React, { useEffect, useRef, useState } from "react";
import { HashRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./components/screens/Home";
import Spending from "./components/screens/Spending";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Page from "./components/screens/Page";
import { connect } from "react-redux";
import { fetchUser } from "./actions/userActions";
import DailyTracker from "./components/screens/DailyTracker";
import GraphPage from "./components/screens/GraphPage";
import LineGraph from "./components/graph/LineGraph";
import BarGraph from "./components/graph/BarGraph";
import RadialBarGraph from "./components/graph/RadialBarGraph";
import Profile from "./components/screens/Profile";
import MobileDialog from "./components/mobile/MobileDialog";

export const ENDPOINT = "http://localhost:12345"

function App(props) {
  const COOKIE = document.cookie
  const windowSize = useRef(window.innerWidth);

  document.body.style = "background-color: #222831;"

  const {
    fetchUser,
    user
  } = props


  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleCloseMobile = () => {
    setMobileOpen(false)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  useEffect(() => {
    if(COOKIE){
      setIsLoggedIn(true)
    }else{
      setIsLoggedIn(false)
    }
  }, [user])

  useEffect(() => {
    if(windowSize.current < 1024){
      setMobileOpen(true)
    }
  }, [windowSize.current])
  
  
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Page component={Home} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} Ititle={"Home Screen"} />}/>
          <Route path="/spending" element={<Page component={Spending} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Spending"} />} />
          <Route path="/dailyTracker" element={<Page component={DailyTracker} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Daily Tracker"} />} />

          <Route path="/profile" element={<Page component={Profile} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Profile"} />} />

          <Route path="/lineGraph" element={<GraphPage component={LineGraph} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Line Graph"} />} />
          <Route path="/barGraph" element={<GraphPage component={BarGraph} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Bar Graph"} />} />
          <Route path="/radialBarGraph" element={<GraphPage component={RadialBarGraph} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} title={"Radial Graph"} />} />

          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/register" element={<Register isLoggedIn={isLoggedIn}/>} /> 
        </Routes>
      </HashRouter>
      <MobileDialog 
        open={mobileOpen}
        handleClose={handleCloseMobile}
      />
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