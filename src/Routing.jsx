import React from "react";
import { Route, Routes } from "react-router";
import Dashboard from "./module/dashboard";
import ContactUs from "./module/contactus";
import MovieDetails from "./module/movieDetails";
import Header from "./module/header";
import Blog from "./module/blog";
import About from "./module/about";

function Routing() {
  return (
      <Routes>
        <Route path="/" element={<><Header /><Dashboard /></>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/blog-details" element={<div>blog details</div>} />
        <Route path="/contact" element={<><Header /><ContactUs /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/movie-details/:id" element={<MovieDetails />} />
      </Routes>
  );
}

export default Routing;
