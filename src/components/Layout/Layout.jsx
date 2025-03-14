import React from "react";
import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
export default function Layout() {
  return (
    <>
      <Navbar />

      <div className="container my-5 w-[95%] py-20 lg:py-5 mx-auto">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
