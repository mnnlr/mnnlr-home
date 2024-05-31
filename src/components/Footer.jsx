import React from "react";
import logo from "../assets/mnllr-logo.jpg";
import { LuInstagram } from "react-icons/lu";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import "../index.css";
function Footer() {
  return (
    <div className="flex gap-1 bg-[#c69774] h-24 lg:h-28 items-center justify-between p-1 lg:p-5">
      <img
        src={logo}
        alt="logo"
        className="w-14 lg:w-32 lg:h-24 rounded-lg h-14 bg-[#c69774]"
      />

      <div className="">
        <h1 className="text-center text-sm lg:text-lg">
          <b>Man Need New Life Resources</b>
        </h1>
        <p className="text-[12px] lg:text-sm">
          &copy; High Quality is our first priority 2024 MNNLR (Man Need New
          Life Resources). All Rights Reserved.
        </p>
      </div>
      <div className=" flex items-center justify-center gap-3 lg:gap-14 text-2xl lg:pe-3">
        <Link to="https://www.instagram.com/mnnlr2024?igsh=MWlyNHNvbHptY2h3Mg==">
          <LuInstagram className="icon-gradient" />
        </Link>
        <Link to="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
          <FaLinkedinIn className="text-[rgb(10,102,194)]" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
