import Container from "../UI/Container";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

function Expenses() {
  const expensesArray = [
    {
      id: 1,
      date: "04/07/2022",
      body: "Tortillas 100% integrales",
      price: 1.7,
    },
    { id: 2, date: "04/07/2022", body: "Bebida de Avena", price: 0.9 },
    { id: 3, date: "04/07/2022", body: "Crema 100% cacahuete", price: 3.1 },
  ];

  const expenses = expensesArray.map((item) => {
    return (
      <ExpenseItem
        key={item.id}
        body={item.body}
        price={item.price}
        date={item.date}
      />
    );
  });

  return <Container className="expenses">{expenses}</Container>;
}

export default Expenses;
