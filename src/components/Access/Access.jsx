import React from "react";
import "./access.css";
import {
  GetSubadmin,
  AddSubadmin,
  UpdateSubadmin,
  DeleteSubadmin,
} from "../../api";
import { AiOutlineDelete } from "react-icons/ai";

const Access = () => {
  const [show, setShow] = React.useState(true);
  const [edit, setEdit] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [inputData, setInputData] = React.useState({
    name: "",
    email: "",
    number: "",
    password: "",
    dashboard: false,
    user: false,
    revenue: false,
    deposit: false,
    withdawal: false,
    uploads: false,
    plan: false,
    control: false,
    content: false,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetSubadmin();
      if (data.success && data.message === "Fetched Successfuly!")
        setData(data.data);
    };
    fetchData();
  }, [show, data.length]);

  const handleAdd = () => {
    setShow((old) => !old);
    setEdit(false);
    setInputData({
      name: "",
      email: "",
      number: "",
      password: "",
      dashboard: false,
      user: false,
      revenue: false,
      deposit: false,
      withdawal: false,
      uploads: false,
      plan: false,
      control: false,
      content: false,
    });
  };

  const handleEdit = (id) => {
    setShow((old) => !old);
    setEdit(true);
    const sub = data.find((item) => item._id === id);
    setInputData(sub);
  };

  const handleChange = (e) => {
    setInputData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleChecked = (e) => {
    setInputData((old) => {
      return {
        ...old,
        [e.target.name]: e.target.checked,
      };
    });
  };

  const handleSubmit = async () => {
    if (edit) {
      const id = inputData._id;
      const data = await UpdateSubadmin(inputData, id);
      if (data.success && data.message === "Updated Successfuly!") {
        setShow(true);
      }
    } else {
      const data = await AddSubadmin(inputData);
      if (data.success && data.message === "Added Successfuly!") {
        setShow(true);
      }
    }
  };

  const handleDelete = async (id) => {
    const data = await DeleteSubadmin(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setData((old) => {
        old = old.filter((item) => item._id !== id);
        return [...old];
      });
    }
  };

  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div
        className="row"
        style={{
          color: "#FF9933",
          fontSize: "25px",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Access
      </div>
      {show ? (
        <div className="row">
          <div className="d-flex justify-content-start align-items-center mt-5 ps-5 flex-wrap">
            {data.map((item, id) => (
              <div
                className="d-flex flex-column me-5 p-3 mb-5"
                style={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  width: "200px",
                }}
                key={id}
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ fontSize: "23px", fontWeight: "600" }}
                >
                  <div>Account {id + 1}</div>
                  <AiOutlineDelete onClick={() => handleDelete(item._id)} />
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    marginBottom: "30px",
                    color: "rgb(95, 94, 94)",
                  }}
                >
                  {item?.email}
                </div>
                <div>
                  <button
                    className="py-1"
                    style={{
                      background: "#FF9933",
                      borderRadius: "6px",
                      border: "none",
                      color: "white",
                      width: "-webkit-fill-available",
                    }}
                    onClick={() => handleEdit(item?._id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
            <div
              className=" d-flex justify-content-center align-items-center mb-5"
              style={{
                borderRadius: "40px",
                background: " rgb(211, 206, 206)",
                height: "80px",
                width: "80px",
                fontSize: "50px",
                fontWeight: "900",
                paddingBottom: "10px",
                color: "rgb(104, 106, 106)",
                cursor: "pointer",
              }}
              onClick={handleAdd}
            >
              +
            </div>
          </div>
        </div>
      ) : (
        <div className="row mt-4 ps-2" style={{ width: "100%" }}>
          <div className="col-8">
            <div className="d-flex justify-content-between align-items-baseline">
              <p
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  marginBottom: "40px",
                }}
              >
                {edit ? "Edit" : "New"} Account
              </p>
              <p className="back-arrow" onClick={handleAdd}>
                🡐 back
              </p>
            </div>
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={inputData.name}
                name="name"
                onChange={handleChange}
              />
              <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={inputData.email}
                name="email"
                onChange={handleChange}
              />
              <label for="floatingInput">E-mail</label>
            </div>
            <div class="form-floating mb-4" style={{ marginBottom: "20px" }}>
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={inputData.number}
                name="number"
                onChange={handleChange}
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                value={inputData.password}
                name="password"
                onChange={handleChange}
              />
              <label for="floatingInput">Password</label>
            </div>
            <div className="row pt-2 ps-2">
              <div className="col-6">
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="dashboard"
                    id="flexRadioDefault1"
                    checked={inputData.dashboard}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Dashboard
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="user"
                    id="flexRadioDefault1"
                    checked={inputData.user}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    User Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="revenue"
                    id="flexRadioDefault1"
                    checked={inputData.revenue}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Revenue
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="plan"
                    id="flexRadioDefault1"
                    checked={inputData.plan}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Plan Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="content"
                    id="flexRadioDefault1"
                    checked={inputData.content}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Content
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="deposit"
                    id="flexRadioDefault1"
                    checked={inputData.deposit}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Transaction Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="withdawal"
                    id="flexRadioDefault1"
                    checked={inputData.withdawal}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Withdrawl Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="uploads"
                    id="flexRadioDefault1"
                    checked={inputData.uploads}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Uploads
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="control"
                    id="flexRadioDefault1"
                    checked={inputData.control}
                    onChange={handleChecked}
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Control
                  </label>
                </div>
              </div>
            </div>
            <button
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                border: "none",
                background: "#FF9933",
                color: "white",
                borderRadius: "10px",
                height: "40px",
                width: "250px",
              }}
              onClick={handleSubmit}
            >
              {edit ? "Save Changes" : "Create Account"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Access;
