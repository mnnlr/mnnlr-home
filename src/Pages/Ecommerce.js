import React from "react";
import BackgroundCarousel from "../components/BackgroundCarousel";
import ecommecedata from "../constantdata/ecommerce";

const Ecommerce = () => {
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
            data={ecommecedata}
            text1="E-Commerce Services"
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
            E-Commerce
          </h3>
          <p
            className="mt-5 text-xl px-10 pb-20 lg:px-40 text-[#481E14]"
            style={{
              fontFamily: "breeserif",
            }}
          >
            E-commerce (electronic commerce) is the activity of electronically
            buying or selling products on online services or over the Internet.
            E-commerce draws on technologies such as mobile commerce, electronic
            funds transfer, supply chain management, Internet marketing, online
            transaction processing, electronic data interchange (EDI), inventory
            management systems, and automated data collection systems.
            E-commerce is the largest sector of the electronics industry and is
            in turn driven by the technological advances of the semiconductor
            industry. Defining e-commerce The term was coined and first employed
            by Robert Jacobson, Principal Consultant to the California State
            Assembly's Utilities & Commerce Committee, in the title and text of
            California's Electronic Commerce Act, carried by the late Committee
            Chairwoman Gwen Moore (D-L.A.) and enacted in 1984. E-commerce
            typically uses the web for at least a part of a transaction's life
            cycle although it may also use other technologies such as e-mail.
            Typical e-commerce transactions include the purchase of products
            (such as books from Amazon) or services (such as music downloads in
            the form of digital distribution such as the iTunes Store). There
            are three areas of e-commerce: online retailing, electronic markets,
            and online auctions. E-commerce is supported by electronic business.
            The existence value of e-commerce is to allow consumers to shop
            online and pay online through the Internet, saving the time and
            space of customers and enterprises, greatly improving transaction
            efficiency, especially for busy office workers, and also saving a
            lot of valuable time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
