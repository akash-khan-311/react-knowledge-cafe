import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  };

  const handleReadingTime = (time, id) => {
    setReadingTime(readingTime + time);
    // Remove From Bookmarks
    const remainingBoomarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(remainingBoomarks);
  };
  return (
    <div className="container mx-auto">
      <Header />
      <main className="md:flex gap-x-10">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleAddToBookmark={handleAddToBookmark}
        />
        <Bookmarks
          handleReadingTime={handleReadingTime}
          bookmarks={bookmarks}
          readingTime={readingTime}
        />
      </main>
    </div>
  );
}

export default App;
