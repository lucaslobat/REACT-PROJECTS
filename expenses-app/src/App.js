import { useState, useEffect } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import AddButton from "./components/UI/AddButton";

import "./App.css";

function App() {
  const parsedArray = JSON.parse(localStorage.getItem("expenses"));

  /* STATES */
  const [expensesState, setExpensesState] = useState(parsedArray || []);
  const [showModal, setShowModal] = useState(false);

  /* This effect sets expensesArray to localStorage with the key "expenses"*/
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expensesState));
  }, [expensesState]);

  function modalHandler() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <>
      {showModal && (
        <ExpenseForm
          setExpensesState={setExpensesState}
          setShowModal={setShowModal}
          expensesState={expensesState}
        />
      )}

      {expensesState.length !== 0 ? (
        <Expenses
          setShowModal={setShowModal}
          showModal={showModal}
          expensesState={expensesState}
        />
      ) : (
        <div className="no-expenses flex">
          Currently you have no expenses
          <AddButton className="first-expense-button" onClick={modalHandler}>
            Add expense
          </AddButton>
        </div>
      )}
    </>
  );
}

export default App;
