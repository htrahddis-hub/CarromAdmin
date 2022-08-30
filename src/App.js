import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

const SidebarContext = React.createContext(false);

function App() {
  const [hide, setHide] = React.useState(false);

  return (
    <SidebarContext.Provider value={{ hide: hide }}>
      <Router>
        <div className="row m-0" style={{ height: "100vh", width: "100%" }}>
          <div
            className="col-2"
            style={{
              background: "#EFEDED",
              display: window.location.pathname === "/" ? "none" : "",
            }}
          >
            <Sidebar />
          </div>
          <div
            className={
              window.location.pathname === "/" ? "col-12 p-0" : "col-10"
            }
            style={{ overflow: "auto", height: "100vh" }}
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<Login />} />

              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/usermanage" element={<Usermanage />} />
              <Route exact path="/revenue" element={<Revenue />} />
              <Route exact path="/planmanage" element={<Planmanage />} />
              <Route exact path="/transaction" element={<Transaction />} />
              <Route exact path="/withdrawl" element={<Withdrawl />} />
              <Route exact path="/upload" element={<Upload />} />
              <Route exact path="/control" element={<Control />} />
              <Route exact path="/Content" element={<Content />} />
              <Route exact path="/access" element={<Access />} />

              <Route />
            </Routes>
          </div>
        </div>
      </Router>
    </SidebarContext.Provider>
  );
}

export default App;
export { SidebarContext };
