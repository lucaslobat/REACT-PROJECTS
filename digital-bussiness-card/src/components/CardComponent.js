/* Images Imports */
import profilePicture from "../images/profile-picture.png";

/* Styles Import */
import "../components/CardComponent.css";

/* Component Imports */
import CardBodyComponent from "./CardBodyComponent";
import Footer from "./FooterComponent";
import FooterComponent from "./FooterComponent";

function CardComponent() {
  return (
    <div className="flex general-container">
      <div className="flex card">
        <img className="profile-image" src={profilePicture}></img>
        <CardBodyComponent />
        <FooterComponent />
      </div>
    </div>
  );
}

export default CardComponent;
