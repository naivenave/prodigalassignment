import { Table } from "antd";
import React from "react";

const columns = [
  {
    title: "Call Id",
    dataIndex: "call_id",
    key: "call_id",
    sorter: {
      compare: (a, b) => a.call_id - b.call_id,
    },
  },
  {
    title: "Agent Id",
    dataIndex: "agent_id",
    key: "agent_id",
    sorter: {
      compare: (a, b) => ("" + a.agent_id).localeCompare(b.agent_id),
    },
  },
  {
    title: "Call Time",
    dataIndex: "call_time",
    key: "call_time",
    sorter: {
      compare: (a, b) => a.call_time - b.call_time,
    },
  },
];

const Tablecomp1 = ({ rows }) => {
  return (
    <>
      {rows.length > 0 ? <Table columns={columns} dataSource={rows} /> : null}
    </>
  );
};

export default Tablecomp1;
