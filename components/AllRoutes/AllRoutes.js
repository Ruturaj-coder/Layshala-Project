import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../AllRoutes/PublicLayout";
import DashboardLayout from "../AllRoutes/DashboardLayout";
import Home from "../Home/Home";
import Login from "../Login/Login";
import StudentLogin from "../Login/StudentLogin/StudentLogin";
import AdminLogin from "../Login/AdminLogin/AdminLogin";
import Register from "../Register/Register";
import Contact from "../Contact/Contact";
import NoPage from "../NoPage";
import Home1 from "../pages/Home1";
import Login1 from "../pages/Login1";

const AllRoutes = () => {
  console.log("Rendering AllRoutes Component");

  return (
    <Routes>
      {/* Public routes */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login/student" element={<StudentLogin />} />
        <Route path="/login/admin" element={<AdminLogin />} />
      </Route>

      {/* dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/login/admin/home" element={<Home1 />} />
        <Route path="/login/admin/login" element={<Login1 />} />
      </Route>

      {/* Catch-all route */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default AllRoutes;
