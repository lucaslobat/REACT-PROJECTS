import { useState } from "react";

import Modal from "../UI/Modal";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  /* STATES */
  const [expenseObject, setExpenseObject] = useState({
    id: "",
    date: "",
    body: "",
    price: "",
  });

  /* HANDLERS */
  function onChangeHandler(e) {
    let inputName = e.target.name;
    const inputValue = e.target.value;

    setExpenseObject((prevState) => {
      return {
        ...prevState,
        [inputName]: inputValue,
        id: props.expensesState.length + 1,
      };
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    props.setExpensesState((prevState) => {
      return [...prevState, expenseObject];
    });

    setExpenseObject({ id: "", date: "", body: "", price: "" });

    props.setShowModal((prevState) => !prevState);
  }

  return (
    <Modal title={"Add expense"} setShowModal={props.setShowModal}>
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
        <button className="flex add-submit-button">Add expense</button>
      </form>
    </Modal>
  );
}

export default ExpenseForm;
