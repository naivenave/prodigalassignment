import { Select, Table } from "antd";
import React, { useEffect, useState } from "react";
import { getData2 } from "../services/api";
const { Option } = Select;

const Part2 = () => {
  const children = useState([]);
  const [columns, setColumns] = useState([]);

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const [rows, setRows] = useState([]);
  /* Fetch initial data */
  const fetchAPI = async () => {
    getData2("getcalllist")
      .then((r) => {
        if (r.status === 200) {
          setRows(r.data.data.call_data);
        }
      })
      .catch((e) => console.log(e.message));

    getData2("getlistoflabels")
      .then((r) => {
        if (r.status === 200) {
          let arraydata = r.data.data.unique_label_list;
          for (let i = 0; i < arraydata.length; i++) {
            children.push(<Option key={i}>{arraydata[i]}</Option>);
            // children.push(r2.data.data.unique_label_list[i]);
            setColumns([
              {
                title: "Call Id",
                dataIndex: "call_id",
                width: "10%",
                key: "call_id",
              },
              {
                title: "Default Label",
                dataIndex: "label_id",
                width: "30%",
                key: "label_id",
              },
              {
                title: "Labels",
                render: () => (
                  <>
                    <Select
                      mode="tags"
                      style={{ width: "100%" }}
                      placeholder="Labels"
                      onChange={handleChange}
                      key={Math.random()}
                    >
                      {children}
                    </Select>
                  </>
                ),
              },
            ]);
          }
        }
      })
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchAPI();
  }, []);
  const handleClick = () => {};
  return (
    <div>
      <p className="heading">Labels on 50 call data-set</p>
      {children.length > 0 && <Table columns={columns} dataSource={rows} />}
      <div>
        <button
          style={{ margin: "0.5rem auto" }}
          className="btn"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Part2;
