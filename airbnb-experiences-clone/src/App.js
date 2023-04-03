import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import CardComponent from "./components/CardComponent";
import cardsArray from "./components/CardsData";

function App() {
  /* Se itera sobre el array 'cardsArray' y por cada elemento dentro de él, retorna un <CardComponent/>
   donde sus propiedades son desestructuradas y pasadas como props a este*/
  const cards = cardsArray.map((card) => {
    return <CardComponent key={card.id} {...card} />;
  });

  return (
    <main className="container">
      <header className="flex header">
        <NavbarComponent />
        <HeroComponent />
      </header>
      <section className="flex experiences-section">
        <div className="flex cards-container">{cards}</div>
      </section>
    </main>
  );
}

export default App;
