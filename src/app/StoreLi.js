import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    //여기서는 async await 을 쓸 수 없다.
    fetch("http://localhost:9999/admin/store")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home">   
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};