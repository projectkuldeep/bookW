import React from "react";
import { useState } from "react";
import { GoFileSubmodule } from "react-icons/go";
import axios from "axios";

const WordTOPdf = () => {
  const [convert, setConvert] = useState("");
  const [selectedFile, serSelectedFile] = useState(null);
  const [downloadError, setDownloadError] = useState("");

  const handelFileChange = (e) => {
    serSelectedFile(e.target.files[0]);
  };
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert("please select a file");
      return;
    }
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      const response = await axios.post(
        "http://localhost:5000/convertFile",
        formData,
        {
          responseType: "blob",
        }
      );
      console.log(response);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log(url);
      const link = document.createElement("a");
      console.log(link);
      link.href = url;
      console.log(link);
      link.setAttribute(
        "download",
        selectedFile.name.replace(/\.[^/.]+$/, "") + ".pdf"
      );
      console.log(link);
      document.body.appendChild(link);
      console.log(link);
      link.click();
      link.parentNode.removeChild(link);
      serSelectedFile(null);
      setDownloadError("");
      setConvert("File Converted  SeccessFully");
    } catch (error) {}
  };

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto container px-6 md:px-40  ">
        <div className=" flex  h-screen items-center  justify-center">
          <div className=" border-2 border-dashed border-indigo-300 shadow-lg px-4 py-2 md:px-8 md:py-6">
            <h1 className=" text-center  text-3xl font-bold mb-4">
              Convert Word To PDF Online
            </h1>
            <p className=" text-sm mb-5 text-center">
              "Our mission is to empower individuals through accessible,
              innovative technology solutions that enhance productivity"
            </p>

            <div className=" flex flex-col items-center space-y-4">
              <input
                type="file"
                accept=".doc,.docx"
                onChange={handelFileChange}
                className=" hidden"
                id="FileInput"
              ></input>
              <label
                htmlFor="FileInput"
                className=" w-full items-center justify-center px-4 py-6 bg-gray-100 text-gray-700  lounded-lg shadow-lg cursor-pointer border-blue-300 hover:bg-blue-700 duration-300 rounded flex text-3xl 
                hover:text-white"
              >
                {" "}
                <GoFileSubmodule className=" text-3xl mr-3 " />
                <span className=" text-3xl mr-4  ">
                  {selectedFile ? selectedFile.name : "Choose File"}
                </span>
              </label>
              <button
                onClick={handelSubmit}
                disabled={!selectedFile}
                className="text-white bg-blue-400  hover:bg-blue-700 font-bold py-2 px-4 rounded  disabled:pointer-events-none disabled:bg-slate-400"
              >
                click here
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WordTOPdf;
