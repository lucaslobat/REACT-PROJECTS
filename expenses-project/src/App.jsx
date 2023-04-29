import "./App.css";
import ExpenseCard from "./components/expenseCard";
import AddNewExpense from "./components/AddNewExpense";
import Card from "./components/Card";
import SelectYear from "./components/SelectYear";

import { useState } from "react";

function App() {
  const expenseObjects = [
    { id: "e1", date: "2023-03-25", title: "Mechanical Keyboard", amount: 52 },
    { id: "e2", date: "2023-03-27", title: "Lunch El Cateto", amount: 30 },
    { id: "e3", date: "2023-03-26", title: "Groceries Mercadona", amount: 45 },
  ];

  const [expensesState, setExpensesState] = useState(expenseObjects);


  const expenseInstances = expensesState.map((item) => {
    return (
      <ExpenseCard
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    );
  });

  return (
    <Card className="flex container-card">
      <AddNewExpense setExpensesState = {setExpensesState}/>
      <SelectYear/>
      {expenseInstances}
    </Card>
  );
}

export default App;
