import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./module/dashboard";

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<div>test</div>} />
        <Route path="/blog/blog-details" element={<div>blog details</div>} />
        <Route path="/contact" element={<div>contact</div>} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
  );
}

export default Routing;
