import "./CardComponent.css";

import starIcon from "../images/start-icon.png";

function CardComponent(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="flex card">
      {badgeText && <div className="badge-text">{badgeText}</div>}
      <img alt="card figure" className="card-image" src={props.image}></img>
      <div className="flex card-body">
        <div className="card-rating">
          <img alt="star-icon" className="card-star" src={starIcon}></img>
          <span>{props.rating}</span>
          <span className="grey-rating">
            {" "}
            ({Math.floor(Math.random() * 100)}) • {props.location}
          </span>
        </div>

        <p>{props.description}</p>
          <span className="card-price">From ${props.price} / person </span>
      </div>
    </div>
  );
}

export default CardComponent;
