import React from "react";
import { FaBeer, FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleReadingTime }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="shadow-2xl bg-white text-black my-10 rounded-xl space-y-5">
      <img
        className="w-full"
        src={cover}
        alt={`cover photo of title ${title}`}
      />
      <div className="p-10">
        <div className="flex justify-between items-center ">
          <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
              <h3 className="text-2xl">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center">
            <span>{reading_time} min read</span>
            <button
              onClick={() => handleAddToBookmark(blog)}
              className="ml-3 text-red-600 text-2xl"
            >
              <FaBookmark />
            </button>
          </div>
        </div>
        <h1 className="text-4xl my-5 font-semibold">{title}</h1>
        <p>
          {hashtags.map((hash, idx) => (
            <span key={idx}>
              <a className="text-blue-500" href="">
                {" "}
                #{hash}
              </a>
            </span>
          ))}
        </p>
        <button
          onClick={() => handleReadingTime(reading_time,id)}
          className="text-xl text-purple-800 hover:underline mt-5"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
};

export default Blog;
