import { Autocomplete, TextField } from "@mui/material";
import { AutoComplete } from "antd";
import Slider from "@mui/material/Slider";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@material-ui/core";
const columns = [
  { field: "id", headerName: "S. No.", width: 70 },
  { field: "call_id", headerName: "Call ID", width: 70 },
  { field: "agent_id", headerName: "Agent name", width: 130 },
  { field: "call_time", headerName: "Call Time", width: 130 },
];

const Part1 = () => {
  //   let options2 = [];
  const fetchAPI = async () => {
    const r = await axios.get(
      "https://damp-garden-93707.herokuapp.com/getlistofagents"
    );
    console.log(r);
    if (r.data) {
      console.log(r.data.data.listofagents);
      let options2 = r.data.data.listofagents.map((item) => {
        return {
          value: item,
        };
      });
      console.log(options2);
      setOption([...options2]);
    }
    const r2 = await axios.get(
      "https://damp-garden-93707.herokuapp.com/getdurationrange"
    );
    console.log(r);
    if (r2.data) {
      console.log(r2.data.data);
    }
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const [rows, setRows] = useState([]);
  const [options, setOption] = useState([]);
  const [slider, setSlider] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleSubmit = async () => {
    let agent_list = selectedOptions.map((item) => item.value);
    const data = {
      info: {
        filter_agent_list: agent_list,
        filter_time_range: [1, slider],
      },
    };
    console.log(data);
    const r = await axios.post(
      "https://damp-garden-93707.herokuapp.com/getfilteredcalls",
      data
    );
    console.log(r.data.data);
    let rowsdata = r.data.data.map((item, index) => {
      return {
        id: index + 1,
        ...item,
      };
    });
    setRows([...rowsdata]);
  };
  const handleChange = (event, value) => setSelectedOptions(value);
  const handleSlider = (event, value) => setSlider(value);
  return (
    <div>
      <Autocomplete
        multiple
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option.value}
        // defaultValue={[top100Films[13]]}
        onChange={handleChange}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select filter on Agent"
            placeholder="Type to select multiple filter"
          />
        )}
      />
      <Slider
        // value={slider}
        aria-label="Default"
        valueLabelDisplay="auto"
        min={1}
        step={0.5}
        max={10}
        onChangeCommitted={handleSlider}
      />
      <Button onClick={handleSubmit}>Submit</Button>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Part1;
