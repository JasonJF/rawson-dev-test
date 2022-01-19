import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFlexLayout
} from "react-table";
import { useState } from "react";

export default function Table({ columns, data, defaultColumn }) {
  //Example taken from https://nafeu.medium.com/global-filtering-and-sorting-with-react-table-ec604e57614a

  //Global filter
  const TWO_HUNDRED_MS = 200;

  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter
  }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, TWO_HUNDRED_MS);

    return (
      <input
        className="tableSearchbox form-control"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search`}
      />
    );
  }
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    useFlexLayout,
    state: { globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      defaultColumn
    },
    useGlobalFilter,
    useSortBy
  );

  // Render the UI for your table
  return (
    <div className="container mx-0 px-0">
      <div className="container-fluid my-1">
        {/* <tr>
          <th colSpan={1}> */}
        {/* <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        /> */}
        {/* </th>
        </tr> */}
      </div>
      <table {...getTableProps()} className="container mx-0">
        <thead className="customTableHead py-2">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="m-0">
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
