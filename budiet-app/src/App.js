import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import FormulaForm from "./components/FormulaForm";
import UserInformation from "./components/UserInformation";

import "./App.css";

function App() {
  localStorage.clear();
  const parsedArray = JSON.parse(localStorage.getItem("userData"));

  // Variable y función de estado para determinar si queremos mostrar un modal o no.
  const [showModal, setShowModal] = useState(false);

  // El operador lógico OR (disyunción lógica) establece el primer valor truthy como valor inicial del estado.
  const [userData, setUserData] = useState(parsedArray || []);

  // Efecto para establecer lo que tengamos en "userData" en el almacenamiento local.
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <>
      {/* El operador lógico AND (conyunción lógica) devuelve el valor del último operador truthy si ambos son true */}
      {showModal && (
        <FormulaForm
          toggleShowModal={setShowModal}
          userData={userData}
          setUserData={setUserData}
        />
      )}
      {/* Si nuestro array es mayor que 0 entonces se muestra los componentes Navbar y UserInformation, caso contrario se muestra <div>*/}
      {userData.length > 0 ? (
        <>
          <Navbar />
          <UserInformation toggleShowModal={setShowModal} userData={userData} />
        </>
      ) : (
        <div className="flex no-data ">
          Currently you have no data
          <button onClick={setShowModal}>Add data</button>
        </div>
      )}
    </>
  );
}

export default App;
