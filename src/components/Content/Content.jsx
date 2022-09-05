import React from "react";
import "./content.css"

const Content = () => {
  return (
    <div className="container-fluid">
      <div className="pt-5 mt-5"></div>
      <div
        className="row"
        style={{
          color: "#FF9933",
          fontSize: "25px",
          fontWeight: "500",
          width: "100%",
        }}
      >
        Content
      </div>
      <div className="row">
        <p
          style={{
            fontSize: "24px",
            fontWeight: "700",
            marginTop: "20px",
          }}
        >
          FAQ
        </p>
        <div
          className="col-11 ms-3 px-4 pt-4 pb-3 mb-5"
          style={{
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
            borderRadius: "20px",
          }}
        >
          <div style={{ fontSize: "13px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            justo, porta viverra urna, integer lorem hac. Vitae, et, auctor
            integer gravida id ut senectus. Ultrices tempus in lorem ipsum
            pulvinar cras. Tellus, est non rhoncus interdum diam, nisl vitae,
            non facilisis. In felis in turpis tristique a placerat quam. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Aliquam justo,
            porta viverra urna, integer lorem hac. Vitae, et, auctor integer
            gravida id ut senectus. Ultrices tempus in lorem ipsum pulvinar
            cras. Tellus, est non rhoncus interdum diam, nisl vitae, non
            facilisis. In felis in turpis tristique a placerat quam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Aliquam justo, porta
            viverra urna, integer lorem hac. Vitae, et, auctor integer gravida
            id ut senectus. Ultrices tempus in lorem ipsum pulvinar cras.
            Tellus, est non rhoncus interdum diam, nisl vitae, non facilisis. In
            felis in turpis tristique a placerat quam. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Aliquam justo, porta viverra
            urna, integer lorem hac. Vitae, et, auctor integer gravida id ut
            senectus. Ultrices tempus in lorem ipsum pulvinar cras. Tellus, est
            non rhoncus interdum diam, nisl vitae, non facilisis. In felis in
            turpis tristique a placerat quam.
          </div>
          <div className="d-flex justify-content-end ">
            <p
              className="mb-0 pt-2 edit"
              style={{ color: "#00A8CE", fontSize: "18px", fontWeight: "500" }}
            >
              Edit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
