import { useState, useEffect } from "react";

import Expenses from "./components/expenses/Expenses";
import ExpenseForm from "./components/AddExpense/ExpenseForm";
import AddButton from "./components/UI/AddButton";

import "./App.css";

function App() {
  /* # # # VARIABLES # # # */
  //This variable gets "expenses" from localStorage and parse it to an object.
  const parsedArray = JSON.parse(localStorage.getItem("expenses"));

  /* # # # STATES # # # */
  // Array state where all expenses are added
  const [expensesState, setExpensesState] = useState(parsedArray || []);

  // On this state we can modify if we are showing a modal or not;
  const [showModal, setShowModal] = useState(false);

  /* # # # EFFECTS # # # */

  /* Sets expensesState to localStorage as "expenses", once the app is loaded
  and after every state change*/
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expensesState));
  }, [expensesState]);

  /* # # # FUNCTIONS # # # */
  function modalHandler() {
    setShowModal((prevState) => !prevState);
  }

  function deleteExpenseHandler(e, expenseId) {
    console.log(e, expenseId);
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
          deleteExpenseHandler={deleteExpenseHandler}
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
