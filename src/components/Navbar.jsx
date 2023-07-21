/* eslint-disable no-unused-vars */
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-[50px] px-5 p-2 flex items-center justify-between shadow-md">
      <div>Logo</div>

      <div className="flex gap-8">
        <p>Item1</p>
        <p>Item2</p>
        <p>Item3</p>
      </div>
    </nav>
  );
};

export default Navbar;
