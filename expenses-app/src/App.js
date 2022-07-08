import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/AddExpense/ExpenseForm";

import "./App.css";

function App() {
  /* VARIABLES AND CONSTANTS */
  const expensesArray = [
    {
      id: 1,
      date: "04/07/2022",
      body: "Tortillas 100% integrales",
      price: 1.7,
    },
    { id: 2, date: "04/07/2022", body: "Bebida de Avena", price: 0.9 },
    { id: 3, date: "04/07/2022", body: "Crema 100% cacahuete", price: 3.1 },
  ];

  /* STATES */
  const [expensesState, setExpensesState] = useState(expensesArray);
  const [showModal, setShowModal] = useState(false);

  console.log(expensesState);
  return (
    <>
      {showModal && (
        <ExpenseForm
          setExpensesState={setExpensesState}
          setShowModal={setShowModal}
          expensesState={expensesState}
        />
      )}
      <Expenses expensesState={expensesState} setShowModal={setShowModal} />
    </>
  );
}

export default App;
