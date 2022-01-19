import React from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressItem(props) {
  
  let cellValue = props.value.cell.value;
  let colourClass = cellValue === "100%" ? "bg-warning" : "bg-primary";
  return (
    <div className="row progressItemContainer">
      <div className="col-3 me-2 px-auto text-nowrap">{cellValue}</div>
      <div className="col align-self-center">
        <div className="progress" style={{ height: "5px" }}>
          <div
            className={`progress-bar ${colourClass}`}
            style={{ width: cellValue }}
            role="progressbar"
          ></div>
        </div>
      </div>
    </div>
  );
}
