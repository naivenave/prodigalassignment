import React from "react";
import { useNavigate } from "react-router";
import "./Welcome.css";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/part1");
  };
  const handleClick2 = () => {
    navigate("/part2");
  };
  return (
    <div className="center-div">
      <button className="btn" onClick={handleClick1}>
        Click to enter into Part1
      </button>
      <button className="btn" onClick={handleClick2}>
        Click to enter into Part2
      </button>
    </div>
  );
};

export default Welcome;
