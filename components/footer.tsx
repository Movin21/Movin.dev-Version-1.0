import { FaLocationArrow } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024{" "}
          <span className="text-cyan-500">Movindu Liyanage</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
