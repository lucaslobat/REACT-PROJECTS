/* Images Imports */
import profilePicture from "../images/profile-picture.png";
import emailIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

/* Styles Import */
import "../components/InfoComponent.css";

/* Component Imports */
import CardBodyComponent from "./CardBodyComponent";

function InfoComponent() {
  return (
    <div className="flex general-container">
      <div className="flex main-container">
        <div className="flex main-container-information">
          <img className="profile-image" src={profilePicture}></img>
          <div className="flex data-section">
            <h1 className="main-container-name">Lucas Lobato</h1>
            <h2 className="main-container-occupation">Frontend Developer</h2>
            <h3 className="main-container-website">lucaslobato.website</h3>
            <div className="flex main-container-buttons">
              <button className="flex button email-button">
                <img src={emailIcon}></img>
                <span className="main-container-buttons__text">Email</span>
              </button>
              <button className="flex button linkedin-button">
                <img src={linkedinIcon}></img>
                <span className="main-container-buttons__text">LinkedIn</span>
              </button>
            </div>
          </div>
        </div>
        <CardBodyComponent />
      </div>
    </div>
  );
}

export default InfoComponent;
