import React, { useMemo } from "react";
import Table from "./CreateTable";

//import data
const data = require("../dummydata/testCollection.json");

// console.log(data);

export default function MyBootstrapTable() {
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
    <div className="tableContainer card py-3 px-2 my-4">
      {/* <div className="d-flex p-1">
        <input className="tableSearchbox form-control bg-light" type="text" />
      </div> */}
      <table className="table table-borderless bg-light">
        <thead className="customTableHead">
          <tr>
            <th>STREET ADDRESS</th>
            <th>SELLER</th>
            <th>PROGRESS</th>
            <th>CREATED</th>
            <th>COMPLETED</th>
            <th>REPORT</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {data &&
            data.map((entry) => {
              return (
                <tr>
                  <td className="text-nowrap">{entry.streetAddress}</td>
                  <td>{entry.seller}</td>
                  <td>{entry.progress}</td>
                  <td>{entry.created}</td>
                  <td>{entry.completed}</td>
                  <td>{entry.report}</td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <button className="btn btn-primary">Footer Button</button>
        </tfoot>
      </table>
      {/* <Table columns={columns} data={rows} /> */}
    </div>
  );
}
