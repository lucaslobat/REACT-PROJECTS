import "./ItemDeCompra.css";

function ItemDeCompra(props) {
  return (
    <div className="item-de-compra">
      <div className="item-de-compra__fecha">{props.fecha}</div>
      <div className="item-de-compra__descripción">{props.descripcion}</div>
      <div className="item-de-compra__importe">{props.importe}</div>
    </div>
  );
}

export default ItemDeCompra;
