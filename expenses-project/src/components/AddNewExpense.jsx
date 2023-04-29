import "./AddNewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";

const AddNewExpense = ({setExpensesState}) => {
  
  return (
    <div className="flex new-expense">
      <ExpenseForm  setExpensesState = {setExpensesState}/>
    </div>
  );
};

export default AddNewExpense;
