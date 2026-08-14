import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";
import "./product.css"
export default function Product() {
  return (
    <div className="productLayout">
      <SideNav />
      <main >
        <Outlet />
      </main>
    </div>
  );
}
