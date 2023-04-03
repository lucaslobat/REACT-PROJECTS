import "./index.css";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <Container />
  </>
);
