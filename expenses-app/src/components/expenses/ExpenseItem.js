import Container from "../UI/Container";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Container className="expense-item">
      <div>{props.quantity}</div>
      <div>{props.title}</div>
      <div>{props.price}</div>
      <button onClick={(e) => props.deleteExpenseHandler(e, props.id)}>
        Borrar
      </button>
    </Container>
  );
}

export default ExpenseItem;
