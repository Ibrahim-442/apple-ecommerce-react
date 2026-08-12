import React from "react";
import "./SideNav.css";
import { useLocation } from "react-router-dom";
import Sidemac from "./allside/Sidemac.jsx";
import Sideiphone from "./allside/Sideiphone.jsx";
import Sideheadphone from "./allside/Sideheadphone.jsx";
import Sideearbuds from "./allside/Sideearbuds.jsx";
import SideAll from "./allside/SideAll.jsx";
export default function SideNav() {
  const location = useLocation();
  return (
    <aside className="sideNav">
   <span className="h3filter">  <h3>Filters</h3></span> 
      <hr/>
      {location.pathname.includes("Mac") && <Sidemac />}
      {location.pathname.includes("Iphone") && <Sideiphone />}
      {location.pathname.includes("Headphone") && <Sideheadphone />}
      {location.pathname.includes("EarBuds") && <Sideearbuds />}
      {location.pathname.includes("All") && <SideAll />}
    </aside>
  );
}
