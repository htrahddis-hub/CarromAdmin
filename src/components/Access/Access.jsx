import React from "react";
import "./access.css";

const Access = () => {
  const [show, setShow] = React.useState(true);
  const [edit, setEdit] = React.useState(false);

  const handleAdd = () => {
    setShow((old) => !old);
    setEdit(false);
  };

  const handleEdit = () => {
    setShow((old) => !old);
    setEdit(true);
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
          <div className="d-flex justify-content-start align-items-center mt-5 ps-5">
            {[...Array(2)].map((_, id) => (
              <div
                className="d-flex flex-column me-5 p-3"
                style={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  borderRadius: "20px",
                  width: "200px",
                }}
                key={id}
              >
                <div style={{ fontSize: "23px", fontWeight: "600" }}>
                  Account {id + 1}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    marginBottom: "30px",
                    color: "rgb(95, 94, 94)",
                  }}
                >
                  lorem ipsum
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
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
            <div
              className=" d-flex justify-content-center align-items-center"
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
              />
              <label for="floatingInput">Full Name</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">E-mail</label>
            </div>
            <div class="form-floating mb-4" style={{ marginBottom: "20px" }}>
              <input
                type="number"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Phone Number</label>
            </div>
            <div class="form-floating mb-4">
              <input
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Password</label>
            </div>
            <div className="row pt-2 ps-2">
              <div className="col-6">
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Dashboard
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    User Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Revenue
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Plan Management
                  </label>
                </div>
              </div>
              <div className="col-6">
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Transaction Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Withdrawl Management
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Uploads
                  </label>
                </div>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
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
