import React from "react";
import "./control.css";

const Control = () => {
  return (
    <div className="container-fluid">
      <div className="mt-5 pt-5"></div>
      <div
        className="row"
        style={{
          color: "#FF9933",
          fontSize: "24px",
          fontWeight: "500",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Controls
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>
          Account Details
        </div>
        <div className="d-flex justify-content-start my-3">
          <div
            className="d-flex flex-column p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
              width: "480px",
            }}
          >
            <div className="d-flex">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginBottom: "10px",
                }}
              >
                Deposits
              </div>
            </div>
            <div className="d-flex ps-2 justify-content-between">
              <div className="">
                <div
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  Phone Number
                </div>
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #AEB1D4",
                    width: "140px",
                  }}
                />
              </div>
              <div className="ms-3" style={{ width: "260px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  Payment Method
                </div>
                <div className="d-flex pt-2 justify-content-between">
                  <div>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ms-4">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                style={{
                  marginTop: "40px",
                  marginBottom: "10px",
                  border: "none",
                  background: "#FF9933",
                  color: "white",
                  borderRadius: "8px",
                  height: "40px",
                  width: "200px",
                }}
              >
                Save
              </button>
            </div>
          </div>
          <div
            className="d-flex flex-column p-3 ms-5"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
              width: "480px",
            }}
          >
            <div className="d-flex">
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginBottom: "10px",
                }}
              >
                Withdrawls
              </div>
            </div>
            <div className="d-flex ps-2 justify-content-between">
              <div className="">
                <div
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  Phone Number
                </div>
                <input
                  type="text"
                  style={{
                    border: "none",
                    borderBottom: "2px solid #AEB1D4",
                    width: "140px",
                  }}
                />
              </div>
              <div className="ms-3" style={{ width: "260px" }}>
                <div
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  Payment Method
                </div>
                <div className="d-flex pt-2 justify-content-between">
                  <div>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ms-4">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                      <div className="d-flex align-items-center mt-3">
                        <div className=" d-flex justify-content-center align-items-center addsymbol">
                          +
                        </div>
                        <div
                          style={{
                            fontSize: "16px",
                            fontWeight: "600",
                            marginLeft: "7px",
                          }}
                        >
                          Lorem
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                style={{
                  marginTop: "40px",
                  marginBottom: "10px",
                  border: "none",
                  background: "#FF9933",
                  color: "white",
                  borderRadius: "8px",
                  height: "40px",
                  width: "200px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Games</div>
        <div className="d-flex justify-content-start my-4">
          <div
            className="d-flex flex-column align-items-center me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Carrom Game
            </div>
            <div
              style={{
                fontSize: "16px",
                marginTop: "20px",
                fontWeight: "500",
                color: "#6A6A6A",
              }}
            >
              Win to Lose ratio
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
              {" : "}
              <input
                type="text"
                style={{
                  marginLeft: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="60%"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>Spin Game</div>
            <div
              style={{
                fontSize: "16px",
                marginTop: "20px",
                fontWeight: "500",
                color: "#6A6A6A",
              }}
            >
              Win to Lose ratio
            </div>
            <div className="d-flex justify-content-center">
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
              {" : "}
              <input
                type="text"
                style={{
                  marginLeft: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="60%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Transactions</div>
        <div className="d-flex justify-content-start my-4">
          <div
            className="d-flex flex-column align-items-center me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Carrom Game
            </div>

            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Min amount added
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Min amount added
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>Spin Game</div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Min amount added
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Min amount added
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Add to Cash</div>
        <div className="d-flex justify-content-start my-4 align-items-center">
          <div
            className="d-flex flex-column align-items-start me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>Coupon 1</div>

            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Percentage off
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Terms and conditions
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "150px",
                }}
                value="lorem ipsum"
              />
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-start me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "230px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>Cashbacks</div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Percentage off
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                value="40%"
              />
            </div>
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Terms and conditions
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "150px",
                }}
                value="lorem ipsium"
              />
            </div>
          </div>
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
          >
            +
          </div>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Chat With Us</div>
        <div className="d-flex justify-content-start my-4 align-items-center">
          <div
            className="d-flex flex-column align-items-start me-5 p-3"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "480px",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Link
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "400px",
                }}
                value="40%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
