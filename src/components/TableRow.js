import React from "react";

const TableRow = props => {
  const { table } = props;
  const rows = table.map((row, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{row.col1}</td>
        <td>{row.col2}</td>
        <td>{row.col3}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

export default TableRow;
