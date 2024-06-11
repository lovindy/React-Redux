import React, { Fragment } from "react";
// Table component
function Table({ data, config, keyFn }) {
  // config is the table header
  const renderedConfig = config.map((column) => {
    // to check wether column has a header
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    return (
      <th key={column.label} className="px-4">
        {column.label}
      </th>
    );
  });
  // data and config are dummy data
  const renderedRows = data.map((rowData) => {
    // rowData is the row data
    const renderedCells = config.map((column) => {
      return (
        // column is the table header
        <td key={column.label} className="p-4">
          {column.render(rowData)}
        </td>
      );
    });
    return (
      // recieving the key from the keyFn function to make it more dynamic
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });
  // data and config are dummy data
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedConfig}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
