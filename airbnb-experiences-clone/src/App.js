import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import NovedadComponent from "./components/NovedadComponent";
import CardComponent from "./components/CardComponent";
import experiencesCardsArray from "./components/CardsData";
import FooterComponent from "./components/FooterComponent"
import { novedadesArray } from "./components/CardsData";

function App() {
  /* Se itera sobre el array 'cardsArray' y por cada elemento dentro de él, retorna un <CardComponent/>
   donde sus propiedades son desestructuradas y pasadas como props a este*/
  const cards = experiencesCardsArray.map((card) => {
    return <CardComponent key={card.id} {...card} />;
  });

  const novedades = novedadesArray.map((item) => {
    return <NovedadComponent key={item.id} {...item} />;
  });

  return (
    <main className="flex container">
      <NavbarComponent />

      <section className="flex page-body">
        <section className="flex novedades-section">
          <h2>Novedades de esta semana</h2>
          <div className="flex novedades-container">{novedades}</div>
        </section>

        <section className="flex experiences-section">
          <h2 className="h2-title">
            Planea tu próximo viaje con la ayuda de anfitriones locales de todo
            el mundo
          </h2>
          <div className="flex cards-container">{cards}</div>
        </section>
      </section>
      <FooterComponent/>
    </main>
  );
}

export default App;
