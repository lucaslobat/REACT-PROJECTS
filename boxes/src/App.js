import boxes from "./boxes";
import Box from "./Box";
import { React, useState } from "react";
import "./App.css";

function App() {
  // Declaración del estado inicializado con el array de objetos "boxes"
  const [arrayBoxes] = useState(boxes);

  /* Se itera sobre arrayBoxes y se renderiza un Componente Box
   * para cada item del array, se le pasa como props el objeto del array
   */
  const boxElements = arrayBoxes.map((box) => {
    return <Box boxObject={box} key={box.id} />;
  });

  /* Renderiza el array de elementos <div> dentro de <main> */
  return <main className="main">{boxElements}</main>;
}

export default App;
