import "./AddButton.css";

function AddButton(props) {
  const classes = `add-button ${props.className}`;

  return (
    <button className={classes} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default AddButton;
