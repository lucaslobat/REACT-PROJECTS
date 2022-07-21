import "./Button.css";

function Button(props) {
  const classes = `ui-button ${props.className}`;
  return (
    <button onClick={props.toggleShowModal} className={classes}>
      {props.children}
    </button>
  );
}

export default Button;
