import React from "react";
import WebServicesData from "../constantdata/webdevelopment";
import BackgroundCarousel from "../components/BackgroundCarousel";


const WebServices = () => {
  return (
    <div>
      <div
        className="home"
        style={
          {
            //Color: "#12999f",
          }
        }
      >
        <div className="next-div">
          <BackgroundCarousel
            data={WebServicesData}
            text1="Web Services"
            text2="For more Web application"
            text3="We are providing our best content"
          />

          <div
            className="bg-gray-100"
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
                fontWeight: "500",
                fontSize: "50px",
                textDecoration: "underline",
                fontFamily: "serif",
              }}
              className="text-[#808836]"
            >
              Web Services
            </h3>
            <p
              className="mt-5 text-xl px-10 pb-20 lg:px-40 text-[#481E14]"
              style={{
                fontFamily: "breeserif",
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

export default WebServices;
