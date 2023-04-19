import "./AddNewExpense.css";

const AddNewExpense = () => {
  return (
    <div className="new-expense">
      <form>
        <div>
          <div>
            <label>Title</label>
            <input type="text" />
          </div>
          <div>
            <label>Amount</label>
            <input type="number" min="0.01" />
          </div>
          <div>
            <label>Date</label>
            <input type="date" min="2023-01-01" />
          </div>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddNewExpense;
