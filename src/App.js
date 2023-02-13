import React, { useState } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/Home";
import { Menu } from "./components/sideMenu/Menu";
import SpendingList from "./components/spendingsList/SpendingList";
import Spending from "./components/Spending";

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
          <Route path="/" element={<Home/>}/>
          <Route path="/spending" element={<Spending setSpendingArray={setSpendingArray}/>} />
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
