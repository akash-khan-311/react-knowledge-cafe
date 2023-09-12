import React from "react";

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div>
      <div className=" text-black bg-white px-5 py-3 rounded-xl shadow-2xl my-3">
        <h1 className="text-2xl font-semibold my-5">{title}</h1>
      </div>
    </div>
  );
};

export default Bookmark;
