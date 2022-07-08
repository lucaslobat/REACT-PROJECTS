import Container from "../UI/Container";
import ExpenseItem from "./ExpenseItem";
import AddButton from "../UI/AddButton";

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
      <AddButton
        className="flex new-expense-button"
        onClick={addExpenseHandler}
      >
        +
      </AddButton>
      {expenses}
    </Container>
  );
}

export default Expenses;
