import React from "react";
import "./Styles.accenturecard.css";

const AccentureCard = ({ date, description }) => {
  return (
    <div className="accenturenewsPlace">
      <span className="accentureDateTitle">{date}</span>
      <span className="accentureDescTitle">{description}</span>
    </div>
  );
};

export default AccentureCard;
