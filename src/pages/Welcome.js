import { Button } from "@material-ui/core";
import React from "react";
import { useNavigate } from "react-router";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick1 = () => {
    navigate("/part1");
  };
  const handleClick2 = () => {
    navigate("/part2");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button onClick={handleClick1}>Click to enter into Part1</Button>
      <Button onClick={handleClick2}>Click to enter into Part2</Button>
    </div>
  );
};

export default Welcome;
