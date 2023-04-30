import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = ({setExpensesState}) => {

  const [formObject, setFormObject] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setFormObject((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setFormObject((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setFormObject((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setExpensesState( prevState => {
      return [...prevState,{...formObject,id:prevState.length + 1}]
    })
    
    setFormObject({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex new-expense-form">
        <div className="flex inputContainer">
          <label>Title</label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={formObject.title}
          />
        </div>
        <div className="flex inputContainer">
          <label>Amount</label>
          <input
            type="number"
            onChange={amountChangeHandler}
            value={formObject.amount}
          />
        </div>
        <div className="flex inputContainer">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            onChange={dateChangeHandler}
            value={formObject.date}
          />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default ExpenseForm;