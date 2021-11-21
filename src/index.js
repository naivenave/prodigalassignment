import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";

import reportWebVitals from "./reportWebVitals";
import Welcome from "./pages/Welcome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Part1 from "./pages/Part1";
import Part2 from "./pages/Part2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/part1" element={<Part1 />} />
        <Route exact path="/part2" element={<Part2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
