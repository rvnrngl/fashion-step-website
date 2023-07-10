import Typed from "typed.js";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useRef } from "react";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FASHION.", "CARE."],
      typeSpeed: 120,
      backSpeed: 120,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <>
      <div id="home">
        <div className="h-[calc(100vh_-_95px)] w-full max-w-[800px] flex flex-col px-4 justify-center items-center text-center mx-auto">
          <p className=" text-orange-400 font-bold text-md sm:text-xl md:text-3xl p-2">
            "Good shoes take you good places.”
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl md:py-6 font-bold">
            <span className="text-orange-400">OUR </span>
            FASHION SHOES
          </h1>
          <div className="flex mx-auto justify-center gap-1 md:gap-2 items-baseline">
            <p className="text-lg sm:text-xl md:text-3xl py-4 font-bold">
              Shoes designed with
            </p>
            <span
              ref={el}
              className="text-xl sm:text2xl md:text-4xl font-bold text-orange-400 uppercase"
            />
          </div>
          <p className="text-lg md:text-2xl font-bold py-4 text-gray-600 hover:text-white duration-300 ease-in-out">
            Your feet will never feel the same again.
          </p>
          <button className="bg-orange-400 w-[200px] text-[#000300] mt-4 p-2 md:p-3 text-xl md:text-2xl font-bold rounded-md inline-flex items-center justify-center group">
            <p className="transition ease-in-out duration-300 group-hover:transform group-hover:translate-x-[-10px]">
              Get Started
            </p>
            <MdOutlineKeyboardDoubleArrowRight className="hidden group-hover:inline-block translate-y-[2px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
