import "./expenseCard.css";
import DateData from "./DateData";
import Card from "./Card";

const ExpenseCard = (props) => {
  return (
    <Card className="flex expense-card">
      <DateData date={props.date} />
      <div className="expense-name">{props.title}</div>
      <div className="expense-price">{props.amount}</div>
    </Card>
  );
};

export default ExpenseCard;
