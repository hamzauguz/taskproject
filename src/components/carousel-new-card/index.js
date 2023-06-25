import React from "react";
import "./Styles.carousenewcard.css";
const CarouselNewCard = ({ image, title, description, onClick }) => {
  return (
    <div className="carouselNewsPlace">
      <img className="carouselNewsImg" src={image} />
      <div className="carouselNewsRightContainer">
        <span className="newsTitle">{title}</span>
        <span className="newsDesc">{description}</span>
        <span onClick={onClick} className="readmore-button">
          Read more <div className="purpleButton" />
        </span>
      </div>
    </div>
  );
};

export default CarouselNewCard;
