import {
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import ShortlyLogo from "./shortly-logo";

const Footer = () => {
  return (
    <div className="w-full bg-veryDarkViolet">
      <footer className="w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6 cursor-pointerxl mx-auto text-gray flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0 lg:items-start py-12">
        <figure className="lg:mr-auto">
          <ShortlyLogo />
        </figure>
        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-16 lg:space-y-0 lg:space-x-12">
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <h4 className="text-base text-white mb-2">Features</h4>
            <span className="text-base hover:text-cyan cursor-pointer">
              Link Shortening
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Branded Links
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Analysis
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <h4 className="text-base text-white mb-2">Resources</h4>
            <span className="text-base hover:text-cyan cursor-pointer">
              Blog
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Developers
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Support
            </span>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-2">
            <h4 className="text-base text-white mb-2">Company</h4>
            <span className="text-base hover:text-cyan cursor-pointer">
              About
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Our Team
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Courses
            </span>
            <span className="text-base hover:text-cyan cursor-pointer">
              Contact
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <FaFacebookSquare className="text-white text-xl" />
            <FaTwitter className="text-white text-xl" />
            <FaPinterest className="text-white text-xl" />
            <FaInstagram className="text-white text-xl" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
