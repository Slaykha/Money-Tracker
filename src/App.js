import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/screens/Home";
import { Menu } from "./components/sideMenu/Menu";
import Spending from "./components/screens/Spending";
import Login from "./components/screens/Login";
import Register from "./components/screens/Register";

export const ENDPOINT = "http://localhost:12345"

function App() {
  document.body.style = "background-color: #222831;"

  const [spendingArray, setSpendingArray] = useState([])
  
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/spending" element={<Spending setSpendingArray={setSpendingArray} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </BrowserRouter>
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
