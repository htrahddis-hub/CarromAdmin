import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { RiDashboardFill } from "react-icons/ri";
import { FaUser, FaCoins, FaChalkboardTeacher,FaQuestionCircle } from "react-icons/fa";
import { MdUpload } from "react-icons/md";
import { IoGameControllerSharp } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import Cookies from "js-cookie";

const button = [
  {
    url: "/dashboard",
    icon: <RiDashboardFill size={25} />,
    title: "Dashboard",
    active: false,
    id: 0,
  },
  {
    url: "/user",
    icon: <FaUser size={25} />,
    title: "User Management",
    active: false,
    id: 1,
  },
  {
    url: "/revenue",
    icon: <FaCoins size={25} />,
    title: "Revenue",
    active: false,
    id: 2,
  },
  {
    url: "/plan",
    icon: <FaChalkboardTeacher size={25} />,
    title: "Plan Management",
    active: false,
    id: 3,
  },
  {
    url: "/deposit",
    icon: <FaCoins size={25} />,
    title: "Deposits Mnagment",
    active: false,
    id: 4,
  },
  {
    url: "/withdawal",
    icon: <FaCoins size={25} />,
    title: "Withdrawl Mnagement",
    active: false,
    id: 5,
  },
  {
    url: "/upload",
    icon: <MdUpload size={25} />,
    title: "Upload",
    active: false,
    id: 6,
  },
  {
    url: "/control",
    icon: <IoGameControllerSharp size={25} />,
    title: "Control",
    active: false,
    id: 7,
  },
  {
    url: "/content",
    icon: <FaQuestionCircle size={25} />,
    title: "FAQ",
    active: false,
    id: 8,
  },
  {
    url: "/access",
    icon: <RiLockPasswordFill size={25} />,
    title: "Access",
    active: false,
    id: 9,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const filteredbtn = button.filter((element) => {
    const userString = Cookies.get("user");
    const user = JSON.parse(userString ? userString : "{}");
    if (user.role === "Admin") return true;
    return user[element.url.substring(1)];
  });
  const [activebtn, setActivebtn] = React.useState(filteredbtn);

  React.useEffect(() => {
    setActivebtn((old) => {
      old = old.map((item) =>
        item.url === location.pathname
          ? { ...item, active: true }
          : { ...item, active: false }
      );
      return [...old];
    });
    const userString = Cookies.get("user");
    const user = JSON.parse(userString ? userString : "{}");
    if (user.role === "Subadmin") {
      const key = Object.keys(user).find(
        (ele) => ele === location.pathname.substring(1)
      );
      if (!user[key]) {
        navigate(-1);
      }
    }
  }, [location.pathname, navigate]);

  const handleChange = (id) => {
    setActivebtn((old) => {
      old = old.map((item) =>
        item.id === id ? { ...item, active: true } : { ...item, active: false }
      );
      return [...old];
    });
  };
  return (
    <div>
      <div style={{ paddingTop: "50px" }}>
        {activebtn.map((item) => (
          <Link to={item.url} style={{ textDecoration: "none" }} key={item.id}>
            <button
              className={
                item.active
                  ? "active d-flex justify-content-start align-items-center container py-2 px-1"
                  : "passive d-flex justify-content-start align-items-center container py-2 px-1"
              }
              style={{
                border: "none",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
              onClick={() => handleChange(item.id)}
            >
              <span className={item.active ? "active" : "passive"}>
                {item.icon}
              </span>
              <div
                className={item.active ? "active ms-2 " : "passive ms-2 "}
                style={{ fontWeight: "500", fontSize: "15px" }}
              >
                {item.title}
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
