import React from "react";

export default function LegendItem(props) {
  const { text, colour } = props;

  return (
    <div className="d-flex mx-0 pe-3 align-text-center legendItemText">
      <i
        className={
          colour +
          " bi bi-circle-fill progressLegend align-middle align-self-center"
        }
      />
      <p className="progressText text-nowrap my-0 px-1">{text}</p>
    </div>
  );
}
