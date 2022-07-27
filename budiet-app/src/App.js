import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import FormulaForm from "./components/FormulaForm";
import UserInformation from "./components/UserInformation";

import "./App.css";

function App() {
  localStorage.clear();
  const parsedArray = JSON.parse(localStorage.getItem("userData"));

  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState(parsedArray || []);

  function toggleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      {showModal && (
        <FormulaForm
          toggleShowModal={toggleShowModal}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {userData.length !== 0 ? (
        <>
          <Navbar />
          <UserInformation
            toggleShowModal={toggleShowModal}
            userData={userData}
          />
        </>
      ) : (
        <div className="flex no-data ">
          Currently you have no data
          <button onClick={toggleShowModal}>Add data</button>
        </div>
      )}
    </>
  );
}

export default App;
