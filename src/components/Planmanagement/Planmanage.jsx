import React from "react";
import "./planmanage.css";

const Planmanage = () => {
  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div
        className="row mb-4 ms-1"
        style={{ color: "#FF9933", fontSize: "25px", fontWeight: "500" }}
      >
        Plan Management
      </div>
      <div className="row">
        <div className="d-flex justify-content-start">
          <div className="d-flex flex-column justify-content-start">
            <div style={{fontSize:"25px", fontWeight:"600", marginBottom:"8px"}}>Carrom Game</div>
            <div
              className="d-flex flex-column align-items-center px-4 pt-3 pb-2"
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                width: "210px",
                marginRight:"40px"
              }}
            >
              <div className="mb-4" style={{color:"#6a6a6a", fontSize:"16px", fontWeight:"550"}}>Single Post Plan</div>
              <div className="mb-4 text-center" style={{ fontSize:"13px", fontWeight:"600"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </div>
              <div className="hover" style={{color:"#FF9933", fontSize:"14px",fontWeight:"600"}}>Change Plan</div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-start">
            <div style={{fontSize:"25px", fontWeight:"600", marginBottom:"8px"}}>Spin Game </div>
            <div
              className="d-flex flex-column align-items-center px-4 pt-3 pb-2"
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "20px",
                width: "210px",
              }}
            >
              <div className="mb-4" style={{color:"#6a6a6a", fontSize:"16px", fontWeight:"550"}}>Single Post Plan</div>
              <div className="mb-4 text-center" style={{ fontSize:"13px", fontWeight:"600"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </div>
              <div className="hover" style={{color:"#FF9933", fontSize:"14px", fontWeight:"600"}}>Change Plan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Planmanage;
