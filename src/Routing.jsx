import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./module/dashboard";
import ContactUs from "./module/contactus";
import MovieDetails from "./module/movieDetails";

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<div>test</div>} />
        <Route path="/blog/blog-details" element={<div>blog details</div>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/movie-details" element={<MovieDetails />} />
      </Routes>
  );
}

export default Routing;
