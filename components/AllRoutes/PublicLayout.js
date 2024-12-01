import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const PublicLayout = () => {
  console.log("Rendering PublicLayout at:", new Date().toISOString());
  return (
    <>
      <Navbar />
      <main>
        {/* <Outlet /> */}
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
