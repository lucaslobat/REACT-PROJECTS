import "./UserInformation.css";

import userProfile from "../images/profile_user.jpg";

import Container from "../ui/Container";
import Button from "../ui/Button";

function UserInformation(props) {
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

      <div className="flex user-information-container">
        <img
          className="user-profile-image"
          src={userProfile}
          alt="user-profile-avatar"
        />
        <div className="user-caloric-info">
          <span>Basal Metabolism</span>
        </div>
      </div>
    </Container>
  );
}

export default UserInformation;
