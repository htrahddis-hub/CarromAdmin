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
        left: "17%",
        height: "80px",
        paddingTop: "10px",
        paddingBottom: "10px",
        marginRight: "40px",
        background: "white",
      }}
    >
      <div
        className="me-3"
        style={{
          color: "#FF9933",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        {user.role} Panel
      </div>
      <img
        style={{ marginRight: "20px" }}
        src={img}
        alt="no img"
        height="50px"
        width="50px"
      />
      <BiLogOut
        size={32}
        style={{ marginRight: "80px", cursor: "pointer" }}
        onClick={handleLogout}
      />
    </nav>
  );
};

export default Header;
