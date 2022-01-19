import React, { useMemo } from "react";
import Table from "./CreateTable";
import data from "../dummydata/testCollection.json";

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
        accessor: "progress"
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
        accessor: "report"
      }
    ],
    []
  );

  const rows = useMemo(() => data, []);

  return (
    <div className="tableContainer card py-3 px-0 my-4">
      <Table columns={columns} data={rows} />
    </div>
  );
}
