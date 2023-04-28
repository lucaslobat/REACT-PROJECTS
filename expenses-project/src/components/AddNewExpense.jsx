import "./AddNewExpense.css";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm.jsx";

const AddNewExpense = ({setExpensesState}) => {
  
  return (
    <div className="flex new-expense">
      <ExpenseForm  setExpensesState = {setExpensesState}/>
    </div>
  );
};

export default AddNewExpense;
