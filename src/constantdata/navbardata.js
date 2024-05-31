import webdevelopment from "../assets/icons/app-development.png";
import digitalmarketing from "../assets/icons/digital-services.png";
import webservices from "../assets/icons/promote.png";
import ecommerce from "../assets/icons/ecommerce.png";
import contactus from "../assets/icons/contactus.png";
import careers from "../assets/icons/career-path.png";
import hiring from "../assets/icons/hiring.jpg";

const navbardata = [
  {
    icon: <img src={webdevelopment} alt="webdevelopment"></img>,
    path: "Web-Services",
    text: "Web-Services",
  },

  {
    icon: <img src={digitalmarketing} alt="digitalmarketing"></img>,
    path: "Digital-Marketing",
    text: "Digital-Marketing",
  },

  {
    icon: <img src={webservices} alt="webservices"></img>,
    path: "App-Development",
    text: "App-Development",
  },
  {
    icon: <img src={ecommerce} alt="ecommerce"></img>,
    path: "E-Commerce",
    text: "E-Commerce",
  },
  {
    icon: <img src={careers} alt="careers"></img>,
    path: "/",
    text: "Careers",
  },
  {
    icon: <img src={contactus} alt="contactus"></img>,
    path: "contact",
    text: "Contact-Us",
  },
];

export default navbardata;
