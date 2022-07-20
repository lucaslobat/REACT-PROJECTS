import "./UserInformation.css";

import userProfile from "../images/profile_user.jpg";

import Container from "../ui/Container";

function UserInformation() {
  return (
    <Container className="flex user-information-card">
      <h2 className="user-information-title">User Information</h2>
      <div className="flex user-information-container">
        <img className="user-profile-image" src={userProfile} />
        <div className="user-caloric-info">
          <span>Basal Metabolism</span>
        </div>
      </div>
    </Container>
  );
}

export default UserInformation;
