import React from "react";
import google from "../../assests/image 3.png";
import { useNavigate } from "react-router-dom";
import { LoginAdmin } from "../../api";
import Cookies from "js-cookie";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState({ email: "", password: "" });

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = await LoginAdmin(user.email, user.password);
    if (data.success && data.message === "Login Successfuly!") {
      Cookies.set("token", data.data.token);
      Cookies.set("user", JSON.stringify(data?.data.user));
      navigate("/dashboard");
      window.location.reload();
    }
  };

  const handleChange = (e) => {
    setUser((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  return (
    <>
      <nav className="navbar navbar-dark" style={{ background: "#6c665bc7" }}>
        <div className="container-fluid">
          <p className="navbar-brand my-0" >
            Admin Login Page
          </p>
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
              <img src={google} height="30px" alt="No Img Found"/>
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
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputEmail1"
                  className="form-label"
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="rp12321@gmail.com"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  style={{
                    border: "1px solid rgb(0 0 0 / 50%)",
                    borderRadius: "35px",
                    fontSize: "small",
                    height: "40px",
                  }}
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleInputPassword1"
                  className="form-label"
                  style={{ fontSize: "small", fontWeight: "500" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="******"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  style={{
                    border: "1px solid rgb(0 0 0 / 50%)",
                    borderRadius: "35px",
                    fontSize: "small",
                    height: "40px",
                  }}
                />
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleCheck1"
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
                type="submit"
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
