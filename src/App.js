import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes, Switch } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/screens/Home";
import { Menu } from "./components/sideMenu/Menu";
import Spending from "./components/screens/Spending";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Container } from '@mui/material';
import Page from "./components/screens/Page";
import { makeStyles } from "@mui/styles";
import { LeftDrawer } from "./components/sideMenu/LeftDrawer";

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

function App() {
  const classes = useStyles();

  document.body.style = "background-color: #222831;"

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

export default App;
