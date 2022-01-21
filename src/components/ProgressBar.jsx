import React from "react";

export default function ProgressBar(props) {
  let bars = props.bars;
  return (
    <div className="progress" style={{ height: "5px" }}>
      {bars.map((bar, index) => {
        let width = bar.width;
        return (<div
            key={index}
            className={`progress-bar ${bar.colour}`}
            style={{ width: width }}
            role="progressbar"
          ></div>
        );
      })}
    </div>
  );
}
