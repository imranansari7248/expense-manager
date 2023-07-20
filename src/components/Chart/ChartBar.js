import React from "react";
import "./Chart.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  console.log(barFillHeight);
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{
            height: barFillHeight,
            backgroundColor: "#4826b9",
            width: "100%",
            transition: "all 0.3s ease-out",
          }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.month}</div>
    </div>
  );
};

export default ChartBar;
