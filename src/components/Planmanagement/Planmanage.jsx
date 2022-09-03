import React from "react";
import "./planmanage.css";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { AiFillEdit, AiOutlineClose, AiFillDelete } from "react-icons/ai";
import {
  GetSpinPlan,
  UpdateSpinPlan,
  GetCarromPlan,
  AddCarromPlan,
  UpdateCarromPlan,
  DeleteCarromPlan,
} from "../../api";
import { v4 } from "uuid";
import Modal from "react-modal";

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

const Planmanage = () => {
  const [file, setFile] = React.useState();
  const [fileUrl, setFileUrl] = React.useState();
  const [select, setSelect] = React.useState(true);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [input, setInput] = React.useState({ entryFee: 0, prize: 0 });
  const [spinData, SetSpinData] = React.useState({
    violet: 0,
    purple: 0,
    white: 0,
    red: 0,
    blue: 0,
    green: 0,
    orange: 0,
    yellow: 0,
  });
  const [planData, setPlanData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetSpinPlan();
      if (data.success && data.message === "Fetched Successfuly!")
        SetSpinData(data.data);
      const data1 = await GetCarromPlan();
      if (data.success && data.message === "Fetched Successfuly!")
        setPlanData(data1.data);
    };
    fetchData();
  }, [edit, modalIsOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (edit) {
      if (!fileUrl) {
        if (!file) {
          alert("attach the image");
          return;
        }
        const fileRef = ref(storage, `planimages/${file.name + v4()}`);
        const next = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(next.ref);
        const data = await UpdateCarromPlan(input, url);

        if (data.success && data.message === "Updated Successfuly!") {
          setInput({ entryFee: 0, prize: 0 });
          setFile();
          closeModal();
          setEdit(false);
        }
      } else {
        const data = await UpdateCarromPlan(input, fileUrl);

        if (data.success && data.message === "Updated Successfuly!") {
          setInput({ entryFee: 0, prize: 0 });
          setFile();
          closeModal();
          setEdit(false);
        }
      }
    } else {
      if (!file) {
        alert("attach the image");
        return;
      }
      const fileRef = ref(storage, `planimages/${file.name + v4()}`);
      const next = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(next.ref);
      const data = await AddCarromPlan(input, url);

      if (data.success && data.message === "Added Successfuly!") {
        setInput({ entryFee: 0, prize: 0 });
        setFile();
        closeModal();
      }
    }
  };

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setFileUrl();
  };

  const handleInput = (e) => {
    setInput((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleEdit = (id) => {
    setEdit(true);
    setInput((_) => {
      return planData.find((item) => item._id === id);
    });
    setFileUrl((_) => {
      const ans = planData.find((item) => item._id === id);
      return ans?.image;
    });
    openModal();
  };

  const handleDelete = async (id) => {
    const data = await DeleteCarromPlan(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setPlanData((old) => {
        old = old.filter((item) => item._id !== id);
        return [...old];
      });
    }
  };

  const handleChangeSpin = (e) => {
    SetSpinData((old) => {
      return { ...old, [e.target.name]: parseInt(e.target.value) };
    });
  };

  const handleSpinUpdate = async () => {
    const data = await UpdateSpinPlan(spinData);
    if (data.success && data.message === "Updated Successfuly!") {
      alert("updated");
    }
  };

  const handleSpin = () => {
    setSelect(false);
  };

  const handleCarrom = () => {
    setSelect(true);
  };

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setEdit(false);
    setIsOpen(false);
  }

  return (
    <div className="container-fluid">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="d-flex justify-content-end">
          <button
            onClick={closeModal}
            style={{ border: "none", backgroundColor: "white" }}
          >
            <span>
              <AiOutlineClose size={18} />
            </span>
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="Coins">Entry Fee (in INR)</label>
            <input
              type="number"
              className="form-control mt-3"
              id="Coins"
              aria-describedby="Entry Fees"
              name="entryFee"
              value={input?.entryFee}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Amount">Prize Money (in INR)</label>
            <input
              type="number"
              className="form-control mt-3"
              id="Amount"
              name="prize"
              value={input?.prize}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Amount">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleChange}
              className="mt-3"
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="button-style">
              Add
            </button>
          </div>
        </form>
      </Modal>
      <div className="mt-5 pt-5"></div>
      <div
        className="row mb-4 ms-1"
        style={{ color: "#FF9933", fontSize: "25px", fontWeight: "500" }}
      >
        Plan Management
      </div>
      <div
        className="d-flex justify-content-start pb-2 align-items-center"
        style={{
          fontSize: "25px",
          fontWeight: "600",
          marginBottom: "8px",
          borderBottom: "1px solid #0000002e",
        }}
      >
        <div
          style={{ fontSize: select ? "" : "20px", cursor: "pointer" }}
          onClick={handleCarrom}
        >
          Carrom Game
        </div>
        <div
          className="ms-4"
          style={{ fontSize: select ? "20px" : "", cursor: "pointer" }}
          onClick={handleSpin}
        >
          Spin Game
        </div>
      </div>
      {select ? (
        <div className="ms-3 mt-4">
          <div
            className="row mb-4 ms-1"
            style={{ color: "#FF9933", fontSize: "25px", fontWeight: "500" }}
          >
            Tournaments
          </div>
          <div className="d-flex justify-content-start my-4 align-items-center flex-wrap">
            {planData.map((item, id) => (
              <div
                className="d-flex flex-column align-items-start me-5 p-3"
                style={{
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                  borderRadius: "15px",
                  
                  // width: "230px",
                }}
                key={item._id}
              >
                <div
                  className="d-flex justify-content-between"
                  style={{
                    fontSize: "23px",
                    fontWeight: "600",
                    width: "100%",
                  }}
                >
                  <div>Tournament {id + 1}</div>{" "}
                  <div>
                    <AiFillEdit
                      style={{ cursor: "pointer",marginLeft:"25px" }}
                      onClick={() => handleEdit(item._id)}
                    />
                    <AiFillDelete
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                      onClick={() => handleDelete(item._id)}
                    />
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
                    Entry Fee
                  </div>
                  <div
                    type="text"
                    style={{
                      marginRight: "10px",
                      border: "none",
                      borderBottom: "2px solid #AEB1D4",
                      width: "40px",
                    }}
                  >
                    {item?.entryFee}
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
                    Prize Money
                  </div>
                  <div
                    style={{
                      marginRight: "10px",
                      border: "none",
                      borderBottom: "2px solid #AEB1D4",
                      width: "40px",
                    }}
                  >
                    {item?.prize}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      marginTop: "20px",
                      marginBottom: "10px",
                      fontWeight: "500",
                      color: "#6A6A6A",
                    }}
                  >
                    Image:{" "}
                    <a href={item?.image} target="_blank" rel="noreferrer">
                      click here
                    </a>
                  </div>
                </div>
              </div>
            ))}
            <div
              className=" d-flex justify-content-center align-items-center add-symbol-big"
              onClick={openModal}
            >
              +
            </div>
          </div>
        </div>
      ) : (
        <div className="ms-3 mt-4">
          <div
            className="d-flex justify-content-between mb-4 ms-1"
            style={{
              color: "#FF9933",
              fontSize: "25px",
              fontWeight: "500",
              width: "400px",
            }}
          >
            <div>Amount</div>
            <div>
              <button className="button-style" onClick={handleSpinUpdate}>
                Update
              </button>
            </div>
          </div>
          <div className="d-flex flex-column  ms-2">
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Violet{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.violet}
                name="violet"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Purple{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.purple}
                name="purple"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                White{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.white}
                name="white"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Red{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.red}
                name="red"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Blue{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.blue}
                name="blue"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Green{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.green}
                name="green"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Orange{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.orange}
                name="orange"
                onChange={handleChangeSpin}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center"
              style={{ width: "150px" }}
            >
              <span
                style={{
                  color: "#6A6A6A",
                  fontWeight: "700",
                  fontSize: "22px",
                }}
              >
                Yellow{" "}
              </span>
              <input
                type="number"
                style={{
                  marginRight: "10px",
                  border: "none",
                  borderBottom: "2px solid #AEB1D4",
                  width: "40px",
                  fontSize: "18px",
                }}
                value={spinData?.yellow}
                name="yellow"
                onChange={handleChangeSpin}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Planmanage;
