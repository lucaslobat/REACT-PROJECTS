function Box(props) {
  /**
   * Este operador ternario mira a la propiedad box.on
   * en cada elemento del array para determinar
   * qué clase css aplicarle al elemento div.
   **/
  const boxClass = props.box.on ? "box-on" : "box-off";

  return (
    <div
      className={`box ${boxClass}`}
      id={props.box.id}
      onClick={props.toggle}
    ></div>
  );
}

export default Box;
