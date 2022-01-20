import React from "react";
import PopUpLink from "./PopUpLink";

export default function ReportPopUp() {
  return (
    // <div className="card">
      <ul className="dropdown-menu shadow" aria-labelledby="dropdownMenuButton1">
          <li><h6 class="dropdown-header">VALUATION</h6></li>
          <li>
            <div className="dropdown-item">
            <i class="bi bi-pencil-fill px-1 me-1"></i>
                <a href="#">Edit</a>
            </div>
        </li>
        <li>
            <div className="dropdown-item">
            <i class="bi bi-printer-fill px-1 me-1"></i>
                <a href="#">Print</a>
            </div>
            </li>
            <li>
            <div className="dropdown-item">
            <i class="bi bi-envelope-fill px-1 me-1"></i>
                <a href="#">Email</a>
            </div>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li><h6 class="dropdown-header">PROPERTY REPORT</h6></li>
            <li>
            <div className="dropdown-item">
            <i class="bi bi-printer-fill px-1 me-1"></i>
                <a href="#">Print</a>
            </div>
            </li>
            <li>
            <div className="dropdown-item">
            <i class="bi bi-clock-history px-1 me-1"></i>
                <a href="#">Update sales</a>
            </div>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
            <div className="dropdown-item">
            <i class="bi bi-trash-fill px-1 me-1"></i>
                <a href="#">Delete valuation</a>
            </div>
            </li>
        </ul>
    // </div>
  );
}
