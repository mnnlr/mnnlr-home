import { useNavigate } from "react-router-dom";
import "../styles/SideNavbar.css";
import SlideBar from "./SlideBar";
import navbardata from "../constantdata/navbardata";
import logo from "../assets/icons/mnnlr logoone.jpg";

export default function SideNavbar() {
  const navigate = useNavigate();

  return (
    <div className="Navbar-container z-10">
      <div
        className="fixed -mt-28 lg:w-64 w-64 h-24 bg-[#5f8670] flex z-10"
        style={{
          borderBottomRightRadius: "40px",
          boxShadow: "0 0.1rem 0.7rem rgba(37, 37, 37, 0.811) !important",
        }}
      >
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Logo"
          title="MNNLR"
          className="w-20 rounded lg:w-24 h-16 mt-3 ml-11 flex items-center justify-center cursor-pointer"
        />
      </div>
      <SlideBar />
      <div
        className="flex items-center justify-center mx-auto lg:-mt-28 mt-24 gap-3 lg:p-3 lg:gap-4 rounded bg-[#F29727] py-3"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {navbardata.map(({ icon, path, text }, index) => (
          <div
            className="navbar-icon-block "
            onClick={() => navigate(path)}
            style={{}}
            key={index}
          >
            <span className="w-6 lg:w-8"> {icon}</span>
            <p
              className="lg:text-sm text-white"
              style={
                {
                  // fontSize: "12px",
                }
              }
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
