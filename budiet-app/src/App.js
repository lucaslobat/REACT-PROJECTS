import { useState } from "react";

import Navbar from "./components/Navbar";
import FormulaForm from "./components/FormulaForm";
import UserInformation from "./components/UserInformation";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <>
      <Navbar />
      <UserInformation toggleShowModal={toggleShowModal} />
      {showModal && <FormulaForm toggleShowModal={toggleShowModal} />}
    </>
  );
}

export default App;
