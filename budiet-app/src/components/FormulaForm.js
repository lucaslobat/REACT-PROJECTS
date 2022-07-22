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
      name: "name",
      tagType: "input",
      nameAtt: "name",
      typeAtt: "text",
      label: "name",
    },
    {
      id: 2,
      name: "gender",
      tagType: "select",
      nameAtt: "gender",
      label: "gender",
      options: {
        0: "Male",
        1: "Female",
      },
    },
    {
      id: 3,
      name: "weight",
      tagType: "input",
      nameAtt: "weight",
      typeAtt: "number",
      label: "weight",
    },
    {
      id: 4,
      name: "height",
      tagType: "input",
      nameAtt: "height",
      typeAtt: "number",
      label: "height",
    },
    {
      id: 5,
      name: "age",
      tagType: "input",
      nameAtt: "age",
      typeAtt: "number",
      label: "age",
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
