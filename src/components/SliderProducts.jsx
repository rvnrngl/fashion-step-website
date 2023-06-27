import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/shoes-1.png";
import img2 from "../assets/shoes-2.png";
import img3 from "../assets/shoes-3.png";
import img4 from "../assets/shoes-4.png";
import img5 from "../assets/shoes-5.png";

const SliderProducts = ({ handleChange }) => {
  const images = [img1, img2, img3, img4, img5];
  const productName = [
    "Snickers",
    "Brogue",
    "Sport Shoes",
    "Hiking Boots",
    "Derby Shoes",
  ];
  const onChangeItem = (index) => {
    handleChange(productName[index]);
  };
  return (
    <>
      <Carousel
        showStatus={false}
        showThumbs={false}
        dynamicHeight={false}
        useKeyboardArrows={true}
        swipeable={true}
        emulateTouch={true}
        stopOnHover={true}
        autoPlay={true}
        infiniteLoop={true}
        onChange={(index) => onChangeItem(index)}
      >
        {images.map((item, index) => {
          return (
            <div key={index}>
              <img src={item} alt={item} height="200px" />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default SliderProducts;
