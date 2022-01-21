import React from "react";
import PopUpLink from "./PopUpLink";

export default function ReportPopUp() {
  return (
      <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
          <li><h6 className="dropdown-header">VALUATION</h6></li>
          <li>
            <div className="dropdown-item">
            <i className="bi bi-pencil-fill px-1 me-1"></i>
                <a href="#">Edit</a>
            </div>
        </li>
        <li>
            <div className="dropdown-item">
            <i className="bi bi-printer-fill px-1 me-1"></i>
                <a href="#">Print</a>
            </div>
            </li>
            <li>
            <div className="dropdown-item">
            <i className="bi bi-envelope-fill px-1 me-1"></i>
                <a href="#">Email</a>
            </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li><h6 className="dropdown-header">PROPERTY REPORT</h6></li>
            <li>
            <div className="dropdown-item">
            <i className="bi bi-printer-fill px-1 me-1"></i>
                <a href="#">Print</a>
            </div>
            </li>
            <li>
            <div className="dropdown-item">
            <i className="bi bi-clock-history px-1 me-1"></i>
                <a href="#">Update sales</a>
            </div>
            </li>
            <li><hr className="dropdown-divider" /></li>
            <li>
            <div className="dropdown-item">
            <i className="bi bi-trash-fill px-1 me-1"></i>
                <a href="#">Delete valuation</a>
            </div>
            </li>
        </ul>
  );
}
