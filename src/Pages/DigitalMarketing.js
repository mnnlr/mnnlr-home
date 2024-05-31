import React from "react";
import BackgroundCarousel from "../components/BackgroundCarousel";
import DigitalMarketing from "../constantdata/digitalmarkeing";

const DigitalMarketings = () => {
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
            data={DigitalMarketing}
            text1="Digital Marketing"
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
            Digital Marketing
          </h3>
          <p
            className="mt-5 text-xl px-10 pb-20 lg:px-40 text-[#481E14]"
            style={{
              fontFamily: "breeserif",
            }}
          >
            Digital marketing is the component of marketing that uses the
            Internet and online-based digital technologies such as desktop
            computers, mobile phones, and other digital media and platforms to
            promote products and services. Its development during the 1990s and
            2000s changed the way brands and businesses use technology for
            marketing. As digital platforms became increasingly incorporated
            into marketing plans and everyday life, and as people increasingly
            used digital devices instead of visiting physical shops, digital
            marketing campaigns have become prevalent, employing combinations of
            search engine optimization (SEO), search engine marketing (SEM),
            content marketing, influencer marketing, content automation,
            campaign marketing, data-driven marketing, e-commerce marketing,
            social media marketing, social media optimization, e-mail direct
            marketing, display advertising, e-books, and optical disks and games
            have become commonplace. Digital marketing extends to non-Internet
            channels that provide digital media, such as television, mobile
            phones (SMS and MMS), callbacks, and on-hold mobile ringtones. The
            extension to non-Internet channels differentiates digital marketing
            from online marketing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketings;
