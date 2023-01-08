import React, { useEffect, useState } from "react";

import "./Navbar.css";

const Navbar = () => {
  const [shadow, setShadow] = useState(true);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div className={!shadow ? "navbar_container" : "navbar_container_shadow"}>
      <div className="main_navbar">
        <p className="navbar_title">
          Fitness<span className="empty_word">Time</span>
        </p>
        <div className="navbar_links_container">
          <a className="navbar_links" href="/#Home">
            Home
          </a>
          <a className="navbar_links" href="/#Exercise">
            Exercise
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
