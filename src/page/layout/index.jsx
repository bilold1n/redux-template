import React, { useEffect, useState } from "react";
import Products from "../Products";
import Header from "../../Components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
