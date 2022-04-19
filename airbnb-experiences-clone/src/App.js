import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import CardComponent from "./components/CardComponent";
import cardsData from "./components/CardsData";

function App() {
  const cards = cardsData.map((card) => {
    return (
      <CardComponent
        key={card.id}
        /* Al desestructurar en los atributos del elemento React 
    voltamos el contenido del nuevo array (objetos) a los que podemos
    acceder como props en el Componente. También podemos pasar el 
    objeto sin desestructurar y después aceder a sus propiedades con .propiedad
    dentro del Componente*/
        {...card}
      />
    );
  });

  return (
    <main className="container">
      <header className="flex header">
        <NavbarComponent />
        <HeroComponent />
      </header>
      <section className="flex cards-container">{cards}</section>
    </main>
  );
}

export default App;
