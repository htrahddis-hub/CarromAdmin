import React from "react";
import { useDropzone } from "react-dropzone";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { GetUploads, UpdateUploads } from "../../api";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import "./upload.css";

const Upload = () => {
  const [choice, setChoice] = React.useState("Top Banner");
  const [data, setData] = React.useState({});
  const [file, setFile] = React.useState();
  const [fileName, setFileName] = React.useState();
  const [fileURL, setFileURL] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await GetUploads();
      if (data.success && data.message === "Fetched Successfuly!")
        setData(data.data);
    };
    fetchData();
  }, [fileName, fileURL]);

  const onDrop = React.useCallback((acceptedFiles) => {
    const url = URL.createObjectURL(acceptedFiles?.[0]);
    setFileName(acceptedFiles?.[0].path);
    const fetcData = async () => {
      setFile(await fetch(url).then((r) => r.blob()));
    };
    fetcData();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    onDrop,
  });

  const handleChoice = (e) => {
    setChoice(e.target.innerHTML);
  };

  const handleSubmit = async () => {
    if (!fileURL) {
      if (!file) {
        alert("Upload file or attach link");
        return;
      }
      const fileRef = ref(storage, `uploadimages/${fileName + v4()}`);
      const next = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(next.ref);
      let input;
      if (choice === "Top Banner") input = { top: url };
      if (choice === "Carrom Thumbnail") input = { carom: url };
      if (choice === "Spin Thumbnail") input = { spin: url };
      if (choice === "Bottom Banner") input = { bottom: url };
      const data1 = await UpdateUploads(data._id, input);
      if (data1.success && data1.message === "Updated Successfuly!") {
        setFileName();
        setFile();
        alert("updated");
      }
    } else {
      let input;
      if (choice === "Top Banner") input = { top: fileURL };
      if (choice === "Carrom Thumbnail") input = { carom: fileURL };
      if (choice === "Spin Thumbnail") input = { spin: fileURL };
      if (choice === "Bottom Banner") input = { bottom: fileURL };
      const data1 = await UpdateUploads(data._id, input);
      if (data1.success && data1.message === "Updated Successfuly!") {
        setFileURL();
        alert("updated");
      }
    }
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
            <ul>{fileName ? <li>{fileName}</li> : ""}</ul>
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="row mb-3" style={{ fontSize: "20px", fontWeight: "600" }}>
        Uploaded
        <div className="d-flex mb-4">
          <div className="d-flex flex-column p-3 border mt-3 me-3 justify-content-between align-items-center">
            <img
              src={data?.top}
              alt="no img found"
              style={{ borderRadius: "8px", width: "215px", height: "auto" }}
            />
            <div>Top Banner</div>
          </div>
          <div className="d-flex flex-column p-3 border mt-3 me-3 justify-content-between align-items-center">
            <img
              src={data?.bottom}
              alt="no img found"
              style={{ borderRadius: "8px", width: "215px", height: "auto" }}
            />
            <div>Bottom Banner</div>
          </div>
          <div className="d-flex flex-column p-3 border mt-3 me-3 justify-content-between align-items-center">
            <img
              src={data?.carom}
              alt="no img found"
              style={{ borderRadius: "8px", width: "215px", height: "auto" }}
            />
            <div>Carrom Thumbnail</div>
          </div>
          <div className="d-flex flex-column p-3 border mt-3 me-3 justify-content-between align-items-center">
            <img
              src={data?.spin}
              alt="no img found"
              style={{ borderRadius: "8px", width: "215px", height: "auto" }}
            />
            <div>Spin Thumbnail</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
