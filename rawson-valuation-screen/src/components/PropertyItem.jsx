import React from "react";

export default function PropertyItem(props) {

  let cellValue = props.value.cell.value;
  // console.log(cellValue);
  return (
    // <div className="">
      <div className="d-flex flex-row">
        <div className="propertyImgContainer align-self-center p-2 m-1">
          <img
            className="propertyImg p-0 m-0"
            src="https://www.vezaproperties.co.za/motorImages4/600/9201430.jpg"
            alt="house"
          />
        </div>
        <div className="propertyAddressContainer mx-0 px-0 py-2 align-self-center">
          <div className="propertyAddress text-start mx-0 px-0">
            <strong>{cellValue}</strong>
          </div>
          <div className="lastUpdated text-start">Updated 3 hours ago</div>
        </div>
      </div>
    // </idv>
  );
}
