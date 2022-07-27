import "./FormulaForm.css";
import { useState } from "react";
import Modal from "../ui/Modal";
import InputElement from "./InputElement";

function FormulaForm(props) {
  const [userObject, setUserObject] = useState({
    name: "",
    gender: "Male",
    weight: "",
    height: "",
    age: "",
    pal: "0",
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
      label: "weight(kg)",
    },
    {
      id: 4,
      name: "height",
      tagType: "input",
      nameAtt: "height",
      typeAtt: "number",
      label: "height(cm)",
    },
    {
      id: 5,
      name: "age",
      tagType: "input",
      nameAtt: "age",
      typeAtt: "number",
      label: "age",
    },
    {
      id: 6,
      name: "pal",
      tagType: "select",
      nameAtt: "pal",
      label: "PAL",
      options: {
        1.2: "Little/no exercise (sedentary lifestyle)",
        1.375: "Light exercise 1-2 times a week",
        1.55: "Moderate exercise 2-3 times a week",
        1.725: "Hard exercise 4-5 times a week",
        1.9: "Physical job or hard exercise 6-7 times a week",
        2.0: "Professional athlete",
      },
    },
  ];

  const inputElements = inputObjects.map((item) => {
    return (
      <InputElement
        key={item.id}
        onChangeHandler={onChangeHandler}
        value={userObject[item.name]}
        {...item}
      />
    );
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setUserObject((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function onSubmitHandler(e) {
    e.preventDefault();

    props.setUserData((prevState) => {
      return [...prevState, userObject];
    });

    setUserObject({
      name: "",
      gender: "Male",
      weight: "",
      height: "",
      age: "",
      pal: "0",
    });

    props.toggleShowModal((prevState) => !prevState);
  }

  return (
    <Modal toggleShowModal={props.toggleShowModal}>
      <form onSubmit={onSubmitHandler} className="flex user-data-form">
        {inputElements}
        <button>Calculate TDEE</button>
      </form>
    </Modal>
  );
}

export default FormulaForm;
