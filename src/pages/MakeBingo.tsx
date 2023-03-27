import React, { useState } from "react";
import { useNavigate } from "react-router";

const MakeBingo = () => {
  const navigate = useNavigate();
  const [bingoSize, setBingoSize] = useState(0);
  const plus = () => {
    if (bingoSize === 10) {
      return;
    } else {
      setBingoSize(bingoSize + 1);
    }
  };
  const minus = () => {
    if (bingoSize === 0) {
      return;
    } else {
      setBingoSize(bingoSize - 1);
    }
  };
  const goToBingoBoard = () => {
    navigate(`/bingoBoard`, { state: { bingoSize: bingoSize } });
  };
  return (
    <div className="make-bingo-box">
      <h1>빙고판의 크기를 정해주세요!</h1>
      <div className="event-box">
        <button onClick={plus}>+</button>
        <span>{`${bingoSize} X ${bingoSize}`}</span>
        <button onClick={minus}>-</button>
      </div>
      <button className="make-button" onClick={goToBingoBoard}>
        빙고판 만들기
      </button>
    </div>
  );
};

export default MakeBingo;
