import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { useState } from "react";

const NavBar = () => {
  const [navClose, setNavClose] = useState(true);

  const handleNav = () => {
    setNavClose(!navClose);
  };

  return (
    <>
      <nav className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-2xl font-bold">
          FASHION<span className="text-orange-400">STEP</span>
        </h1>
        {/* Navbar for tablets and laptops */}
        <ul className="hidden md:flex">
          <li>
            <a href="#home" className="p-4">
              Home
            </a>
          </li>
          <li>
            <a href="#products" className="p-4">
              Products
            </a>
          </li>
          <li>
            <a href="#gallery" className="p-4">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" className="p-4">
              Contact
            </a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {!navClose ? <CgClose size={30} /> : <CgMenuRightAlt size={30} />}
        </div>
        {/* Navbar for mobile devices */}
        <div
          className={
            !navClose
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#000300] ease-in-out duration-500 z-10"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full pt-8 px-4 flex items-center text-2xl font-bold">
            FASHION<span className="text-orange-400">STEP</span>
          </h1>
          <ul className="pt-4 uppercase">
            <li className="p-4 border-b border-b-gray-600">
              <a href="#home" onClick={handleNav}>
                Home
              </a>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <a href="#products" onClick={handleNav}>
                Products
              </a>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <a href="#gallery" onClick={handleNav}>
                Gallery
              </a>
            </li>
            <li className="p-4 border-b border-b-gray-600">
              <a href="#contact" onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div
          onClick={handleNav}
          className={
            !navClose ? "fixed h-full w-[40%] right-0 bg-transparent" : "hidden"
          }
        ></div> */}
      </nav>
    </>
  );
};

export default NavBar;
