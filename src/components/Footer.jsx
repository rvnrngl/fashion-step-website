import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-3 gap-8 items-center text-gray-300">
      <div className="flex flex-col">
        <h1 className="w-full text-2xl text-center md:text-left font-bold">
          FASHION<span className="text-orange-400">STEP</span>
        </h1>
        <p className="py-4 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          impedit esse fugiat quas delectus voluptatem voluptatibus minima porro
          dolore rem iusto placeat, repudiandae, debitis nostrum alias accusamus
          quam odit corrupti.
        </p>
        <div className="text-4xl flex gap-5 sm:gap:8 md:gap-3 lg:gap-5 self-center md:self-start">
          <FaFacebookSquare className="duration-300 ease-in-out hover:text-orange-400" />
          <FaTwitterSquare className="duration-300 ease-in-out hover:text-orange-400" />
          <FaInstagramSquare className="duration-300 ease-in-out hover:text-orange-400" />
          <FaGithubSquare className="duration-300 ease-in-out hover:text-orange-400" />
          <FaYoutubeSquare className="duration-300 ease-in-out hover:text-orange-400" />
        </div>
      </div>
      <div className="md:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Analytics
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Commerce
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Insights
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Marketing
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              API Status
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Documentation
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Guides
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Pricing
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              About
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Blog
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Jobs
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Press
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Claim
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Policy
            </li>
            <li className="py-2 text-sm cursor-pointer duration-300 ease-in-out hover:text-gray-400">
              Terms
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
