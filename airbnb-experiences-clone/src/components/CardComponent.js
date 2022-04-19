import "./CardComponent.css";

import starIcon from "../images/start-icon.png";

function CardComponent({
  /* Al recibir los objetos como argumento,
  podemos desestructurarlos directamente al recibirlos */
  image,
  rating,
  location,
  description,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="flex card">
      {badgeText && <div className="badge-text">{badgeText}</div>}
      <img alt="card figure" className="card-image" src={image}></img>
      <div className=" card-body">
        <div className=" card-rating">
          <img alt="star-icon" className="card-star" src={starIcon}></img>
          <span>{rating}</span>
          <span className="grey-rating">(6) • {location}</span>
        </div>
        <div className="flex card-information">
          <p>{description}</p>
          <span>
            <span className="card-price">From ${price} </span>/ person
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;
