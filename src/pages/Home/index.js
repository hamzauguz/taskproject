import React, { useEffect, useState } from "react";
import "./Styles.Home.css";
import Carousel from "react-grid-carousel";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";
import CarouselDot from "../../components/carousel-dot";
import NewsApi from "../../api/newsapi.json";
import CarouselNewCard from "../../components/carousel-new-card";
import ColorCard1 from "../../assets/ColourfulCard/colorcard1.png";
import ColorCard2 from "../../assets/ColourfulCard/colorcard2.png";
import ColorCard3 from "../../assets/ColourfulCard/colorcard3.png";
import BusinessPersonelImage from "../../assets/businesswomen.png";

const Home = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    setNewsData(NewsApi);
  }, []);
  console.log("newsData: ", newsData);

  const colourfulImages = [
    {
      image: ColorCard1,
      description: "We’re one of Fortune’s World’s Most Admired Companies",
    },
    {
      image: ColorCard2,
      description: "Among Ethisphere’s World’s Most Ethical Companies",
    },
    {
      image: ColorCard3,
      description: "Fortune & Great Place to Work® World’s Best Workplaces™",
    },
  ];

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
          loop
          autoplay={5000}
          dot={CarouselDot}
          cols={4}
          rows={2}
          gap={1}
          containerClassName={"carouselContainer"}
          dotColorActive={"fff"}
          arrowRight={() => (
            <span className="rightArrow">
              <HiOutlineArrowNarrowRight cursor={"pointer"} size={25} />
            </span>
          )}
          arrowLeft={() => (
            <span className="leftArrow">
              <HiOutlineArrowNarrowLeft cursor={"pointer"} size={25} />
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

      {/* 360 Value Title */}
      <div className="thirdTitleContainer">
        <span className="title360Style">360 VALUE</span>
      </div>

      {/* Haber yerinin yapılması */}
      <div className="newsContainer">
        <Carousel
          showDots
          loop
          autoplay={4000}
          dot={CarouselDot}
          cols={1}
          rows={1}
          containerClassName={"carouselContainer"}
          dotColorActive={"fff"}
          arrowRight={() => (
            <span className="rightArrow">
              <HiOutlineArrowNarrowRight cursor={"pointer"} size={25} />
            </span>
          )}
          arrowLeft={() => (
            <span className="leftArrow">
              <HiOutlineArrowNarrowLeft cursor={"pointer"} size={25} />
            </span>
          )}
        >
          {newsData.map((data, index) => (
            <Carousel.Item key={index}>
              <CarouselNewCard
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      {/* Renkli card yerinin yapılması */}
      <div className="colourfulCardContainer">
        <span className="colourfulMainTitle">
          Global recognition and awards
        </span>
        {colourfulImages.map((imgItem, key) => (
          <div className={`colourfulCardItem cardPlace-${key}`}>
            <img
              className={`imageColorStyle cardColor-${key}`}
              src={imgItem.image}
            />
            <span className="colorTitleCard">{imgItem.description}</span>
          </div>
        ))}
      </div>

      {/* Business personel yeri */}
      <div className="businessPersonelContainer">
        <img
          className="businessPersonelImageStyle"
          src={BusinessPersonelImage}
        />
      </div>
    </div>
  );
};

export default Home;
