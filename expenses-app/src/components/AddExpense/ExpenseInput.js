import "./ExpenseInput.css";

function ExpenseInput(props) {
  return (
    <div className="flex form-field">
      <label htmlFor={props.name}>{props.label} </label>
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChangeHandler}
        value={props.value}
        required
      />
    </div>
  );
}

export default ExpenseInput;
