import React, { useState } from "react";
import Images from "../json/shoes.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CgClose } from "react-icons/cg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleClick = (image) => {
    setClicked(true);
    setSelectedImage(image);
  };

  return (
    <div
      id="gallery"
      className="text-white bg-[#000300] w-full h-screen max-w-[1240px] mx-auto px-5 py-8"
    >
      <h1 className="text-center font-bold text-orange-400 text-xl sm:text-2xl md:text-4xl uppercase pb-8">
        Gallery
      </h1>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1024: 4 }}
        className="relative h-[85%] w-[80%] mx-auto overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        <Masonry gutter="1rem">
          {Images.map((image) => {
            return (
              <div
                key={image.id}
                style={{ width: "100%", display: "block" }}
                onClick={() => handleClick(image.src)}
                className="relative overflow-hidden group cursor-pointer"
              >
                <img
                  src={image.src}
                  style={{ width: "100%", display: "block" }}
                  alt={image.name}
                />
                <div
                  className="absolute bottom-0 left-0 w-full p-3 bg-gradient-to-t from-[#000300] from-5% to-transparent 
                            duration-300 ease-in-out translate-y-[100px] group-hover:translate-y-0"
                >
                  {image.name}
                </div>
              </div>
            );
          })}
        </Masonry>
      </ResponsiveMasonry>
      {clicked === true && (
        <div
          onClick={() => setClicked(false)}
          className="fixed left-0 top-0 bg-[rgba(0,0,0,0.8)] w-screen h-screen z-20"
        >
          <div className="relative w-full h-full">
            <CgClose
              className="absolute left-2/4 bottom-10 rounded-full p-1 text-4xl border-2 -translate-x-2/4 cursor-pointer"
              onClick={() => setClicked(false)}
            />
            <img
              src={selectedImage}
              alt="Image"
              className="w-[80%] sm:w-auto sm:h-[70%] aspect-auto absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-30"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
