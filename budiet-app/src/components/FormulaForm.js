import { useState } from "react";

import "./FormulaForm.css";

import Modal from "../ui/Modal";
import InputElement from "./InputElement";

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
      type: "text",
      placeholder: "Enter your name",
      label: "name",
    },
    {
      id: 2,
      name: "gender",
      type: "text",
      placeholder: "Enter your gender",
      label: "gender",
    },
    {
      id: 3,
      name: "weight",
      type: "number",
      placeholder: "Enter your weight in kg",
      label: "weight",
    },
    {
      id: 4,
      name: "height",
      type: "number",
      placeholder: "Enter your height in cm",
      label: "height",
    },
    {
      id: 5,
      name: "age",
      type: "number",
      placeholder: "Enter your age",
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
      <form className="flex user-data-form">{inputElements}</form>
    </Modal>
  );
}

export default FormulaForm;
