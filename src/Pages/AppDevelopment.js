import React from "react";
import BackgroundCarousel from "../components/BackgroundCarousel";
import AppDevelopmentData from "../constantdata/appdevelopment";

const AppDevelopment = () => {
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
          <BackgroundCarousel
            data={AppDevelopmentData}
            text1="App Development"
            text2="For more Web application"
            text3="We are providing our best content"
          />
        </div>
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
            className="text-[#808836]"
            style={{
              marginTop: "20px",
              fontWeight: "800",
              fontSize: "50px",
              textDecoration: "underline",
              fontFamily: "serif",
            }}
          >
            App Development
          </h3>
          <p
            className="mt-5 text-xl px-10 pb-20 lg:px-40 text-[#481E14]"
            style={{
              fontFamily: "breeserif",
            }}
          >
            Mobile app development is the act or process by which a mobile app
            is developed for one or more mobile devices, which can include
            personal digital assistants (PDA), enterprise digital assistants
            (EDA), or mobile phones. Such software applications are specifically
            designed to run on mobile devices, taking numerous hardware
            constraints into consideration. Common constraints include CPU
            architecture and speeds, available memory (RAM), limited data
            storage capacities, and considerable variation in displays
            (technology, size, dimensions, resolution) and input methods
            (buttons, keyboards, touch screens with or without styluses). These
            applications (or 'apps') can be pre-installed on phones during
            manufacturing or delivered as web applications, using server-side or
            client-side processing (e.g., JavaScript) to provide an
            "application-like" experience within a web browser. Mobile app
            development has been steadily growing in terms of revenues and jobs
            created. A 2013 analyst report estimates there are 529,000 direct
            app economy jobs within the EU of which there are 28 members
            (including the UK), 60 percent of which are mobile app developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
