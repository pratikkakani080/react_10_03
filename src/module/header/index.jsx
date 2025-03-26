import React from "react";
import { Link, useNavigate } from "react-router";

function Header() {
  const navigate = useNavigate();
  return (
    <div style={{ borderBottom: '1px solid', width: '100%'}}>
      <header >
        <Link to="/blog">Blog</Link>
        <Link to="/blog/blog-details">Blog details</Link>
        <Link to="/contact">Contact us</Link>
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/about")}>
          About
        </span>
      </header>
    </div>
  );
}

export default Header;
