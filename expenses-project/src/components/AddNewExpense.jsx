import "./AddNewExpense.css";

const AddNewExpense = () => {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="flex new-expense">
      <form>
        <div className="flex new-expense-form">
          <div className="flex inputContainer">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="flex inputContainer">
            <label>Amount</label>
            <input type="number" min="0.01" />
          </div>
          <div className="flex inputContainer">
            <label>Date</label>
            <input type="date" min="2023-01-01" />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddNewExpense;
