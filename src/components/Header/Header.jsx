import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { BiLogOut } from "react-icons/bi";
import img from "../../assests/Ellipse 153.png";

const Header = () => {
  const userString = Cookies.get("user");
  const user = JSON.parse(userString ? userString : "{}");

  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("user");
    Cookies.remove("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav
      className="navbar fixed-top d-flex justify-content-end align-items-center"
      style={{
        position: "fixed",
        left: "16.67%",
        height: "50px",
        paddingTop: "5px",
        marginRight: "18px",
        background: "white",
        boxShadow: "0 1px 0  rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="me-3"
        style={{
          color: "#FF9933",
          fontSize: "16px",
          fontWeight: "400",
        }}
      >
        {user.role} Panel
      </div>
      <img
        style={{ marginRight: "20px" }}
        src={img}
        alt="no img"
        height="35px"
        width="35px"
      />
      <BiLogOut
        size={24}
        style={{ marginRight: "80px", cursor: "pointer" }}
        onClick={handleLogout}
      />
    </nav>
  );
};

export default Header;
