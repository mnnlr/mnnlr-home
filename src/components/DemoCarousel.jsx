import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import { Carousel } from 'react-bootstrap-carousel';

const GmrGroupHome = () => {
  const [headingColor, setHeadingColor] = useState('black');

  useEffect(() => {
    const handleSlideChange = (prevIndex, nextIndex) => {
      if (nextIndex === 0) {
        setHeadingColor('black');
      } else if (nextIndex === 1) {
        setHeadingColor('blue');
      } else if (nextIndex === 2) {
        setHeadingColor('green');
      }
    };

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div>
      <header className="App-header">
        <div className="logo">
          <img src="https://www.gmrgroup.in/wp-content/uploads/2021/03/GMR-Logo-White.png" alt="GMR Group Logo"/>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="hero">
        <h1 style={{ color: headingColor }}>Welcome to GMR Group</h1>
        <p>A leading global infrastructure conglomerate with interests in Airports, Energy, Highways and Urban Infrastructure</p>
        <Carousel onSelect={(prevIndex, nextIndex) => handleSlideChange(prevIndex, nextIndex)}>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
          </Carousel.Item>
          <Carousel.Item>
            <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
          </Carousel.Item>
        </Carousel>
      </section>
      {/* Rest of the page */}
    </div>
  );
};

export default GmrGroupHome;