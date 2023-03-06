import React from 'react';

const BlogList = ({ blogs, title }) => {
    return (
      <div className="blog-list">
        <h2>{title}</h2>
        {blogs.map(blog => (
          <div className="blog-preview" key={blog.sbiSeq}>
            <h2>{blog.sbiSeq}</h2>
            <p>Written by {blog.sbiBranchName}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default BlogList;