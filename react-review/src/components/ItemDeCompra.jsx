import "./ItemDeCompra.css";

function ItemDeCompra(props) {
  const changeTituloHandler = () => {
    console.log("Click!");
  };

  return (
    <div className="item-de-compra">
      <div className="aligned">{props.fecha}</div>
      <div className="aligned">{props.descripcion}</div>
      <div className="aligned">{props.importe}</div>
      <button onClick={changeTituloHandler}>Cambiar título</button>
    </div>
  );
}

export default ItemDeCompra;
