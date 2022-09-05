import React from "react";
import {
  AddCoupon,
  AddDeposit,
  AddWithdrawal,
  DeleteCoupon,
  DeleteDeposit,
  DeleteWithdrawal,
  GetControl,
  UpdateControls,
} from "../../api";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./control.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#FFFFFF",
    border: "1px solid #00000099",
    borderRadius: "10px",
    width: "400px",
  },
};

const Control = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen1, setIsOpen1] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [modalIsOpen3, setIsOpen3] = React.useState(false);
  const [img, setImg] = React.useState("");
  const [input, setInput] = React.useState({ deposit: "", withdawal: "" });
  const [fileDeposit, setFileDeposit] = React.useState();
  const [fileWithdrawal, setFileWithdrawal] = React.useState();
  const [inputCoupon, setInputCoupon] = React.useState({
    name: "",
    amountCredit: "",
    cashback: "",
    Terms: "",
  });
  const [controlData, setControlData] = React.useState({
    depositNumber: "",
    withdawalNumber: "",
    minDeposit: 0,
    maxDeposit: 0,
    minWithdawal: 0,
    maxWithdawal: 0,
    depositMethods: [],
    withdawalMethods: [],
    chatLink: "",
    chatOptions: [],
    coupons: [],
    CaromWin: 0,
    SpinWin: 0,
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetControl();
      if (data.success && data.message === "Fetched Successfuly!")
        setControlData(data.data);
    };
    fetchData();
  }, [modalIsOpen]);

  const handleSave = async () => {
    const data = await UpdateControls({ ...controlData, id: controlData._id });
    if (data.success && data.message === "Updated Successfuly!") {
    }
  };

  const handleChangeRatio = (e) => {
    setControlData((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleChangeAntiRatio = (e) => {
    setControlData((old) => {
      return { ...old, [e.target.name]: 100 - e.target.value };
    });
  };

  const handleChangeControl = (e) => {
    setControlData((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleInputPay = (e) => {
    setInput((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleInputCoupon = (e) => {
    setInputCoupon((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleImageDeposit = (event) => {
    setFileDeposit(event.target.files[0]);
  };
  const handleImageWithdrawal = (event) => {
    setFileWithdrawal(event.target.files[0]);
  };

  const handleAddDeposit = async (event) => {
    event.preventDefault();
    if (!fileDeposit) {
      alert("attach the image");
      return;
    }
    const fileRef = ref(storage, `depositMethods/${fileDeposit.name + v4()}`);
    const next = await uploadBytes(fileRef, fileDeposit);
    const url = await getDownloadURL(next.ref);
    const data = await AddDeposit(input.deposit, url);
    if (data.success && data.message === "Added Successfuly!") {
      setInput((old) => {
        return { ...old, deposit: "" };
      });
      setFileDeposit();
      closeModalDeposit();
    }
  };

  const handleAddWithdrawal = async (event) => {
    event.preventDefault();
    if (!fileWithdrawal) {
      alert("attach the image");
      return;
    }
    const fileRef = ref(
      storage,
      `withdrawalMethods/${fileWithdrawal.name + v4()}`
    );
    const next = await uploadBytes(fileRef, fileWithdrawal);
    const url = await getDownloadURL(next.ref);
    const data = await AddWithdrawal(input.withdawal, url);
    if (data.success && data.message === "Added Successfuly!") {
      setInput((old) => {
        return { ...old, withdawal: "" };
      });
      setFileWithdrawal();
      closeModalWithdrawal();
    }
  };

  const handleAddCoupon = async (event) => {
    event.preventDefault();
    const data = await AddCoupon(inputCoupon);
    if (data.success && data.message === "Added Successfuly!") {
      setInputCoupon({
        name: "",
        amountCredit: "",
        cashback: "",
        Terms: "",
      });
      closeModalCoupon();
    }
  };

  const handleDeleteDeposit = async (id) => {
    const data = await DeleteDeposit(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setControlData((old) => {
        const deposit = old.depositMethods.filter((item) => item?._id !== id);
        return { ...old, depositMethods: deposit };
      });
    }
  };

  const handleDeleteWithdrawal = async (id) => {
    const data = await DeleteWithdrawal(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setControlData((old) => {
        const deposit = old.withdawalMethods.filter((item) => item?._id !== id);
        return { ...old, withdawalMethods: deposit };
      });
    }
  };

  const handleDeleteCoupon = async (id) => {
    const data = await DeleteCoupon(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setControlData((old) => {
        const deposit = old.coupons.filter((item) => item?._id !== id);
        return { ...old, coupons: deposit };
      });
    }
  };

  function openModalImage() {
    setIsOpen(true);
  }

  function closeModalImage() {
    setIsOpen(false);
  }

  function openModalDeposit() {
    setIsOpen1(true);
  }

  function closeModalDeposit() {
    setIsOpen1(false);
  }

  function openModalWithdrawal() {
    setIsOpen2(true);
  }

  function closeModalWithdrawal() {
    setIsOpen2(false);
  }

  function openModalCoupon() {
    setIsOpen3(true);
  }

  function closeModalCoupon() {
    setIsOpen3(false);
  }

  const handleModalwithdrawal = () => {
    openModalWithdrawal();
  };

  const handleModalDeposits = () => {
    openModalDeposit();
  };

  const handleModalCoupon = () => {
    openModalCoupon();
  };

  const handleImageModal = (img) => {
    setImg(img);
    openModalImage();
  };

  return (
    <div className="container-fluid">
      <Modal
        isOpen={modalIsOpen1}
        onRequestClose={closeModalDeposit}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="d-flex justify-content-end">
            <button
              onClick={closeModalDeposit}
              style={{ border: "none", backgroundColor: "white" }}
            >
              <span>
                <AiOutlineClose size={18} />
              </span>
            </button>
          </div>
          <form onSubmit={handleAddDeposit}>
            <div className="mb-3">
              <label htmlFor="Coins">Mode of Payment</label>
              <input
                type="text"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="deposit"
                value={input?.deposit}
                onChange={handleInputPay}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Amount">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageDeposit}
                className="mt-3"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="button-style">
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModalWithdrawal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="d-flex justify-content-end">
            <button
              onClick={closeModalWithdrawal}
              style={{ border: "none", backgroundColor: "white" }}
            >
              <span>
                <AiOutlineClose size={18} />
              </span>
            </button>
          </div>
          <form onSubmit={handleAddWithdrawal}>
            <div className="mb-3">
              <label htmlFor="Coins">Mode of Payment</label>
              <input
                type="text"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="withdawal"
                value={input?.withdawal}
                onChange={handleInputPay}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Amount">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageWithdrawal}
                className="mt-3"
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="button-style">
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen3}
        onRequestClose={closeModalCoupon}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="d-flex justify-content-end">
            <button
              onClick={closeModalCoupon}
              style={{ border: "none", backgroundColor: "white" }}
            >
              <span>
                <AiOutlineClose size={18} />
              </span>
            </button>
          </div>
          <form onSubmit={handleAddCoupon}>
            <div className="mb-3">
              <label htmlFor="Coins">Name</label>
              <input
                type="text"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="name"
                value={inputCoupon?.name}
                onChange={handleInputCoupon}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Coins">Amount Credits</label>
              <input
                type="number"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="amountCredit"
                value={inputCoupon?.amountCredit}
                onChange={handleInputCoupon}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Coins">Cashback</label>
              <input
                type="number"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="cashback"
                value={inputCoupon?.cashback}
                onChange={handleInputCoupon}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Coins">Terms</label>
              <input
                type="text"
                className="form-control mt-3"
                id="Coins"
                aria-describedby="Entry Fees"
                name="Terms"
                value={inputCoupon?.Terms}
                onChange={handleInputCoupon}
                required
              />
            </div>
            <div className="d-flex justify-content-center">
              <button type="submit" className="button-style">
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModalImage}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <div className="d-flex justify-content-end">
            <button
              onClick={closeModalImage}
              style={{ border: "none", backgroundColor: "white" }}
            >
              <span>
                <AiOutlineClose size={18} />
              </span>
            </button>
          </div>
          <div className="container-fluid p-3">
            <img src={img} alt="no img" />
          </div>
        </div>
      </Modal>
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
                  name="depositNumber"
                  onChange={handleChangeControl}
                  value={controlData.depositNumber}
                />
              </div>
              <div className="ms-3" style={{ width: "260px" }}>
                <div
                  className="d-flex"
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  <div>Payment Method</div>
                  <div
                    className="ms-3 d-flex justify-content-center align-items-center addsymbol"
                    onClick={handleModalDeposits}
                  >
                    +
                  </div>
                </div>
                <div className="d-flex pt-2 justify-content-between flex-wrap">
                  {controlData?.depositMethods.map((item, id) => (
                    <div className="d-flex align-items-center px-3 py-2" key={item?._id}>
                      <div>{id + 1}.</div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          marginLeft: "7px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageModal(item?.image)}
                      >
                        {item?.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                style={{
                  marginTop: "30px",
                  marginBottom: "10px",
                  border: "none",
                  background: "#FF9933",
                  color: "white",
                  borderRadius: "8px",
                  height: "40px",
                  width: "200px",
                }}
                onClick={handleSave}
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
                  name="withdawalNumber"
                  onChange={handleChangeControl}
                  value={controlData.withdawalNumber}
                />
              </div>
              <div className="ms-3 " style={{ width: "260px" }}>
                <div
                  className="d-flex"
                  style={{
                    fontSize: "18px",
                    color: "#6A6A6A",
                    fontWeight: "500",
                  }}
                >
                  <div>Payment Method</div>
                  <div
                    className="ms-3 d-flex justify-content-center align-items-center addsymbol"
                    onClick={handleModalwithdrawal}
                  >
                    +
                  </div>
                </div>
                <div className="d-flex pt-2 justify-content-between flex-wrap">
                  {controlData?.withdawalMethods.map((item, id) => (
                    <div className="d-flex align-items-center px-3 py-2" key={item?._id}>
                      <div>{id + 1}.</div>
                      <div
                        style={{
                          fontSize: "16px",
                          fontWeight: "600",
                          marginLeft: "7px",
                        }}
                        onClick={() => handleImageModal(item?.image)}
                      >
                        {item?.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                style={{
                  marginTop: "30px",
                  marginBottom: "10px",
                  border: "none",
                  background: "#FF9933",
                  color: "white",
                  borderRadius: "8px",
                  height: "40px",
                  width: "200px",
                }}
                onClick={handleSave}
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
                type="number"
                min="1"
                max="100"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="CaromWin"
                onChange={handleChangeRatio}
                value={controlData.CaromWin}
              />
              {" : "}
              <input
                type="number"
                min="1"
                max="100"
                style={{
                  marginLeft: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="CaromWin"
                onChange={handleChangeAntiRatio}
                value={100 - controlData.CaromWin}
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
                type="number"
                min="1"
                max="100"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="SpinWin"
                onChange={handleChangeRatio}
                value={controlData.SpinWin}
              />
              {" : "}
              <input
                type="number"
                min="1"
                max="100"
                style={{
                  marginLeft: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="SpinWin"
                onChange={handleChangeAntiRatio}
                value={100 - controlData.SpinWin}
              />
            </div>
          </div>
          <button
            style={{
              border: "none",
              background: "#FF9933",
              color: "white",
              borderRadius: "8px",
              height: "40px",
              width: "100px",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Transactions</div>
        <div className="d-flex justify-content-start my-4">
          <div
            className="d-flex flex-column  me-5 p-4"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "210px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>Deposits</div>

            <div>
              <div
                style={{
                  fontSize: "16px",
                  marginTop: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                Min amount
              </div>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="minDeposit"
                onChange={handleChangeControl}
                value={controlData.minDeposit}
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
                Max amount
              </div>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="maxDeposit"
                onChange={handleChangeControl}
                value={controlData.maxDeposit}
              />
            </div>
          </div>
          <div
            className="d-flex flex-column  me-5 p-4"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "15px",
              width: "210px",
            }}
          >
            <div style={{ fontSize: "23px", fontWeight: "600" }}>
              Withdrawls
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
                Min amount
              </div>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="minWithdawal"
                onChange={handleChangeControl}
                value={controlData.minWithdawal}
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
                Max amount
              </div>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                }}
                name="maxWithdawal"
                onChange={handleChangeControl}
                value={controlData.maxWithdawal}
              />
            </div>
          </div>
          <button
            style={{
              border: "none",
              background: "#FF9933",
              color: "white",
              borderRadius: "8px",
              height: "40px",
              width: "100px",
            }}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
      <div className="row">
        <div style={{ fontSize: "22px", fontWeight: "550" }}>Add to Cash</div>
        <div className="d-flex justify-content-start my-4 align-items-center">
          {controlData.coupons.map((item, id) => (
            <div
              className="d-flex flex-column align-items-start me-5 p-3"
              style={{
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                borderRadius: "15px",
                width: "230px",
              }}
            >
              <div style={{ fontSize: "23px", fontWeight: "600" }}>
                {item?.name}
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
                  Amount Credit: {item?.amountCredit}
                </div>
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
                  Cashback: {item?.cashback}
                </div>
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
                <div>{item?.Terms}</div>
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
            onClick={handleModalCoupon}
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
                className="d-flex justify-content-between"
                style={{
                  fontSize: "19px",
                  marginTop: "10px",
                  marginBottom: "20px",
                  fontWeight: "500",
                  color: "#6A6A6A",
                }}
              >
                <div>Link</div>
                <button
                  style={{
                    border: "none",
                    background: "#FF9933",
                    color: "white",
                    borderRadius: "8px",
                    height: "40px",
                    width: "100px",
                  }}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              <input
                type="text"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "400px",
                }}
                name="chatLink"
                onChange={handleChangeControl}
                value={controlData.chatLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Control;
