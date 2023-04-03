import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NovedadesComponent from "./components/NovedadesComponent";
import CardComponent from "./components/CardComponent";
import experiencesCardsArray from "./components/CardsData";

function App() {
  /* Se itera sobre el array 'cardsArray' y por cada elemento dentro de él, retorna un <CardComponent/>
   donde sus propiedades son desestructuradas y pasadas como props a este*/
  const cards = experiencesCardsArray.map((card) => {
    return <CardComponent key={card.id} {...card} />;
  });

  return (
    <main className="flex container">
      <NavbarComponent />

      <section className="page-body">
        <NovedadesComponent />
        <section className="flex experiences-section">
          <h2 className="h2-title">Planea tu próximo viaje con la ayuda de anfitriones locales de todo el mundo</h2>
          <div className="flex cards-container">{cards}</div>
        </section>
      </section>

    </main>
  );
}

export default App;
