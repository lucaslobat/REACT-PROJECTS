import "./AddNewExpense.css";
import { useState } from "react";

const AddNewExpense = () => {
  /* const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(""); */

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

  console.log(formObject);

  return (
    <div className="flex new-expense">
      <form>
        <div className="flex new-expense-form">
          <div className="flex inputContainer">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="flex inputContainer">
            <label>Amount</label>
            <input type="number" min="0.01" onChange={amountChangeHandler} />
          </div>
          <div className="flex inputContainer">
            <label>Date</label>
            <input type="date" min="2023-01-01" onChange={dateChangeHandler} />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewExpense;
