import React, { useState } from "react";
import "../styles/slideBar.css";
import { Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const SlideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <div
        className="ml-48 cursor-pointer absolute -mt-20 z-50 text-5xl lg:text-5xl border-0 text-[#fce09b]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <RxCross2 style={{ color: "#013976" }} />
        ) : (
          <AiOutlineMenuFold style={{ color: "#013976" }} />
        )}
      </div>
      <div className={`menu ${isOpen ? "activeMenu" : ""}`}>
        <div className="text">
          <ul>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/about" className="links">
                About Us
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/services" className="links">
                Our Features & Services
              </Link>
            </li>

            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/contact" className="links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
