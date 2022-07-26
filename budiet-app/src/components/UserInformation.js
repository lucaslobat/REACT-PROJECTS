import "./UserInformation.css";

import userProfile from "../images/profile_user.jpg";

import Container from "../ui/Container";
import Button from "../ui/Button";

function UserInformation(props) {
  let BMR;

  props.userData.gender === "Male"
    ? (BMR =
        66.473 +
        13.7516 * props.userData.weight +
        5.0033 * props.userData.height -
        6.755 * props.userData.age)
    : (BMR =
        655.0955 +
        9.5634 * props.userData.weight +
        (1.8449 * props.userData.height - 4.6756 * props.userData.age));

  return (
    <Container className="flex user-information-card">
      <div className="flex user-information-header">
        <h2 className="user-information-title">User Information</h2>
        <Button
          toggleShowModal={props.toggleShowModal}
          className="flex add-button"
        >
          +
        </Button>
      </div>

      <div className="flex diet-information-container">
        <div className="flex user-information">
          <div className="flex user-avatar-name">
            <img
              className="user-profile-image"
              src={userProfile}
              alt="user-profile-avatar"
            />
            <span className="user-name">{props.userData.name}</span>
          </div>
          <div className="flex user-body-information">
            <span>Age - {props.userData.age}</span>
            <span>Weight - {props.userData.weight}kg</span>
            <span>Height - {props.userData.height}cm</span>
          </div>
        </div>
        <div className="basal-metabolic-rate">
          <span>{BMR.toFixed(1)} kcal/day</span>
        </div>
      </div>
    </Container>
  );
}

export default UserInformation;
