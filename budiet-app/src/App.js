import { useState } from "react";

import Navbar from "./components/Navbar";

import "./App.css";
import UserInformation from "./components/UserInformation";

function App() {
  const [showModal, setShowModal] = useState(false);

  function toggleShowModal() {
    setShowModal((prevState) => !prevState);
  }

  return (
    <>
      <Navbar />
      <UserInformation toggleShowModal={toggleShowModal} />
    </>
  );
}

export default App;
