import { Temporal } from "@js-temporal/polyfill";

import "./App.css";

import ItemDeCompra from "./components/ItemDeCompra";

function App() {
  const fechaObject = Temporal.Now.plainDateISO();
  const fechaFinal = fechaObject.toLocaleString("en-GB");

  const itemsDeCompra = [
    {
      id: "i1",
      fecha: fechaFinal,
      descripcion: "Compras Mercadona",
      importe: 22.0,
    },
    {
      id: "i2",
      fecha: fechaFinal,
      descripcion: "Burrito Taconacho",
      importe: 5.5,
    },
    { id: "i3", fecha: fechaFinal, descripcion: "Piñas colada", importe: 10 },
  ];

  const mappedItemsDeCompra = itemsDeCompra.map((item, index) => {
    return (
      <ItemDeCompra
        key={index}
        fecha={item.fecha}
        descripcion={item.descripcion}
        importe={item.importe}
      />
    );
  });

  return mappedItemsDeCompra;
}

export default App;
