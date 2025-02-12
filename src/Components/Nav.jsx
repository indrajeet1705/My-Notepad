import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="flex  justify-center gap-10 ">
      <NavLink to="/">
        <p>Home</p>
      </NavLink>
      <NavLink to="/notes">Notes</NavLink>
      
    </div>
  );
};

export default Nav;
