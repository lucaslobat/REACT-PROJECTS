import Card from "../components/Card";
import "./SelectYear.css";

const SelectYear = ({setSelectedYear,selectedYear}) => {
  
  const selectedYearHandler = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <Card className="flex select-year">
      <span>Select by Year</span>
      <select onChange={selectedYearHandler} value={selectedYear}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </Card>
  );
};

export default SelectYear;
