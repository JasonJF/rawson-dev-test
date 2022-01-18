import React from "react";
import LegendItem from "./LegendItem";

export default function ProgressBarLegend() {
  return (
    <div className="progressLegendContainer d-flex flex-row px-3">
      <LegendItem text="In Progress (6)" colour="text-primary" />
      <LegendItem text="Completed (8)" colour="text-warning" />
      <LegendItem text="Draft (7)" colour="text-light" />
    </div>
  );
}
