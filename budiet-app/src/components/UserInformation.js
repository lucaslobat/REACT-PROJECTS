import "./UserInformation.css";
import userProfile from "../images/profile_user.jpg";

import Container from "../ui/Container";

function UserInformation(props) {
  const { name, gender, weight, height, age, pal, dietPlan } =
    props.userData[0];
  let BMR;

  gender === "Male"
    ? (BMR = 66.473 + 13.7516 * weight + 5.0033 * height - 6.755 * age)
    : (BMR = 655.0955 + 9.5634 * weight + (1.8449 * height - 4.6756 * age));

  let TEE = BMR * pal;
  let totalCaloriesGoal =
    dietPlan === "gain weight"
      ? TEE + (TEE / 100) * 20
      : TEE - (TEE / 100) * 20;

  return (
    <Container className="flex user-information-card">
      <div className="flex user-information-header">
        <h2 className="user-information-title">User Information</h2>
      </div>

      <div className="flex diet-information-container">
        <div className="flex user-information">
          <div className="flex user-avatar-name">
            <img
              className="user-profile-image"
              src={userProfile}
              alt="user-profile-avatar"
            />
            <span className="user-name">{name}</span>
          </div>
          <div className="flex user-body-information">
            <span>Age - {age}</span>
            <span>Weight - {weight} kg</span>
            <span>Height - {height} cm</span>
          </div>
        </div>
        <div className="flex caloric-information">
          <span> Basal Metabolic Rate (BMR): {BMR.toFixed(1)} kcal/day</span>
          <span>
            {" "}
            Total Energy Expenditure (TEE): {TEE.toFixed(1)} kcal/day
          </span>
          <span>
            {" "}
            Total Calories Goal (TCG): {totalCaloriesGoal.toFixed(1)} kcal/day
          </span>
        </div>
      </div>
    </Container>
  );
}

export default UserInformation;
