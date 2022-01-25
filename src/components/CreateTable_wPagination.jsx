import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
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
    page,
    prepareRow,
    
    state: { globalFilter },
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,

    //for pagination
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      initialState: { pageIndex: 1 }
    },
    useGlobalFilter,
    useFlexLayout,
    useSortBy,
    usePagination
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
          {page.map((row, i) => {
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
      {/* Pagination */}
      <div className="pagination container-fluid justify-content-center mx-0 px-0">
        <div className="d-flex container leftSide ps-5">
          <div className="d-flex align-items-center">
            <p className="my-0 mx-2 py-2">Showing:</p>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            <p className="my-2 mx-2 py-3">of {data.length}</p>
          </div>
        </div>
        <div className="d-flex container rightSide justify-content-end pe-5 align-items-center">
          <div className="d-flex ">
            <button
              className="btn btn-sm btn-outline-primary pageBtns"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              {"Previous"}
            </button>{" "}
            <button
              className="btn btn-sm btn-primary pageBtns"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              {"Next"}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
