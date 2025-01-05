import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import React from "react";
import SideNav from "../sideNav/SideNav";
import Search from "../Search/Search";

const MobileNav = () => {
  const [isSideNavOpen, setSideNavOpen] = useState(false);

  const handleOpenSideNav = () => {
    setSideNavOpen(true);
    console.log("open");
  };

  const handleCloseSideNav = () => {
    setSideNavOpen(false);
    console.log("closed");
  };
  return (
    <div className="mobile-nav-container">
      <button className="burger-button" onClick={handleOpenSideNav}>
        <MenuIcon className="burger-icon icon" />
      </button>

      <img src="/marvelLogo.svg" alt="Marvel Logo" />
      <SideNav isOpen={isSideNavOpen} onclose={handleCloseSideNav} />
      <Search/>
    </div>
  );
};

export default MobileNav;
