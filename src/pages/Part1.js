import React, { useEffect, useState } from "react";
import Searchcomp from "../Components/Searchcomp";
import Tablecomp1 from "../Components/Tablecomp1";
import { getData1, postData1 } from "../services/api";
import "./Part1.css";

const Part1 = () => {
  const [callData, setCallData] = useState([]);
  const [rows, setRows] = useState([]);
  const [sliderMinMax, setSliderMinMax] = useState({});
  const [slider, setSlider] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [error, setError] = useState("");
  /* Get data for agent dropdown and min & max values of call time */
  const fetchAPI = async () => {
    getData1("getlistofagents")
      .then((r) => {
        setCallData([...r.data.data.listofagents]);
      })
      .catch((e) => console.log(e.message));

    getData1("getdurationrange")
      .then((r) => {
        console.log(r);
        setSliderMinMax({ ...r.data.data });
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  /* Called when clicked on submit button */
  const handleSubmit = async () => {
    setError("");
    console.log(selectedOptions);
    const data = {
      info: {
        filter_agent_list: selectedOptions,
        filter_time_range: slider,
      },
    };
    console.log(data);
    postData1("getfilteredcalls", data).then((r) => {
      if (r.data.data) {
        setRows([...r.data.data]);
      } else {
        setError("No data");
      }
    });
  };
  /* Called when selected any value from dropdown menu  */
  const handleChange = (value) => {
    console.log(`${value}`);
    setSelectedOptions([...value]);
  };
  /* Called when there is change in slider value */
  const handleAfterChange = (value) => {
    console.log("onAfterChange: ", value);
    setSlider(value);
  };
  return (
    <div>
      <p className="heading">Add Filter based on Agents and Call Duration</p>
      <Searchcomp
        callData={callData}
        sliderMinMax={sliderMinMax}
        handleAfterChange={handleAfterChange}
        handleChange={handleChange}
        error={error}
      />
      <button
        className="btn"
        style={{ margin: "1rem auto" }}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <Tablecomp1 rows={rows} />
    </div>
  );
};

export default Part1;
