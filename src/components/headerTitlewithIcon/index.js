import React from "react";
import "./Styles.headerTitlewithIcon.css";

const HeaderTitlewithIcon = ({ firstIcon, title, icon, className }) => {
  return (
    <span className={`headerTitlewithIcon ${className}`}>
      {firstIcon} {title} {icon}
    </span>
  );
};

export default HeaderTitlewithIcon;
