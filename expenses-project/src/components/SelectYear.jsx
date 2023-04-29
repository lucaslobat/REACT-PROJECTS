import Card from "../components/Card";
import "./SelectYear.css";

const SelectYear = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Card className="flex select-year">
      <span>Select by Year</span>
      <select onChange={handleChange}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </Card>
  );
};

export default SelectYear;
