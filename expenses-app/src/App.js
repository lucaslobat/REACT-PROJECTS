import { useState } from "react";

import Expenses from "./components/expenses/Expenses";
import Modal from "./components/UI/Modal";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <Modal setShowModal={setShowModal} />}
      <Expenses showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
