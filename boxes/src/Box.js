import { useState } from "react";
function Box(props) {
  /**
   * Se inicia un estado cuyo valor inicial es el valor de la propiedad .on
   * del objeto.
   **/
  const [on, setOn] = useState(props.boxObject.on);

  /**
   * Manejador de eventos el cuar reasigna el valor de .on a su negación
   * al hacer clic en el elemento.
   **/
  function handleToggle() {
    setOn((prevOn) => (prevOn = !prevOn));
  }

  /**
   * Este operador ternario mira a la propiedad box.on
   * en cada elemento del array para determinar
   * qué clase css aplicarle al elemento div.
   **/
  const boxClass = on ? "box-on" : "box-off";

  return (
    <div
      className={`box ${boxClass}`}
      id={props.boxObject.id}
      /* key={props.boxObject.id} */
      onClick={handleToggle}
    ></div>
  );
}

export default Box;
