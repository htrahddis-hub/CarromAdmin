import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

import Header from "./components/Header/Header";

import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Usermanage from "./components/Usermanagement/Usermanage";
import Revenue from "./components/Revenue/Revenue";
import Planmanage from "./components/Planmanagement/Planmanage";
import Transaction from "./components/Transaction/Transaction";
import Withdrawl from "./components/Withdrawl/Withdrawl";
import Upload from "./components/Upload/Upload";
import Control from "./components/Control/Control";
import Content from "./components/Content/Content";
import Access from "./components/Access/Access";

function App() {
  return (
    <Router>
      <div className="row m-0" style={{ height: "100vh", width: "100%" }}>
        <div
          className="col-2"
          style={{
            background: "#EFEDED",
            display: window.location.pathname === "/" ? "none" : "",
          }}
        >
          {window.location.pathname === "/" ? "" : <Sidebar />}
        </div>
        <div
          className={window.location.pathname === "/" ? "col-12 p-0" : "col-10"}
          style={{ overflow: "auto", height: "100vh" }}
        >
          {window.location.pathname === "/" ? "" : <Header />}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Login />} />

            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/user" element={<Usermanage />} />
            <Route exact path="/revenue" element={<Revenue />} />
            <Route exact path="/plan" element={<Planmanage />} />
            <Route exact path="/deposit" element={<Transaction />} />
            <Route exact path="/withdawal" element={<Withdrawl />} />
            <Route exact path="/upload" element={<Upload />} />
            <Route exact path="/control" element={<Control />} />
            <Route exact path="/content" element={<Content />} />
            <Route exact path="/access" element={<Access />} />

            <Route />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
