import "./AddNewExpense.css";
import { useState } from "react";

const AddNewExpense = () => {
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
    setFormObject({
      title: "",
      amount: "",
      date: "",
    })
    console.log(formObject);
  }


  return (
    <div className="flex new-expense">
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
    </div>
  );
};

export default AddNewExpense;
