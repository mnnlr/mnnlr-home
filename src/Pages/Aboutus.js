import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/aboutus.css";
import logo1 from "../assets/logo1.jpeg";

const AboutUs = () => {
  return (
    <div>
      <div
        className="home"
        style={
          {
            // backgroundColor: "#12999f",
          }
        }
      >
        <div className="next-div">
          {/* <BackgroundCarousel data={WebServicesData} text1="Web Services" text2="For more Web application" text3="We are providing our best content"/> */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                marginTop: "20px",
                fontWeight: "800",
                fontSize: "50px",
                textDecoration: "underline",
                fontFamily: "serif",
              }}
              className="text-[#808836]"
            >
              Web Services
            </h3>
            <p
              className="text-[#481E14]"
              style={{
                marginTop: "20px",
                padding: "20px",
                fontFamily: "serif",
                fontSize: "30px",
              }}
            >
              Full-Stack Development Frontend Development: Using React, we
              create interactive and responsive user interfaces. Our expertise
              includes state management (Redux, Context API), component
              lifecycle methods, and hooks. Backend Development: With Node.js
              and Express.js, we build robust server-side applications, RESTful
              APIs, and middleware solutions. Database Management: Proficiency
              in MongoDB allows us to design efficient database schemas, perform
              data modeling, and optimize performance. Custom Solutions
              E-Commerce Platforms: Tailored online stores with advanced
              features like shopping carts, payment gateways, and inventory
              management. Content Management Systems: Scalable CMS solutions
              that provide easy content updates and management. Single Page
              Applications: Fast and efficient SPAs that enhance user experience
              and engagement. Quality Assurance Testing and Debugging:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
