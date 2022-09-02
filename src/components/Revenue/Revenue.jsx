import React from "react";
import { FaCoins } from "react-icons/fa";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import LineChart from "./Linechart";
import { getCurrentDate, getISODate } from "../../util";
import { GetRevenue } from "../../api";

const Revenue = () => {
  const [date, setDate] = React.useState(getCurrentDate("-"));
  const [check, setCheck] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [set, SetSet] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [data, setData] = React.useState({ totalPages: 0, details: [] });

  React.useEffect(() => {
    const fetchData = async () => {
      if (check) {
        const data = await GetRevenue(getISODate(date), page, limit);
        if (data.success && data.message === "Fetched Successfuly!")
          setData(data.data);
      } else {
        const data = await GetRevenue(null, page, limit);
        if (data.success && data.message === "Fetched Successfuly!")
          setData(data.data);
      }
    };
    fetchData();
    return () => {
      setData({ totalPages: 0, details: [] });
    };
  }, [date, page, limit, check]);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleLimit = (e) => {
    setLimit(e.target.value);
    setPage(1);
  };

  const handleNext = () => {
    page === data.totalPages ? setPage(page) : setPage(page + 1);
    if (page % 5 === 0) SetSet((old) => old + 1);
  };

  const handlePrev = () => {
    page > 1 ? setPage(page - 1) : setPage(page);
    if (page % 5 === 1) SetSet((old) => (old === 0 ? 0 : old - 1));
  };

  return (
    <div className="container-fluid ">
      <div className="mt-5 pt-5"></div>
      <div className="row ms-1">
        <div
          className="d-flex justify-content-between"
          style={{ color: "#FF9933", fontSize: "22px", fontWeight: "500" }}
        >
          <div>Revenue</div>
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
        <div
          className="d-flex align-items-center justify-content-end"
          style={{ marginTop: "40px" }}
        >
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
      <div
        className="row m-3 p-3 mt-4"
        style={{ border: "0.5px solid #28318C", borderRadius: "20px" }}
      >
        {data?.details.length > 0 ? (
          <>
            <table className="table table-borderless ">
              <thead style={{ borderBottom: "0.5px solid #28318C" }}>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">User Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Game</th>
                </tr>
              </thead>
              <tbody>
                {data?.details.map((item, id) => (
                  <tr key={item._id}>
                    <th>{id + 1}</th>
                    <td>{item?.name ? item?.name : "-"}</td>
                    <td>
                      {item.createdAt
                        .substring(0, 10)
                        .split("-")
                        .reverse()
                        .join("-")}
                    </td>
                    <td>Rs.{item?.amount}</td>
                    <td>{item?.app ? item?.app : "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <div style={{ margin: " 6em 0" }}>
            <div className="loading-main">
              <div className="loader"></div>
            </div>
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid black",
            marginTop: "5px",
          }}
        >
          <p className="mb-0 mt-2">
            {`Showing Page ${page} out of ${data.totalPages}`}
            {" | "}Enteries in 1 page{" "}
            <input
              type="number"
              style={{ width: "50px" }}
              value={limit}
              onChange={handleLimit}
            />
          </p>{" "}
          <p className="mb-0 mt-2">
            <MdOutlineNavigateBefore
              size={21}
              title="previous page"
              cursor="pointer"
              onClick={handlePrev}
            />
            {set >= 1 ? "..." : ""}
            {[...Array(data.totalPages)].map((n, i) => {
              if (!(i + 1 <= 5 * (set + 1))) return "";
              if (!(i + 1 >= set * 5 + 1)) return "";
              return (
                <span
                  style={{
                    color: parseInt(page) === i + 1 ? "#f20e29" : "",
                    cursor: "pointer",
                  }}
                  onClick={(e) => setPage(i + 1)}
                  key={i}
                >
                  &nbsp; {i + 1}{" "}
                </span>
              );
            })}
            &nbsp;
            {data.totalPages - set * 5 >= 6 ? "..." : ""}
            <MdOutlineNavigateNext
              title="next page"
              cursor="pointer"
              size={21}
              onClick={handleNext}
            />
          </p>
        </div>
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
