import React, { useState } from "react";
type tableDataType = {
  tr_number: number;
  bingoSize: number;
  color: string;
};

const TableData = ({ tr_number, bingoSize }: tableDataType) => {
  const td_arr = [];
  for (let i = 1; i <= bingoSize; i++) {
    td_arr.push(bingoSize * tr_number + i);
  }

  return (
    <>
      {td_arr.map((td_number) => (
        <td key={td_number} id={td_number.toString()}>
          {td_number}
        </td>
      ))}
    </>
  );
};

export default TableData;
