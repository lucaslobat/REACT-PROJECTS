import "./App.css";
import Navbar from "./components/Navbar";
import TravelItem from "./components/TravelItem";

import travelData from "./components/TravelData";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex container">
        {travelData.map((item) => {
          return <TravelItem key={item.id} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
