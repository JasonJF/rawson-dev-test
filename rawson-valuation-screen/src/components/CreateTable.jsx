import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  useFlexLayout
} from "react-table";
import { useState } from "react";
import CustomCaretDefault from "./CustomCaretDefault";
import CustomCaretUp from "./CustomCaretUp";
import CustomCaretDown from "./CustomCaretDown";

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
        placeholder={`Search valuations by address or sellers name`}
      />
    );
  }

  // Create a default prop getter
  
  const defaultPropGetter = () => ({})

export default function Table({ columns, data, defaultColumn }) {
 
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    getColumnProps = defaultPropGetter,
    headerGroups,
    rows,
    prepareRow,
    
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
    useFlexLayout,
    useSortBy
  );

  // Render the UI for your table
  return (
    <div className="row mx-0 px-0">
      <div className="col-sm-6 mt-1 mb-3 mx-2">
        <div className="input-group">
          <span className="input-group-text"><i className="bi bi-search"></i></span>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        </div>
      </div>
      <table {...getTableProps()} className="container mx-0">
        <thead className="customTableHead py-3">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                
                    <th {...column.getHeaderProps(
                      
                      // {style: {width: '200px'}},
                      
                      [{className: column.className}, getColumnProps(column), column.getSortByToggleProps()],
                     
                      )}>
                      <div className="d-flex align-items-center">
                  {column.render("Header")}
                  {/* Add a sort direction indicator */}
               
                    {column.isSorted ? column.isSortedDesc? <CustomCaretDown />: <CustomCaretUp />: <CustomCaretDefault />}
               
                  </div>
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
                    <td className="align-self-center" {...cell.getCellProps()}>{cell.render("Cell")}</td>
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
