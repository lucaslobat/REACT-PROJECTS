import photoGroup from "../images/photo-group.png";
import "./HeroComponent.css";

function HeroPhotosComponent() {
  return (
    <>
      <img alt="photo-group" className="hero__photos" src={photoGroup}></img>
      <div className="flex hero__text">
        <h1 className="hero__text__h1">Online Experiences</h1>
        <p className="hero__text__paragraph">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.{" "}
        </p>
      </div>
    </>
  );
}

export default HeroPhotosComponent;
