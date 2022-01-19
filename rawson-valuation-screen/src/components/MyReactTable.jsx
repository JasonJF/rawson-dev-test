import React, { useMemo } from "react";
import Table from "./CreateTable";
import data from "../dummydata/testCollection.json";
import ProgressItem from "./ProgressItem";
import ReportItem from "./ReportItem";

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
// console.log(data);




export default function MyReactTable() {

  //Setting up defaultColumn for flex resizing
  const defaultColumn = React.useMemo(
    () => ({
      // When using the useFlexLayout:
      minWidth: 30, // minWidth is only used as a limit for resizing
      width: 150, // width is used for both the flex-basis and flex-grow
      maxWidth: 200, // maxWidth is only used as a limit for resizing
  }),
  []
);
  const columns = useMemo(
    () => [
      {
        Header: "STREET ADDRESS",
        accessor: "streetAddress"
      },
      {
        Header: "SELLER",
        accessor: "seller"
      },
      {
        Header: "PROGRESS",
        accessor: "progress",
        Cell: () => <ProgressItem />,
        width: 500,
      },
      {
        Header: "CREATED",
        accessor: "created"
      },
      {
        Header: "COMPLETED",
        accessor: "completed"
      },
      {
        Header: "REPORT",
        accessor: "report",
        Cell: () => <ReportItem />
      }
    ],
    []
  );

  const rows = useMemo(() => data, []);

  return (
    <div className="container card py-3 px-0 my-4">
      <Table columns={columns} data={rows} defaultColumn={defaultColumn} />
    </div>
  );
}
