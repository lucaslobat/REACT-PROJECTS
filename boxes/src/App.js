import boxes from "./boxes";
import Box from "./Box";
import { React, useState } from "react";
import "./App.css";

function App() {
  // Declaración del estado inicializado con el array de objetos "boxes"
  const [arrayBoxes, setArrayBoxes] = useState(boxes);

  /**
   * Manejador de eventos el cuar reasigna el valor de .on a su negación
   * al hacer clic en el elemento.
   **/
  function handleToggle(e) {
    /* Recibe el id del elemento al que se le ha hecho clic y lo parse a un entero */
    const elementoActual = e;

    /**
     * La función de estado setArrayBoxes recibe una función callback
     * que recibe como parámetro la variable de estado (array) anterior.
     * Una vez tenemos acceso a ella, creamos una nueva variable
     * donde se guardarán los resultados de iterar sobre el array.
     *
     * Map a su vez recibe una callback que comprueba si el id
     * del elemento actual de la iteración coincide con elementoActual.
     * Si es true retorna un nuevo objeto donde se conservan sus
     * propiedades pero se reasigna su propiedad .on.
     * Si es false retorna el objeto tal cual.
     **/
    setArrayBoxes((previousArray) => {
      const nuevoArray = previousArray.map((item) => {
        return item.id === elementoActual ? { ...item, on: !item.on } : item;
      });

      return nuevoArray;
    });
  }
  /* Se itera sobre arrayBoxes y se renderiza un Componente Box
   * para cada item del array, se le pasa como props el objeto del array
   */
  const boxElements = arrayBoxes.map((box) => {
    /* La prop "toggle" aquí es una closure, que devuelve una función, que recibe un parámetro de un scope externo  */
    return <Box toggle={() => handleToggle(box.id)} key={box.id} on={box.on} />;
  });

  /* Renderiza el array de elementos <div> dentro de <main> */
  return <main className="main">{boxElements}</main>;
}

export default App;
