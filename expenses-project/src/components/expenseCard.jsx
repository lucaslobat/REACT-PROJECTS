import "./expenseCard.css";
import DateData from "./DateData";
import Card from "./Card";

const ExpenseCard = (props) => {
  const clickHandler = () => {
    console.log("You clicked.");
  };

  return (
    <Card className="flex expense-card">
      <DateData date={props.date} />
      <div className="expense-name">{props.title}</div>
      <div className="expense-priec">{props.amount}</div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseCard;
