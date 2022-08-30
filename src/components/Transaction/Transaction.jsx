import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Transaction = () => {
  const Dateinmonth = () => {
    const dt = new Date();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    return `${year}${"-"}${month < 10 ? `0${month + 1}` : `${month + 1}`}`;
  };

  const [date, setDate] = React.useState(Dateinmonth());

  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div className="row">
        <div
          className="col-6 ps-4"
          style={{ fontSize: "22px", fontWeight: "600", color: "#FF9933" }}
        >
          Transaction Management
        </div>
        <div className="col-6 d-flex flex-column justify-content-between align-items-end">
          <div
            className="d-flex justify-content-start py-2 pe-2 ps-4 "
            style={{
              border: "1px solid #FF9933",
              borderRadius: "5px",
              width: "500px",
            }}
          >
            <AiOutlineSearch size={25} style={{ color: "#FF9933" }} />
            <input
              className="ps-3 input-no-border"
              style={{ border: "none", color: "#FF9933" }}
              placeholder="Search on Users"
            />
          </div>
          <input
            type="month"
            style={{
              border: "none",
              fontSize: "20px",
              width: "180px",
              fontWeight: "500",
              marginTop: "40px",
            }}
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
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
              <th scope="col">Transaction ID</th>
              <th scope="col">App</th>
              <th scope="col">Date</th>
              <th scope="col">Amount</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, id) => (
              <tr>
                <th>{id + 1}</th>
                <td>Mark Ruffalo</td>
                <td>1234567889</td>
                <td>lorem ipsum</td>
                <td>12-09-2001</td>
                <td>$20.02</td>
                <td>Block</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transaction;

