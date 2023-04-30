import "./DateData.css";

const DateData = ({date}) => {
  return (
    <div className="expense-date">
      <div>{date.day}/</div>
      <div>{date.month}/</div>
      <div>{date.year}</div>
    </div>
  );
};

export default DateData;
