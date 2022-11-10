import React from "react";

const Nav = () => {
  return (
    <nav className="flex w-full absolute justify-between items-center p-8 z-40">
      <div className="navel ml-4 font-bold text-2xl font-harmond">
        ADAM&nbsp;&nbsp;C.
      </div>
      <div>
        <ul className="flex font-superduper text-2xl ">
          <li className="navel  mx-4">PROJECTS</li>
          <li className="navel mx-4">ABOUT</li>
          <li className="navel mx-4">CONTACT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
