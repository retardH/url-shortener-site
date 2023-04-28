import { useState } from "react";
import logo from "../assets/images/logo.svg";
import Container from "../layouts/container";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <Container>
      <nav className="flex items-center justify-between relative w-full py-8">
        <div className="flex items-center space-x-6">
          <img src={logo} alt="" />
          <a
            href="#"
            className="text-grayishBlue hover:text-veryDarkViolet text-sm cursor-pointer hidden md:inline "
          >
            Features
          </a>
          <a
            href="#"
            className="text-grayishBlue hover:text-veryDarkViolet text-sm cursor-pointer hidden md:inline"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-grayishBlue hover:text-veryDarkViolet text-sm cursor-pointer hidden md:inline"
          >
            Resources
          </a>
        </div>
        <div className="hidden md:block btn-group space-x-2">
          <button className="outline-none bg-white py-2 px-4 rounded-full border-none text-base">
            Login
          </button>
          <button className="outline-none bg-cyan py-2 px-4 rounded-full border-none text-white text-base hover:brightness-125">
            Sign Up
          </button>
        </div>
        <div className="block md:hidden">
          <FiMenu
            className="text-3xl text-grayishBlue cursor-pointer"
            onClick={() => setIsMenuClicked((isClicked) => !isClicked)}
          />
        </div>
        {isMenuClicked && (
          <div className="flex fixed top-20 inset-x-6 py-6 px-3 bg-darkViolet flex-col items-center space-y-6 rounded-md">
            <a href="#" className="text-base font-bold text-white">
              Features
            </a>
            <a href="#" className="text-base font-bold text-white">
              Pricing
            </a>
            <a href="#" className="text-base font-bold text-white">
              Resources
            </a>
            <div className="bg-gray w-full h-0.5"></div>
            <button className="outline-none bg-transparent py-2 px-4 rounded-full border-none text-base w-full text-white font-bold">
              Login
            </button>
            <button className="outline-none bg-cyan py-2 px-4 rounded-full border-none text-white font-bold text-base w-full hover:brightness-125">
              Sign Up
            </button>
          </div>
        )}
      </nav>
    </Container>
  );
};

export default Navbar;
