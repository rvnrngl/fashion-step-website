import React, { useState } from "react";
import SliderProducts from "./SliderProducts";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Products = () => {
  const [product, setProduct] = useState("Snickers");
  const handleChange = (newProduct) => {
    setProduct(newProduct);
  };
  return (
    <>
      <div className="w-full bg-white text-[#000300] py-10 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="w-[270px] sm:w-[300px] lg:w-[400px] mx-auto my-4 border-2 rounded-md overflow-hidden border-gray-500">
            <SliderProducts handleChange={handleChange} />
          </div>
          <div className="flex flex-col justify-center items-center md:items-start text-xl md:text-2xl">
            <p className="text-orange-400 font-bold uppercase">
              Featured Products
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl py-2 font-bold">
              {product}
            </h1>
            <p className="text-justify mb-4 max-w-[450px] border-t border-b">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
              molestias distinctio, sapiente laudantium porro consectetur
              aliquid praesentium repellat aliquam expedita eligendi atque
              officia, qui nihil reprehenderit amet perferendis explicabo
              temporibus!
            </p>
            <button className="bg-[#000300] text-white w-[200px] p-2 md:p-3 text-xl md:text-2xl font-bold rounded-md inline-flex items-center justify-center group">
              <p className="transition ease-in-out duration-300 group-hover:transform group-hover:translate-x-[-15px]">
                Browse
              </p>
              <MdOutlineKeyboardDoubleArrowRight className="hidden group-hover:inline-block translate-y-[2px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
