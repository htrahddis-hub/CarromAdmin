import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import img from "../../assests/image 1.png";
import "./upload.css";

const Upload = () => {
  const [choice, setChoice] = React.useState("Top Banner");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
  });

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const handleChoice = (e) => {
    setChoice(e.target.innerHTML);
  };

  return (
    <div className="container-fluid ps-4">
      <div className="pt-5 mt-5"></div>
      <div
        className="row"
        style={{
          color: "#FF9933",
          fontSize: "23px",
          fontWeight: "500",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        Upload
      </div>
      <div className="row">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle d-flex justify-content-between align-items-center px-3"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ width: "350px" }}
          >
            {choice}
          </button>
          <ul class="dropdown-menu" style={{ width: "350px" }}>
            <li>
              <p
                class="dropdown-item "
                onClick={handleChoice}
                name="Top Banner"
              >
                Top Banner
              </p>
            </li>
            <li>
              <p
                class="dropdown-item"
                onClick={handleChoice}
                name="Carrom Thumbnail"
              >
                Carrom Thumbnail
              </p>
            </li>
            <li>
              <p
                class="dropdown-item"
                onClick={handleChoice}
                name="Spin Thumbnail"
              >
                Spin Thumbnail
              </p>
            </li>
            <li>
              <p
                class="dropdown-item"
                onClick={handleChoice}
                name="Bottom Banner"
              >
                Bottom Banner
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="col-9">
          <div
            style={{ color: "rgba(0, 0, 0, 0.685)" }}
            {...getRootProps({
              className:
                "dropzone d-flex flex-column align-items-center pt-5 pb-3 mt-3  border",
            })}
          >
            <AiOutlineCloudUpload size={48} />
            <input {...getInputProps()} />
            <p>Drag and drop files here</p>
            <ul>{files}</ul>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="ps-0"
          style={{
            color: "#FF9933",
            fontSize: "23px",
            fontWeight: "500",
            width: "100%",
            marginBottom: "20px",
          }}
        >
          Attach Link
        </div>
        <div className="ps-0">
          <input
            type="text"
            style={{
              border: "none",
              borderBottom: "2px solid #AEB1D4",
              width: "400px",
            }}
          />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button
            type="text"
            style={{
              border: "none",
              width: "200px",
              height: "40px",
              borderRadius: "5px",
              background: "#FF9933",
              color: "white",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row mb-3" style={{ fontSize: "20px", fontWeight: "600" }}>
        Uploaded
        <div className="d-flex">
          {[...Array(4)].map(() => (
            <div>
              <img
                src={img}
                style={{ borderRadius: "8px" }}
                className="p-3 border mt-3 me-3"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upload;
