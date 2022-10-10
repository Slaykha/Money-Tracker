import React, { useState } from "react";
import AddSpending from "./components/AddSpending";
import SpendingList from "./components/spendingsList/SpendingList";

export const ENDPOINT = "http://localhost:12345"

function App() {
  document.body.style = "background-color: #222831;"

  const [spendingArray, setSpendingArray] = useState([])
  
  return (
    <div>
      <AddSpending
        setSpendingArray={setSpendingArray}
      />
      <SpendingList
        spendingArray={spendingArray}
        setSpendingArray={setSpendingArray}
      />
    </div>
  );
}

export default App;
