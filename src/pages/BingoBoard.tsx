import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TableData from "../components/TableData";

const BingoBoard = () => {
  const location = useLocation();
  const bingoSize = location.state.bingoSize;
  const bingo_arr = [];
  for (let i = 0; i < bingoSize; i++) {
    bingo_arr.push(i);
  }
  const [color, setColor] = useState("white");
  const setGreen = () => {
    setColor("Green");
  };
  const setNavy = () => {
    setColor("Navy");
  };

  return (
    <div className="bingoBoard-box">
      <table>
        {bingo_arr.map((tr_number) => (
          <tr>
            <TableData
              tr_number={tr_number}
              bingoSize={bingoSize}
              color={color}
            />
          </tr>
        ))}
      </table>
      <div className="event-box">
        <button onClick={setGreen}>Green</button>
        <button onClick={setNavy}>Navy</button>
      </div>
    </div>
  );
};

export default BingoBoard;
