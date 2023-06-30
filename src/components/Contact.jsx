import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contact" className="text-[#000300] bg-white w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Want tips & tricks to dress up your feet?
          </h1>
          <p className="text-lg sm:text-xl md:text-3xl font-medium">
            Inquire now and stay up to date.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col justify-center items-center md:items-end">
            <input
              className="p-3 w-full rounded-md border border-[#000300] text-[#000300]"
              type="email"
              placeholder="Enter your email."
            />
            <button className="bg-[#000300] w-[200px] text-white mt-4 p-[8px] md:p-[10px] text-xl md:text-2xl font-medium rounded-md inline-flex items-center justify-center group">
              <p className="transition ease-in-out duration-300 group-hover:transform group-hover:translate-x-[-10px]">
                Notify Me
              </p>
              <MdOutlineKeyboardDoubleArrowRight className="hidden group-hover:inline-block translate-y-[2px]" />
            </button>
          </div>
          <p className="py-3 text-center md:text-right">
            We care about the protection of your data.{" "}
            <span className="block">
              Read our{" "}
              <a className="text-orange-400" href="#">
                Privacy Policy
              </a>
              .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
