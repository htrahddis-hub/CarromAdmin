import React from "react";
import Modal from "react-modal";
import { AiFillEdit, AiOutlineClose, AiFillDelete } from "react-icons/ai";
import "./content.css";
import { AddFAQ, DeleteFAQ, GetFAQ, UpdateFAQ } from "../../api";

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

const Content = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [inputFAQ, setInputFAQ] = React.useState({ question: "", answer: "" });
  const [faqData, setFaqData] = React.useState([]);
  const [edit, setEdit] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetFAQ();
      if (data.success && data.message === "Fetched Successfuly!")
        setFaqData(data.data);
    };
    fetchData();
  }, [modalIsOpen]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setEdit(false);
    setInputFAQ({ question: "", answer: "" });
  }

  const handleInput = (e) => {
    setInputFAQ((old) => {
      return { ...old, [e.target.name]: e.target.value };
    });
  };

  const handleEdit = (id) => {
    setEdit(true);
    setInputFAQ((_) => {
      return faqData.find((item) => item._id === id);
    });
    openModal();
  };

  const handleDelete = async (id) => {
    const data = await DeleteFAQ(id);
    if (data.success && data.message === "Deleted Successfuly!") {
      setFaqData((old) => {
        old = old.filter((item) => item._id !== id);
        return [...old];
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (edit) {
      const data = await UpdateFAQ(inputFAQ);
      if (data.success && data.message === "Updated Successfuly!") {
        setEdit(false);
        setInputFAQ({ question: "", answer: "" });
        closeModal();
      }
    } else {
      const data = await AddFAQ(inputFAQ);
      if (data.success && data.message === "Added Successfuly!") {
        closeModal();
        setInputFAQ({ question: "", answer: "" });
      }
    }
  };

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
            <label htmlFor="Question">Question</label>
            <input
              type="text"
              className="form-control mt-3"
              id="Question"
              aria-describedby="Question"
              name="question"
              value={inputFAQ?.question}
              onChange={handleInput}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Answer">Answer</label>
            <input
              type="text"
              className="form-control mt-3"
              id="Answer"
              name="answer"
              aria-describedby="Answer"
              value={inputFAQ?.answer}
              onChange={handleInput}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="button-style">
              Add
            </button>
          </div>
        </form>
      </Modal>
      <div className="pt-5 mt-5"></div>
      <div
        className="d-flex justify-content-between alihn-items-center"
        style={{
          color: "#FF9933",
          fontSize: "25px",
          fontWeight: "500",
          width: "100%",
          marginBottom: "40px",
        }}
      >
        <div>FAQ</div>
        <div>
          <button
            style={{
              marginRight: "70px",
              border: "none",
              background: "#FF9933",
              color: "white",
              borderRadius: "8px",
              height: "40px",
              width: "90px",
              fontSize: "20px",
            }}
            onClick={openModal}
          >
            ADD +
          </button>
        </div>
      </div>
      <div className="row">
        {faqData.map((item) => (
          <div
            className="col-11 ms-3 p-3 mb-5"
            style={{
              boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
              borderRadius: "20px",
            }}
            key={item._id}
          >
            <div className="d-flex justify-content-end m-0">
              <AiFillEdit size={21} onClick={() => handleEdit(item._id)} />
              <AiFillDelete
                size={21}
                className="ms-3"
                onClick={() => handleDelete(item._id)}
              />
            </div>
            <div
              style={{
                fontSize: "17px",
                fontWeight: "500",
                color: "black",
                marginBottom: "5px",
              }}
            >
              {item.question}
            </div>
            <div style={{ fontSize: "16px" }}>{item.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
