import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BingoBoard = () => {
  const location = useLocation();
  const bingoSize = location.state.bingoSize;
  const [bingoArr, setBingoArr]: any = useState([]);

  const newBingoArr: any = [...bingoArr];
  useEffect(() => {
    return () => {
      for (let i = 1; i <= bingoSize * bingoSize; i++) {
        newBingoArr.push({
          content: i,
          color: "white",
        });
      }
      setBingoArr(newBingoArr);
    };
  }, []);

  const [color, setColor] = useState("white");
  const setGreen = () => {
    setColor("green");
  };
  const setNavy = () => {
    setColor("navy");
  };
  const changeColor = (e: any) => {
    const newBingoObject = {
      content: e.currentTarget.innerHTML,
      color: color,
    };
    for (let i = 0; i < bingoArr.length; i++) {
      if (bingoArr[i].content.toString() === e.currentTarget.innerHTML) {
        newBingoArr[i] = newBingoObject;
      }
      setBingoArr(newBingoArr);
    }
  };

  return (
    <div className="bingoBoard-box">
      <h1>원하는 색을 선택 후 빙고판을 눌러주세요!</h1>
      <table>
        {bingoArr.map((bingoData: any) => {
          return bingoData.content > bingoSize &&
            bingoData.content % bingoSize === 1 ? (
            <>
              <tr />
              <td
                id={bingoData.content}
                style={{ backgroundColor: bingoData.color }}
                onClick={changeColor}
              >
                {bingoData.content}
              </td>
            </>
          ) : (
            <td
              id={bingoData.content}
              style={{ backgroundColor: bingoData.color }}
              onClick={changeColor}
            >
              {bingoData.content}
            </td>
          );
        })}
      </table>
      <div className="event-box">
        <button onClick={setGreen}>Green</button>
        <button onClick={setNavy}>Navy</button>
      </div>
    </div>
  );
};

export default BingoBoard;
