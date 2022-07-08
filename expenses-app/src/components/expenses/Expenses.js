import Container from "../UI/Container";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expensesState.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        body={item.body}
        price={item.price}
        date={item.date}
      />
    );
  });

  function addExpenseHandler() {
    props.setShowModal((prevValue) => !prevValue);
  }

  return (
    <Container className="expenses">
      <button className="flex add-expense-button" onClick={addExpenseHandler}>
        ✎
      </button>
      {expenses}
    </Container>
  );
}

export default Expenses;
