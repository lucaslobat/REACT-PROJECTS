import "./App.css";
import ExpenseCard from "./components/expenseCard";
import AddNewExpense from "./components/AddNewExpense";
import Card from "./components/Card";
import SelectYear from "./components/SelectYear";
import { Temporal } from "@js-temporal/polyfill";

import { useState } from "react";

const EXPENSESOBJECTS = [
  {
    id: "e1",
    date: Temporal.PlainDate.from("2023-03-27"),
    title: "Mechanical Keyboard",
    amount: 52,
  },
  {
    id: "e2",
    date: Temporal.PlainDate.from("2023-03-27"),
    title: "Lunch El Cateto",
    amount: 30,
  },
  {
    id: "e3",
    date: Temporal.PlainDate.from("2023-03-27"),
    title: "Groceries Mercadona",
    amount: 45,
  },
];

function App() {
  const [expensesState, setExpensesState] = useState(EXPENSESOBJECTS);
  const [selectedYear, setSelectedYear] = useState("2021");

  console.log(expensesState);

  const expenseInstances = expensesState.map((item, index) => {
    if (item.date.year == selectedYear) {
      return (
        <ExpenseCard
          key={index}
          date={item.date}
          title={item.title}
          amount={item.amount}
        />
      );
    }
  });

  return (
    <Card className="flex container-card">
      <AddNewExpense setExpensesState={setExpensesState} />
      <SelectYear
        setSelectedYear={setSelectedYear}
        selectedYear={selectedYear}
      />
      {expenseInstances}
    </Card>
  );
}

export default App;
