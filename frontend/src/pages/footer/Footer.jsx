import React from "react";
import { DiGithub } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      className="bg-slate-950 text-white text-center p-4 text-xl flex items-center justify-between w-full
     "
    >
      <div className="flex items-center justify-between w-full max-w-[90%] mx-auto">
        <div>copyright &copy; 2025 task manager</div>
        <div className="flex gap-x-5">
          <FaGithub color="white" />
          <FaLinkedin color="white" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
