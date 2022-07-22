import { useState } from "react";

import "./FormulaForm.css";

import Modal from "../ui/Modal";
import InputElement from "./InputElement";
import Button from "../ui/Button";

function FormulaForm(props) {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    gender: "",
    weight: "",
    height: "",
    age: "",
  });

  const inputObjects = [
    {
      id: 1,
      tagType: "input",
      nameAtt: "name",
      typeAtt: "text",
      label: "name",
    },
    {
      id: 2,
      tagType: "select",
      nameAtt: "gender",
      label: "gender",
      options: {
        0: "Male",
        1: "Female",
      },
    },
  ];

  const inputElements = inputObjects.map((item) => {
    return (
      <InputElement
        key={item.id}
        onChangeHandler={onChangeHandler}
        value={userData[item.name]}
        {...item}
      />
    );
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <Modal toggleShowModal={props.toggleShowModal}>
      <pre>{JSON.stringify(userData, undefined, 2)}</pre>
      <form className="flex user-data-form">
        {inputElements}
        <Button>Calculate TDEE</Button>
      </form>
    </Modal>
  );
}

export default FormulaForm;
