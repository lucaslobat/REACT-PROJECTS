import "./expenseCard.css";
import { useState } from "react";
import DateData from "./DateData";
import Card from "./Card";

const ExpenseCard = (props) => {
  const [amount, setAmount] = useState(props.amount);
  console.log("Component Reevaluated!");

  const clickHandler = () => {
    setAmount(() => "0.00");

    console.log(amount); //Cuando se ejecuta la función de estado, el valor no se cambia inmediatamente, si no que su cambio es postpuesto.
  };

  return (
    <Card className="flex expense-card">
      <DateData date={props.date} />
      <div className="expense-name">{props.title}</div>
      <div className="expense-priec">{amount}</div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseCard;
