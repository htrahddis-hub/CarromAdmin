import React from "react";
import { FaCoins } from "react-icons/fa";
import "./dashboard.css";
import { GetDashboard } from "../../api";
import { getCurrentDate, getISODate } from "../../util";

const Dashboard = () => {
  const [date, setDate] = React.useState(getCurrentDate("-"));
  const [check, setCheck] = React.useState(false);
  const [dashData, setDashData] = React.useState({
    totalDeposits: 0,
    totalRevenue: 0,
    totalWithdawals: 0,
    users: 0,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      if (check) {
        const data = await GetDashboard(getISODate(date));
        if (data.success && data.message === "Fetched Successfuly!")
          setDashData(data.data);
      } else {
        const data = await GetDashboard(null);
        if (data.success && data.message === "Fetched Successfuly!")
          setDashData(data.data);
      }
    };
    fetchData();
  }, [check, date]);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
    console.log(check);
  };

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
      </div>
      <div className="row mt-4 ms-1">
        <div className="d-flex justify-content-between mb-3 align-items-center">
          <div
            style={{ color: "#FF9933", fontSize: "22px", fontWeight: "500" }}
          >
            Revenue
          </div>
          <div className="d-flex align-items-center">
            <div className="form-check me-5">
              <input
                className="form-check-input"
                type="checkbox"
                checked={check}
                id="datecheck"
                onChange={handleCheck}
              />
              <label className="form-check-label" htmlFor="datecheck">
                At date
              </label>
            </div>
            <input
              type="date"
              style={{
                border: "none",
                fontSize: "20px",
                width: "160px",
                fontWeight: "500",
              }}
              value={date}
              onChange={handleChange}
            />
          </div>
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
              <div>$ {dashData.totalRevenue}</div>
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
              <div>$ {dashData.totalDeposits}</div>
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
              <div>$ {dashData.totalWithdawals}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
