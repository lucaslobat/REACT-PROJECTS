import airbnbLogo from "../images/airbnb-logo.png";
import "./NavbarComponent.css";
function NavbarComponent() {
  return (
    <nav className="navbar">
      <img className="airbnb-logo" src={airbnbLogo} alt="airbnb-logo"></img>
    </nav>
  );
}

export default NavbarComponent;
