import "./InputElement.css";

function InputElement(props) {
  let optionKeys;
  let optionElements;

  if (props.name === "gender") {
    optionKeys = Object.keys(props.options);
    optionElements = optionKeys.map((item) => {
      return <option key={item}>{props.options[item]}</option>;
    });
  } else if (props.name === "pal") {
    optionKeys = Object.keys(props.options);
    optionElements = optionKeys.map((item) => {
      return (
        <option key={item} value={item}>
          {props.options[item]}
        </option>
      );
    });
  }

  return (
    <div className="flex form-input">
      {props.tagType === "input" ? (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <input
            key={props.id}
            name={props.name}
            type={props.typeAtt}
            placeholder={props.placeholder}
            onChange={props.onChangeHandler}
            value={props.value}
            required
          />
        </>
      ) : (
        <>
          <label htmlFor={props.name}>{props.label}</label>
          <select name={props.name} onChange={props.onChangeHandler} required>
            {optionElements}
          </select>
        </>
      )}
    </div>
  );
}

export default InputElement;
