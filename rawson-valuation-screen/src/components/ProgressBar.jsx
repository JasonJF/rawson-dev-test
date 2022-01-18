import React from "react";

export default function ProgressBar(props) {
  let bars = props.bars;

  console.log(bars);
  return (
    <div className="progress" style={{ height: "5px" }}>
      {bars.map((bar, index) => {
        // console.log(bar)
        let width = bar.width;
        return (
          // <h1 key={index}>Hello</h1>

          <div
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
