import React from "react";
import ProgressBar from "./ProgressBar";

export default function ProgressItem() {
  return (
    <div className="row progressItemContainer">
      <div className="col-3 me-2 px-auto text-nowrap">100%</div>
      <div className="col align-self-center">
        <div className="progress" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-primary"
            style={{ width: "50%" }}
            role="progressbar"
          ></div>
        </div>

        {/* <ProgressBar bars={[{ colour: "bg-primary", width: "50%" }]} /> */}
      </div>
    </div>
  );
}
