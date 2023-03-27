import React from "react";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const onClcikButton = () => {
    navigate(`/make`);
  };
  return (
    <div className="welcome-box">
      <h1>Welcome to Soop's Bingo World</h1>
      <button onClick={onClcikButton}>빙고판 만들러 가기</button>
    </div>
  );
};

export default Welcome;
