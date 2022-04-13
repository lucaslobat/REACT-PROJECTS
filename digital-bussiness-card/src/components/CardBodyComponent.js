import "./CardBodyComponent.css";

import AboutComponent from "./AboutComponent";
import PersonalInfoComponent from "./PersonalInfoComponent";
import InterestsComponent from "./InterestsComponent";

function CardBodyComponent() {
  return (
    <div className="flex card-body">
      <PersonalInfoComponent />
      <AboutComponent />
      <InterestsComponent />
    </div>
  );
}

export default CardBodyComponent;
