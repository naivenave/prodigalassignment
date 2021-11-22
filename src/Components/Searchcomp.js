import { Select, Slider } from "antd";
import React from "react";
import "../pages/Part1.css";
const { Option } = Select;

const Searchcomp = (props) => {
  const { handleAfterChange, handleChange, sliderMinMax, callData, error } =
    props;
  return (
    <div>
      <div className="tag">
        <p className="agent">Add Agent</p>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Search for agent"
          onChange={handleChange}
        >
          {callData.map((item) => (
            <Option key={item}>{item}</Option>
          ))}
        </Select>
      </div>
      <div className="tag">
        <p className="agent">Select Call Duration</p>
        {sliderMinMax && (
          <Slider
            style={{ width: "100%" }}
            range
            min={sliderMinMax?.minimum}
            max={sliderMinMax?.maximum}
            defaultValue={[20, 50]}
            onAfterChange={handleAfterChange}
          />
        )}
      </div>
      {error && (
        <div style={{ textAlign: "center", fontSize: "1.5rem" }}>{error}</div>
      )}
    </div>
  );
};

export default Searchcomp;
