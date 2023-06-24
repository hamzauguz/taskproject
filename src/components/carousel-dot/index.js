import React from "react";

const CarouselDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "8px" : "5px",
      width: isActive ? "8px" : "5px",
      background: isActive ? "white" : "gray",
      textAlign: "right",
    }}
  ></span>
);

export default CarouselDot;
