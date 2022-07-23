import { useState } from "react";

import Navbar from "./components/Navbar";
import FormulaForm from "./components/FormulaForm";
import UserInformation from "./components/UserInformation";

import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    gender: "Male",
    weight: "",
    height: "",
    age: "",
    pal: "0",
  });

  function toggleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <>
      <Navbar />
      <UserInformation toggleShowModal={toggleShowModal} userData={userData} />
      {showModal && (
        <FormulaForm
          toggleShowModal={toggleShowModal}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </>
  );
}

export default App;
