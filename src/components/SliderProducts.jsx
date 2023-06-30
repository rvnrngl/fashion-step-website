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
  const productDescription = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, soluta nulla ullam atque dolorem quia vel quisquam similique sunt, dignissimos reiciendis fugiat, nemo incidunt natus veritatis inventore totam voluptas ex!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem praesentium sunt molestias sint ratione ipsam nihil minima. Vero rerum reprehenderit quasi nisi excepturi placeat tempora architecto atque labore. Reprehenderit!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam voluptates neque numquam perferendis delectus quibusdam atque, eveniet porro, omnis aut eius illum? Eos, dolores quaerat. Voluptates accusamus perferendis voluptas.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro omnis tenetur laborum dicta, sint quae atque esse saepe, neque asperiores libero nulla a, ipsum deserunt. Expedita amet voluptatem iste quas.",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minima veniam saepe laborum tempora repudiandae hic eaque molestiae, ipsum quo iste fugiat suscipit consequatur iusto, placeat distinctio harum, odit exercitationem.",
  ];
  const onChangeItem = (index) => {
    handleChange(productName[index], productDescription[index]);
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
