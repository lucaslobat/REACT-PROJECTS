import "../UI/Modal.css";

import Container from "./Container";

function Modal(props) {
  function closeHandler() {
    props.setShowModal((prevValue) => !prevValue);
  }

  return (
    <Container className="modal-container">
      <div className="flex modal-content">
        <div className="flex modal-header">
          <h2>{props.title}</h2>
          <span className="close" onClick={closeHandler}>
            &times;
          </span>
        </div>
        {props.children}
      </div>
    </Container>
  );
}

export default Modal;
