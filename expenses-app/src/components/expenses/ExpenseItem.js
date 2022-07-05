import { useState } from "react";

import Container from "../UI/Container";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [body, setBody] = useState(props.body);

  function changeTitle() {
    console.log(body);
  }

  return (
    <Container className="expense-item">
      <div>{props.date}</div>
      <div>{props.body}</div>
      <div>
        {props.price}
        <button onClick={changeTitle}>Change title</button>
      </div>
    </Container>
  );
}

export default ExpenseItem;
