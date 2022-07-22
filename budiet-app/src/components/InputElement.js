import "./InputElement.css";

function InputElement(props) {
  let optionKeys;

  props.options ? (optionKeys = Object.keys(props.options)) : (optionKeys = []);

  const optionElements = optionKeys.map((item) => {
    return <option>{props.options[item]}</option>;
  });
  return (
    <div className="flex form-input">
      {props.tagType === "input" ? (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            name={props.name}
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
            value={props.value}
            required
          />
        </>
      ) : (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <select>{optionElements}</select>
        </>
      )}
    </div>
  );
}

export default InputElement;
