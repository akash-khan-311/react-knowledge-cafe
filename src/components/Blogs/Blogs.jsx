import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-2/3 text-white">
      <h1 className="text-5xl font-semibold">Blogs : {blogs.length}</h1>
      {blogs.map((blog) => (
        <Blog
          blog={blog}
          handleReadingTime={handleReadingTime}
          handleAddToBookmark={handleAddToBookmark}
          key={blog.id}
        />
      ))}
    </div>
  );
};

export default Blogs;
