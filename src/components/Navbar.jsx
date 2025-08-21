import React, { useState } from "react";
import "../styles/Navbar.css";
import GlassSurface from "./custom/GlassSurface";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="navbar">
        <GlassSurface
          width={1000}
          height={80}
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.8}
          mixBlendMode="screen"
          className="floating-glass"
        >
          <div className="navbar-content">
            <div className="navbar-header">
              <a href="#home">
                <h1>pydash</h1>
              </a>
            </div>

            <div
              className={`hamburger ${isMenuOpen ? "active" : ""}`}
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              )}
            </div>

            <div
              className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}
            >
              <ul>
                <li>
                  <a href="#about" onClick={() => setIsMenuOpen(false)}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </GlassSurface>
      </div>
    </>
  );
}

export default Navbar;
