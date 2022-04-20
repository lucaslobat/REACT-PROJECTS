import worldIcon from "../images/world-icon.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="flex navbar">
      <div className="flex nav--content">
        <img alt="world" src={worldIcon}></img>
        <span>My travel journal.</span>
      </div>
    </nav>
  );
}

export default Navbar;
