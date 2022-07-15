import Container from "../UI/Container";
import ExpenseItem from "./ExpenseItem";
import AddButton from "../UI/AddButton";

import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expensesState.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        id={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
        quantity={item.quantity}
        deleteExpenseHandler={props.deleteExpenseHandler}
      />
    );
  });

  let dates = new Set();

  expenses.forEach((expense) => dates.add(expense.props.date));

  dates = [...dates];

  const expensesGroup = dates.map((date) => {
    return (
      <div key={dates.indexOf(date)}>
        {date}
        <hr />
        {expenses.filter((expenseItem) => {
          return expenseItem.props.date === date;
        })}
      </div>
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
      {expensesGroup}
    </Container>
  );
}

export default Expenses;
