import React from "react";
import { XIcon } from "@heroicons/react/solid";
const SideNav = ({ isOpen, onclose }) => {
  return (
    <div className={`side-nav ${isOpen ? "open" : "closed"}`}>
      <button onClick={onclose} className="close-btn"><XIcon className="close-icon icon"/></button>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
