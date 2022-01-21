import React from "react";
import ReportPopUp from "./ReportPopUp";

export default function ReportItem() {
  return (
    <div className="reportItemContainer d-flex align-self-center mx-2 px-2">
      <div className="col m-0 p-0">
        <i className="bi bi-eye-fill text-primary p-0 m-0"></i>
      </div>
      <div className="col m-0 p-0">
        <div className="reportMenuButton dropstart d-flex justify-content-center">
          <i className="bi bi-three-dots-vertical reportMenuIcon"
           type="button"
           id="dropdownMenuButton1"
           data-bs-toggle="dropdown"
           aria-expanded="false"></i>
        <ReportPopUp />
        </div>
      </div>
    </div>
  );
}
