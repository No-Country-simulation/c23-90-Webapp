import React from "react";
import { Carousel } from "react-bootstrap";

const HostCarousel = () => {
  const hostTypes = [
    "Farms",
    "Sustainable Communities",
    "Eco Villages",
    "Hostels",
    "Guest Houses",
    "Camping Sites",
    "Holistic Centers",
  ];

  return (
    <Carousel>
      {hostTypes.map((host, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`path_to_image/${host.toLowerCase().replace(" ", "_")}.jpg`}
            alt={host}
          />
          <Carousel.Caption>
            <h3>{host}</h3>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HostCarousel;
