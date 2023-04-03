import photoGroup from "../images/photo-group.png";
import "./HeroComponent.css";

function HeroPhotosComponent() {
  return (
    <>
      <img alt="photo-group" className="hero__photos" src={photoGroup}></img>
      <div className="flex hero__text">
        <h1 className="hero__text__h1">Experiencias Online</h1>
        <p className="hero__text__paragraph">
          Planea tu próximo viaje con la ayuda de anfitriones locales de todo el
          mundo{" "}
        </p>
      </div>
    </>
  );
}

export default HeroPhotosComponent;
