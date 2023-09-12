import React from "react";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="w-1/3 text-white bg-slate-200 my-10  p-10  rounded-lg">
      <h1 className="text-5xl font-semibold text-center text-black">
        Bookmark: {bookmarks.length}
      </h1>
      <div className="bg-blue-600 mt-5 text-3xl font-semibold p-4 rounded-md">
        <h2>Reading Time : {readingTime} Minutes</h2>
      </div>
      <div className="my-10 ">
        {bookmarks.map((bookmark, idx) => (
          <Bookmark bookmark={bookmark} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Bookmarks;
