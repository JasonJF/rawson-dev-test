import React, { useMemo } from "react";
import Table from "./CreateTable";
import data from "../dummydata/testCollection.json";
import ProgressItem from "./ProgressItem";
import ReportItem from "./ReportItem";
import PropertyItem from "./PropertyItem";
import SellerItem from "./SellerItem";

//import data

// const data = require("../dummydata/testCollection.json");
// const data = [{
//   "_id": {
//     "$oid": "61e6d643f74bde307e507b20"
//   },
//   "streetAddress": "123 Sycamore Avenue, Observatory",
//   "seller": "Ryno Johnson",
//   "progress": "0%",
//   "created": "21-Aug-20",
//   "completed": "Incomplete",
//   "report": "1"
// }]

// const data = [{
//   "_id": {
//     "$oid": "61e6d643f74bde307e507b20"
//   },
//   "streetAddress": "1",
//   "seller": ["1"],
//   "progress": "0%",
//   "created": "1",
//   "completed": "1",
//   "report": "1"
// }]
// console.log(data);




export default function MyReactTable() {

  //Setting up defaultColumn for flex resizing
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      // maxWidth: 200, // maxWidth is only used as a limit for resizing
  }),
  []
);
  const columns = useMemo(
    () => [
      {
        Header: "STREET ADDRESS",
        accessor: "streetAddress",
        width: 200,
        Cell: (cell) => <PropertyItem value={cell} />
      },
      {
        // Header: "SELLER",
        Header: () => (
          <div
          className="d-flex justify-content-center"
            
          >SELLER</div>),       //The extra div is to align this specific column
        accessor: "seller",
        width: 150,
        className: "d-flex justify-content-center", //this class is passed to the getColumnProps in CreateTable
        Cell: (cell) => <SellerItem value={cell}/>
      },
      {
        Header: "PROGRESS",
        accessor: "progress",
        Cell: (cell) => <ProgressItem value={cell} />,
        width: 150,
        disableGlobalFilter: true
      },
      {
        Header: "CREATED",
        accessor: "created",
        width: 70,
        disableGlobalFilter: true
      },
      {
        Header: "COMPLETED",
        accessor: "completed",
        width: 80,
        disableGlobalFilter: true
      },
      {
        Header: "REPORT",
        accessor: "report",
        width: 80,
        Cell: () => <ReportItem />,
        disableGlobalFilter: true
      }
    ],
    []
  );

  const rows = useMemo(() => data, []);

  return (
    <div className="container shadow-sm card py-3 px-0 my-4">
      <Table columns={columns} data={rows} defaultColumn={defaultColumn}/> 
    </div>
  );
}
