import { useState } from "react";

import Modal from "../UI/Modal";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [expenseObject, setExpenseObject] = useState({
    id: "",
    date: "",
    body: "",
    price: "",
  });

  function onChangeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setExpenseObject((prevState) => {
      return { ...prevState, [inputName]: inputValue };
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();
    console.log(expenseObject);
    setExpenseObject({ id: "", date: "", body: "", price: "" });
  }

  return (
    <Modal setShowModal={props.setShowModal}>
      <form onSubmit={onSubmitHandler} className="flex expense-form">
        <div className=" flex form-field">
          <label htmlFor="expense-date">Select expense's date</label>
          <input
            name="date"
            id="expense-date"
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            placeholder="Select expense date"
            onChange={onChangeHandler}
            value={expenseObject.date}
          />
        </div>

        <div className=" flex form-field">
          <label htmlFor="expense-title">Enter expense's title</label>
          <input
            name="body"
            id="expense-title"
            type="text"
            placeholder="Select expense title"
            onChange={onChangeHandler}
            value={expenseObject.body}
          />
        </div>

        <div className=" flex form-field">
          <label htmlFor="expense-price">Enter expense's price</label>
          <input
            name="price"
            id="expense-price"
            type="float"
            placeholder="Select expense price"
            onChange={onChangeHandler}
            value={expenseObject.price}
          />
        </div>
        <button className="flex add-submit-button">+</button>
      </form>
    </Modal>
  );
}

export default ExpenseForm;
