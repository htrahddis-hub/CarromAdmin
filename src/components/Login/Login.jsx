import React from "react";
import google from "../../assests/image 3.png";
import "./login.css";

const Login = () => {
  return (
    <>
      <nav class="navbar navbar-dark" style={{background:"#6c665bc7"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Admin Login Page
          </a>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="d-flex justify-content-center">
          <div
            className="border border-dark my-3 pt-5 pb-3 px-3 justify-content=start"
            style={{ borderRadius: "10px" }}
          >
            <p className="h5">Login</p>
            <p
              className="mt-2"
              style={{ color: "#00000082", fontSize: "15px" }}
            >
              See your growth and get all the information about your product.
            </p>
            <button
              className="d-flex mt-4 justify-content-center align-items-center container py-2"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgb(0 0 0 / 50%)",
                borderRadius: "35px",
              }}
            >
              <img src={google} height="30px" />
              <div className="ms-2">Continue with Google</div>
            </button>
            <div className="d-flex justify-content-between align-items-center my-4">
              <div
                style={{ borderBottom: "1px solid #00000082", width: "35%" }}
              ></div>
              <div style={{ fontSize: "13px", color: "#00000082" }}>
                or Login with Email
              </div>
              <div
                style={{ borderBottom: "1px solid #00000082", width: "35%" }}
              ></div>
            </div>
            <form>
              <div class="mb-3">
                <label
                  for="exampleInputEmail1"
                  class="form-label"
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="rp12321@gmail.com"
                  style={{
                    border: "1px solid rgb(0 0 0 / 50%)",
                    borderRadius: "35px",
                    fontSize: "small",
                    height: "40px",
                  }}
                />
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputPassword1"
                  class="form-label"
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="******"
                  style={{
                    border: "1px solid rgb(0 0 0 / 50%)",
                    borderRadius: "35px",
                    fontSize: "small",
                    height: "40px",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div class="mb-3 form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    class="form-check-label"
                    for="exampleCheck1"
                    style={{ fontSize: "13px", fontWeight: "500" }}
                  >
                    Remember me
                  </label>
                </div>
                <div
                  className="mb-3"
                  style={{
                    fontSize: "small",
                    color: "#ff9933",
                    fontWeight: "500",
                  }}
                >
                  Forgot password?
                </div>
              </div>
              <button
                className="mt-4 container py-2"
                style={{
                  background: "#FFFFFF",
                  border: "none",
                  borderRadius: "35px",
                  backgroundColor: "#FF9933",
                  color: "white",
                }}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
