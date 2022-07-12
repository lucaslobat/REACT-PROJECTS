import Container from "../UI/Container";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Container className="expense-item">
      <div>{props.date}</div>
      <div>{props.title}</div>
      <div>{props.price}</div>
    </Container>
  );
}

export default ExpenseItem;
