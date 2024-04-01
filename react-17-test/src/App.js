import React from "react";
import { TimeZoneDropdown } from "@adaptavant/timezone-picker";

const App = () => {
  console.log(" react version::  ", React.version);
  const onChange = (e) => {
    console.log("came here ", e);
  };
  const zone = "Asia/Kolkata";
  return (
    <div style={{ top: "400px", position: "relative" }}>
      <h1>Hello world! I am using React</h1>
      <TimeZoneDropdown useTimeZone={zone} onChange={onChange} />
    </div>
  );
};

export default App;
