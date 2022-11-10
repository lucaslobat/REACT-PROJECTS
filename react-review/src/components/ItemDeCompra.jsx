import { useState } from "react";

import "./ItemDeCompra.css";

function ItemDeCompra(props) {
  const [importe, setImporte] = useState(props.importe);

  const cambiarImporteHandler = () => {
    setImporte((oldValue) => {
      return oldValue + 1;
    });
  };

  return (
    <div className="item-de-compra">
      <div className="aligned">{props.fecha}</div>
      <div className="aligned">{props.descripcion}</div>
      <div className="aligned">{importe}</div>
      <button onClick={cambiarImporteHandler}>Cambiar importe</button>
    </div>
  );
}

export default ItemDeCompra;
