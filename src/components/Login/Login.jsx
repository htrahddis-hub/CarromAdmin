import React from "react";
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
      <nav className="navbar" style={{ background: "rgb(255, 153, 51)"}}>
        <div className="container-fluid">
          <p className="navbar-brand my-0" style={{color:"white"}}>Admin Login Page</p>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center" style={{height:"80vh"}}>
        <div
          className="border border-dark my-3 pt-5 pb-3 px-3 justify-content=start"
          style={{ borderRadius: "10px" }}
        >
          <p className="h5">Login</p>
          <p className="mt-2" style={{ color: "#00000082", fontSize: "15px" }}>
            See your growth and get all the information about your product.
          </p>
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
    </>
  );
};

export default Login;
