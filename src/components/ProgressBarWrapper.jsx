import React from "react";
import ProgressBar from "./ProgressBar";
import ProgressBarLegend from "./ProgressBarLegend";

export default function ProgressBarWrapper() {
  const bars = [
    {
      colour: "bg-primary",
      width: "28.5%"
    },
    {
      colour: "bg-warning",
      width: "38%"
    }
  ];

  return (
    <div className="progressContainer container align-items-center">
      <ProgressBarLegend />
      <div className="progressBarContainer py-1">
        <ProgressBar bars={bars} />
      </div>
    </div>
  );
}
