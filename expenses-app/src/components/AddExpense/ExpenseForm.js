import { useState } from "react";

import Modal from "../UI/Modal";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const expenseValues = {
    id: "",
    date: "",
    body: "",
    price: "",
  };

  /* STATES */
  const [expenseObject, setExpenseObject] = useState(expenseValues);
  const [formErrors, setFormErrors] = useState({});

  /* HANDLERS */
  function onChangeHandler(e) {
    const { name, value } = e.target;

    setExpenseObject((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: props.expensesState.length + 1,
      };
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    // Add the expenseObject to EXPENSES STATE
    props.setExpensesState((prevState) => {
      return [...prevState, expenseObject];
    });

    // Clear the fields from the inputs
    setExpenseObject({ id: "", date: "", body: "", price: "" });

    // Close the Modal
    props.setShowModal((prevState) => !prevState);

    // Set the form errors
    setFormErrors(validateForm(expenseObject));
  }

  function validateForm(expenseValues) {
    const errors = {};

    if (!expenseValues.date) {
      errors.dateError = "A date is required";
    }

    if (!expenseValues.body) {
      errors.bodyError = "A title is required";
    }

    if (!expenseValues.price) {
      errors.priceError = "A price is required";
    }

    return errors;
  }

  return (
    <Modal title={"Add expense"} setShowModal={props.setShowModal}>
      <pre>{JSON.stringify(expenseObject, undefined, 2)}</pre>
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
