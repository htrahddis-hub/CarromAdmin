import React from "react";
import { FaCoins } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import LineChart from "./Linechart";

const Revenue = () => {
  const Dateinmonth = () => {
    const dt = new Date();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    return `${year}${"-"}${month < 10 ? `0${month + 1}` : `${month + 1}`}`;
  };

  const [date, setDate] = React.useState(Dateinmonth());

  return (
    <div className="container-fluid ">
      <div className="mt-5 pt-5"></div>
      <div className="row ms-1">
        <div
          className="d-flex justify-content-between"
          style={{ color: "#FF9933", fontSize: "22px", fontWeight: "500" }}
        >
          <div>Revenue</div>
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
        <div className="d-flex justify-content-start mt-3">
          <div
            className="d-flex flex-column justify-content-between p-3 me-3"
            style={{
              borderRadius: "10px",
              width: "200px",
              height: "140px",
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
                  borderRadius: "20px",
                  background: "#fff5eb",
                  height: "40px",
                  width: "40px",
                }}
              >
                <FaCoins size={18} />
              </div>{" "}
              <div> 120068</div>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between p-3 me-3"
            style={{
              borderRadius: "10px",
              width: "200px",
              height: "140px",
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
                  borderRadius: "20px",
                  background: "#fff5eb",
                  height: "40px",
                  width: "40px",
                }}
              >
                <FaCoins size={18} />
              </div>{" "}
              <div> 120068</div>
            </div>
          </div>
          <div
            className="d-flex flex-column justify-content-between p-3"
            style={{
              borderRadius: "10px",
              width: "200px",
              height: "140px",
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
                  borderRadius: "20px",
                  background: "#fff5eb",
                  height: "40px",
                  width: "40px",
                }}
              >
                <FaCoins size={18} />
              </div>
              <div> 120068</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-end mt-2">
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
      <div
        className="row m-3 p-3 mt-5"
        style={{ border: "0.5px solid #28318C", borderRadius: "20px" }}
      >
        <table class="table table-borderless ">
          <thead style={{ borderBottom: "0.5px solid #28318C" }}>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone Number</th>
              <th scope="col">E-mail</th>
              <th scope="col">Signup-Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, id) => (
              <tr>
                <th>{id + 1}</th>
                <td>Mark Ruffalo</td>
                <td>1234567889</td>
                <td>admin@gmail.com</td>
                <td>12-09-2001</td>
                <td>Block</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="row ms-4"
        style={{ color: "#FF9933", fontSize: "22px", fontWeight: "500" }}
      >
        1 Lakh
      </div>
      <div className="row p-3 border m-4">
        <LineChart />
      </div>
    </div>
  );
};

export default Revenue;
