import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import AddButton from "./components/UI/AddButton";

import "./App.css";

function App() {
  /* VARIABLES AND CONSTANTS */
  const expensesArray = [];

  /* STATES */
  const [expensesState, setExpensesState] = useState(expensesArray);
  const [showModal, setShowModal] = useState(false);

  function modalHandler() {
    setShowModal((prevState) => !prevState);
  }

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

      {expensesState.length !== 0 ? (
        <Expenses
          expensesState={expensesState}
          setShowModal={setShowModal}
          showModal={showModal}
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
