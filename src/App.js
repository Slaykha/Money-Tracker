import React from "react";
import AddSpending from "./components/AddSpending";
import SpendingList from "./components/spendingsList/SpendingList";

function App() {
  document.body.style = "background-color: #222831;"
  
  return (
    <div>
      <AddSpending/>
      <SpendingList/>
    </div>
  );
}

export default App;
