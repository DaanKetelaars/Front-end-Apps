import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/Home/App";
import GetInfo from "./components/Albums/GetInfo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./scss/_style.scss";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/album-info" element={<GetInfo />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
