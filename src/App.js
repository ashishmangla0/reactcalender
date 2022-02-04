import logo from "./logo.svg";
import { useState } from "react";

import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import "./App.css";
function App() {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
    color: "#F2F2F2",
  };
  // const handleSelect = (date) => {
  //   console.log(date); // native Date object
  //   setSelectDate([])
  // };

  const [state, setState] = useState([
    {
      startDate: new Date(),

      endDate: new Date(),

      key: "selection",

      color: '#F2F2F2',
    },
  ]);

  return (
    <div className="App">
      <div>asdsd asd asdas das d</div>
      {/* <DateRangePicker
        className={"calendarwrap"}
        editableDateInputs={true}
        ranges={[selectionRange]}
        onChange={item => {  setSelectDate([item.selection])}}
        inputRanges={[]}
        months={2}
        direction="horizontal"
        color="gray"
        minDate={new Date()}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 12)}
        showMonthAndYearPickers={false}
        staticRanges={[]}
        showDateDisplay={false}
        ranges={setSelectDate}
      /> */}
      <DateRangePicker
        className={"calendarwrap"}
        onChange={(item) => {
          setState([item.selection]);
        }}
        editableDateInputs={true}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={true}
        renderStaticRangeLabel={(data) => console.log("--", data)}
        inputRanges={[]}
        staticRanges={[]}
        dragSelectionEnabled={true}
        dateDisplayFormat="M/d/yyyy"
        minDate={new Date()}
        maxDate={new Date(new Date().getFullYear(), new Date().getMonth() + 12)}
        months={2}
        infiniteMonths={true}
        ranges={state}
        direction="horizontal"
        calendarFocus="forwards"
        showMonthAndYearPickers={false}
        showDateDisplay={false}
      />
    </div>
  );
}

export default App;
