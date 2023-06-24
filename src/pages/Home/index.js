import React from "react";
import "./Styles.Home.css";
import Carousel from "react-grid-carousel";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import CarouselDot from "../../components/carousel-dot";

const Home = () => {
  const images = [
    {
      src: "../../assets/FirstCard/rad-card-1.png",
      alt: "Image 1",
    },
    {
      src: "../../assets/FirstCard/rad-card-2.png",
      alt: "Image 2",
    },
    {
      src: "../../assets/FirstCard/rad-card-3.png",
      alt: "Image 3",
    },
    {
      src: "../../assets/FirstCard/rad-card-4.png",
      alt: "Image 4",
    },
    {
      src: "../../assets/FirstCard/rad-card-5.png",
      alt: "Image 5",
    },
    {
      src: "../../assets/FirstCard/rad-card-6.png",
      alt: "Image 6",
    },
    {
      src: "../../assets/FirstCard/rad-card-7.png",
      alt: "Image 7",
    },
    {
      src: "../../assets/FirstCard/rad-card-8.png",
      alt: "Image 8",
    },
    {
      src: "../../assets/FirstCard/rad-card-9.png",
      alt: "Image 9",
    },
    {
      src: "../../assets/FirstCard/rad-card-10.png",
      alt: "Image 10",
    },
    {
      src: "../../assets/FirstCard/rad-card-11.png",
      alt: "Image 11",
    },
    {
      src: "../../assets/FirstCard/rad-card-12.png",
      alt: "Image 12",
    },
    {
      src: "../../assets/FirstCard/rad-card-13.png",
      alt: "Image 13",
    },
    {
      src: "../../assets/FirstCard/rad-card-14.png",
      alt: "Image 14",
    },
    {
      src: "../../assets/FirstCard/rad-card-15.png",
      alt: "Image 15",
    },
    {
      src: "../../assets/FirstCard/rad-card-16.png",
      alt: "Image 16",
    },
    {
      src: "../../assets/FirstCard/rad-card-17.png",
      alt: "Image 17",
    },
    {
      src: "../../assets/FirstCard/rad-card-18.png",
      alt: "Image 18",
    },
    // Diğer resimleri buraya ekleyin
  ];

  return (
    <div className="HomeContainer">
      {/* Container daki title yeri */}
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

      {/* Container daki ilk carousel card yeri */}
      <div className="firstCardPlace">
        <Carousel
          showDots
          dot={CarouselDot}
          cols={4}
          rows={2}
          gap={1}
          containerClassName={"carouselContainer"}
          dotColorActive={"fff"}
          arrowRight={() => (
            <span className="rightArrow">
              <HiOutlineArrowNarrowRight size={25} />
            </span>
          )}
          arrowLeft={() => (
            <span className="leftArrow">
              <HiOutlineArrowNarrowLeft size={25} />
            </span>
          )}
        >
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="carouselFirsItemImg"
                height={452}
                width={320}
                key={index}
                src={require(`../../assets/FirstCard/rad-card-${
                  index + 1
                }.png`)}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
