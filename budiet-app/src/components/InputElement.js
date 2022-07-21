import "./InputElement.css";

function InputElement(props) {
  return (
    <div className="flex form-input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        value={props.value}
        min={props.min}
        max={props.max}
        required
      />
    </div>
  );
}

export default InputElement;
