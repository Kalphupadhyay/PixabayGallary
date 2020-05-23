import React, { useState } from "react";
import "./style.css";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="background">
      <div className="text-container text-center text-white ">
        <h1 className="heading mb-2">
          Stunning free images & royalty free stock
        </h1>
        <p style={{ fontSize: 16 }}>
          Over 1.7 million+ high quality stock images and videos shared by our
          talented community.
        </p>
      </div>
      <div className="max-w-sm rounded overflow-hidden my-10 mx-auto px-6 bg-white py-2  ">
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Search Image Term..."
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageSearch;
