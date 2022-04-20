import "./TravelItem.css";
import locationPin from "../images/location-pin.png";

function TravelItem({ item }) {
  console.log(item.imageUrl);
  return (
    <div className="flex travel-item">
      <img className="travel-image" alt="travel" src={item.imageUrl}></img>
      <div className="flex travel-information">
        <span className="flex location-span">
          <img src={locationPin}></img>
          <span className="location-name">{item.location}</span>
          <a className="location-map" href={item.googleMapsUrl}>
            View on Google Maps
          </a>
        </span>
        <h2 className="item-title">{item.title}</h2>
        <span className="item-date">
          {item.startDate} - {item.endDate}
        </span>
        <p className="item-description">{item.description}</p>
      </div>
    </div>
  );
}

export default TravelItem;
