import React from "react";
import "../styles/services.css";
import { useNavigate } from "react-router-dom";
function Services() {
  const navigate = useNavigate();

  const arr = [
    {
      images: "web.png",
      title: "Web Services",
      desc: "resxlwxownncxiwencucneiucnieuc",
    },
    {
      images: "coding.png",
      title: "App Development",
      desc: "loresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieuc",
    },
    {
      images: "ui.png",
      title: "Digital Marketing",
      desc: "loresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieuc",
    },
    ,
    {
      images: "ecommerce.png",
      title: "E-commerce Solutions",
      desc: "loresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieucloresxlwxownncxiwencucneiucnieuc",
    },
  ];
  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <>
      {/*<Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Our Services</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center button-container">
        <Col md="auto">
          <Button variant="primary" size="lg" onClick={() => handleButtonClick('/website-design')}>Website Design</Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" size="lg" onClick={() => handleButtonClick('/website-development')}>Website Development</Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" size="lg" onClick={() => handleButtonClick('/ui-ux-design')}>UI/UX Design</Button>
        </Col>
        <Col md="auto">
          <Button variant="primary" size="lg" onClick={() => handleButtonClick('/ecommerce-solutions')}>E-commerce Solutions</Button>
        </Col>
      </Row>
  </Container>*/}
      <div className="service-container">
        <h1
          style={{
            color: "white",
            marginTop: "20px",
          }}
        >
          Our Features & Services
        </h1>
        <div className="service-divs">
          {arr.map((feature, index) => {
            return (
              <div className="service-div ">
                <div className="img-div">
                  <img src={feature.images} alt="img" />
                </div>
                <div className=" text-div">
                  <span className="">{feature.title}</span>
                  <p className="card-text ">{feature.desc}</p>
                </div>
                <div className="btn-div-main">
                  <button
                    className=""
                    onClick={() =>
                      handleButtonClick(
                        feature.title === "Website Design"
                          ? "/website-design"
                          : feature.title === "Website Development"
                          ? "/website-development"
                          : feature.title === "UI/UX Design"
                          ? "/ui-ux-design"
                          : feature.title === "E-commerce Solutions"
                          ? "/ecommerce-solutions"
                          : null
                      )
                    }
                  >
                    Learn More
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Services;
