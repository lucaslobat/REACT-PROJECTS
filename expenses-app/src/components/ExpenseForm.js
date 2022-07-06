import Modal from "./UI/Modal";
import "./ExpenseForm";

function ExpenseForm(props) {
  return (
    <Modal setShowModal={props.setShowModal}>
      <form>
        <label>Enter expense's title</label>
        <input type="text"></input>
      </form>
    </Modal>
  );
}

export default ExpenseForm;
