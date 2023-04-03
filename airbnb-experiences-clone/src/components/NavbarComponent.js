import airbnbLogo from "../images/airbnb-logo.png";
import "./NavbarComponent.css";
function NavbarComponent() {
  return (
    <nav className="navbar">
      <div className="airbnb-logo-container"><img className="airbnb-logo" src={airbnbLogo} alt="airbnb-logo"></img></div>

    </nav>
  );
}

export default NavbarComponent;
