import "./Navbar.css";
import logo from "../images/budiet-logo.png";

function Navbar() {
  return (
    <div className="flex navbar-component">
      <div className="flex logo-container">
        <img className="budiet-logo" src={logo} alt="budiet-logo" />
        <span className="budiet-span">BUDIET</span>
      </div>

      <input type="text" />
    </div>
  );
}

export default Navbar;
