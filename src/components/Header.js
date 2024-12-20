import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <div className="section-header">
        <Link to="/">Home</Link>
        <Link to="/create-new-post">Create New Post</Link>
        <Link to="/get-all-posts">Get All Posts</Link>
    </div>
  );
}

export default Header;
