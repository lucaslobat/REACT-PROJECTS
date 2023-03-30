import { Temporal } from "@js-temporal/polyfill";
import "./DateData.css";

const DateData = (props) => {
  const dateObj = Temporal.PlainDate.from(props.date);
  return (
    <div className="expense-date">
      <div>{dateObj.day}/</div>
      <div>{dateObj.month}/</div>
      <div>{dateObj.year}</div>
    </div>
  );
};

export default DateData;
