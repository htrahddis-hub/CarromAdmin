import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUser, FaCoins, FaChalkboardTeacher } from "react-icons/fa";
import "./dashboard.css";
import { GetDashboard } from "../../api";

const Dateinmonth = () => {
  const dt = new Date();
  const month = dt.getMonth();
  const year = dt.getFullYear();
  return `${year}${"-"}${month < 10 ? `0${month + 1}` : `${month + 1}`}`;
};

const Dashboard = () => {
  const [date, setDate] = React.useState(Dateinmonth());
  const [dashData, setDashSata] = React.useState({
    totalDeposits: 0,
    totalRevenue: 0,
    totalWithdawals: 0,
    users:0
  });

  React.useState(() => {
    const fetchData = async () => {
      const data = await GetDashboard();
      if (data.success && data.message === "Fetched Successfuly!")
        setDashSata(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div className="row">
        <div className="col-6 ps-4">
          <div
            className="d-flex flex-column justify-content-between p-3"
            style={{
              background: "#fff5eb",
              borderRadius: "10px",
              width: "300px",
              height: "150px",
            }}
          >
            <div style={{ fontSize: "large", fontWeight: "500" }}>
              Total Users
            </div>
            <div className="h3" style={{ color: "#FF9933" }}>
              {dashData.users}
            </div>
          </div>
        </div>
        <div className="d-flex col-6 flex-column justify-content-between align-items-end">
          <div
            className="d-flex justify-content-end py-2 pe-2 ps-4"
            style={{ border: "1px solid #FF9933", borderRadius: "5px" }}
          >
            <AiOutlineSearch size={25} style={{ color: "#FF9933" }} />
            <input
              className="ps-3 input-no-border"
              style={{ border: "none", color: "#FF9933" }}
              placeholder="Search"
            />
          </div>
          <input
            type="month"
            style={{
              border: "none",
              fontSize: "20px",
              width: "180px",
              fontWeight: "500",
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-4 ms-1">
        <div style={{ color: "#FF9933", fontSize: "22px", fontWeight: "500" }}>
          Revenue
        </div>
        <div className="d-flex justify-content-start mt-3">
          <div
            className="d-flex flex-column justify-content-between p-3 me-3"
            style={{
              borderRadius: "10px",
              width: "240px",
              height: "180px",
              border: "0.5px solid #28318C",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Total Revenue
            </div>
            <div
              className="h3 md-5 d-flex justify-content-between align-items-center"
              style={{ color: "#FF9933" }}
            >
              <div
                className=" d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "25px",
                  background: "#fff5eb",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaCoins size={20} />
              </div>{" "}
              <div>₹ {dashData.totalRevenue}</div>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between p-3 me-3"
            style={{
              borderRadius: "10px",
              width: "240px",
              height: "180px",
              border: "0.5px solid #28318C",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Total Deposits
            </div>
            <div
              className="h3 md-5 d-flex justify-content-between align-items-center"
              style={{ color: "#FF9933" }}
            >
              <div
                className=" d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "25px",
                  background: "#fff5eb",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaCoins size={20} />
              </div>{" "}
              <div>₹ {dashData.totalDeposits}</div>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between p-3"
            style={{
              borderRadius: "10px",
              width: "240px",
              height: "180px",
              border: "0.5px solid #28318C",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Total Withdrawl
            </div>
            <div
              className="h3 md-5 d-flex justify-content-between align-items-center"
              style={{ color: "#FF9933" }}
            >
              <div
                className=" d-flex justify-content-center align-items-center"
                style={{
                  borderRadius: "25px",
                  background: "#fff5eb",
                  height: "50px",
                  width: "50px",
                }}
              >
                <FaCoins size={20} />
              </div>
              <div>₹ {dashData.totalWithdawals}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
