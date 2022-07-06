import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import Modal from "./components/UI/Modal";
import ExpenseForm from "./components/ExpenseForm";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <ExpenseForm setShowModal={setShowModal} />}
      <Expenses showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
