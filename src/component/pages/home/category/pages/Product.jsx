import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./SideNav/SideNav";

export default function Product() {
  return (
    <div style={{ display: "flex" }}>
      <SideNav />
      <main >
        <Outlet />
      </main>
    </div>
  );
}
