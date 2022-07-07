import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/AddExpense/ExpenseForm";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <ExpenseForm setShowModal={setShowModal} />}
      <Expenses setShowModal={setShowModal} />
    </>
  );
}

export default App;
