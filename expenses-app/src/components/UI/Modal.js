import "../UI/Modal.css";

import Container from "./Container";

function Modal(props) {
  function closeHandler() {
    props.setShowModal((prevValue) => !prevValue);
  }
  return (
    <Container className="modal-container">
      <div class="flex modal-content">
        <span class="close" onClick={closeHandler}>
          &times;
        </span>
        {props.children}
      </div>
    </Container>
  );
}

export default Modal;
