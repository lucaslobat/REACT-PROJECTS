import "./FormulaForm.css";

import Modal from "../ui/Modal";
import InputElement from "./InputElement";

function FormulaForm(props) {
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
        0: "Little/no exercise (sedentary lifestyle)",
        1: "Light exercise 1-2 times a week",
        2: "Moderate exercise 2-3 times a week",
        3: "Hard exercise 4-5 times a week",
        4: "Physical job or hard exercise 6-7 times a week",
        5: "Professional athlete",
      },
    },
  ];

  const inputElements = inputObjects.map((item) => {
    return (
      <InputElement
        key={item.id}
        onChangeHandler={onChangeHandler}
        value={props.userData[item.name]}
        {...item}
      />
    );
  });

  function onChangeHandler(e) {
    const { name, value } = e.target;

    props.setUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleButton(e) {
    props.toggleShowModal();
  }

  return (
    <Modal toggleShowModal={props.toggleShowModal}>
      <form className="flex user-data-form">
        {inputElements}
        <button onClick={handleButton}>Calculate TDEE</button>
      </form>
    </Modal>
  );
}

export default FormulaForm;
