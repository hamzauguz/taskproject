import React from "react";
import "./Styles.Home.css";

const Home = () => {
  return (
    <div className="HomeContainer">
      <div className="homeTitlePlace">
        <div className="firstLeftTitle">
          <span className="homeFirstTitle responsiveLeft">REINVENT&nbsp;</span>
          <span className="homeFirstTitle responsiveRight">WHAT YOUR</span>
        </div>
        <div className="firstRightTitle">
          <span className="homeFirstTitle responsiveLeft">BUSINESS&nbsp;</span>
          <span className="homeFirstTitle responsiveSecondRight">COULD BE</span>
        </div>
        <span className="titleLets ">Let there be change</span>
      </div>
    </div>
  );
};

export default Home;
