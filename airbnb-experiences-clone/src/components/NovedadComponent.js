import "./NovedadComponent.css";

function NovedadComponent(props) {
  return (
    <div className="flex novedad-card">
      <img alt="card figure" className="novedad-image" src={props.image}></img>
      <div className="image-text">
        <span>{props.titulo}</span>
      </div>
      <button>Ver todo</button>
    </div>
  );
}

export default NovedadComponent;
