import { useState } from "react";

import Modal from "../UI/Modal";
import ExpenseInput from "./ExpenseInput";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const inputValues = {
    id: "",
    date: "",
    title: "",
    price: "",
  };

  /* STATES */
  const [expenseObject, setExpenseObject] = useState(inputValues);

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
    setExpenseObject({ id: "", date: "", title: "", price: "" });

    // Close the Modal
    props.setShowModal((prevState) => !prevState);
  }

  const inputObjects = [
    {
      id: 1,
      name: "date",
      type: "date",
      placeholder: "Enter the expense's date",
      label: "date",
    },
    {
      id: 2,
      name: "title",
      type: "text",
      placeholder: "Enter the expense's title",
      label: "title",
    },
    {
      id: 3,
      name: "price",
      type: "float",
      placeholder: "Enter the expense's price",
      label: "price",
    },
  ];

  const inputElements = inputObjects.map((item) => {
    return (
      <ExpenseInput
        key={item.id}
        {...item}
        value={expenseObject[item.name]}
        onChangeHandler={onChangeHandler}
      />
    );
  });

  return (
    <Modal title={"Add expense"} setShowModal={props.setShowModal}>
      <pre>{JSON.stringify(expenseObject, undefined, 2)}</pre>
      <form onSubmit={onSubmitHandler} className="flex expense-form">
        {inputElements}
        <button className="flex add-submit-button">Add expense</button>
      </form>
    </Modal>
  );
}

export default ExpenseForm;
