import "./InputElement.css";

function InputElement(props) {
  let optionKeys;

  props.options ? (optionKeys = Object.keys(props.options)) : (optionKeys = []);

  const optionElements = optionKeys.map((item) => {
    return <option key={item}>{props.options[item]}</option>;
  });
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
          <select
            name={props.name}
            onChange={props.onChangeHandler}
            value={props.value}
            required
          >
            {optionElements}
          </select>
        </>
      )}
    </div>
  );
}

export default InputElement;
