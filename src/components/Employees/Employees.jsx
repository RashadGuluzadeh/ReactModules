import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Employees.css";

const Employees = ({ search }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="employees">
      {posts
        .filter((post) =>
          post.name.toLowerCase().startsWith(search.toLowerCase())
        )
        .map((post) => (
          <div className="container" key={post.id}>
            <p>Name: {post.name}</p>
            <p>Department: {post.department}</p>
            <p>Role: {post.role}</p>
          </div>
        ))}
    </div>
  );
};

export default Employees;
