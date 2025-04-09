import React from "react";
import certik from "../images/certik.jpeg";
import fairy from "../images/fairy.jpeg";
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center h-80">
        <h2 className="text-lg font-semibold mb-1">Audited by</h2>
        <div className="flex gap-4 items-center mb-4">
          <div className="flex items-center">
            <img src={certik} alt="Certik" className="h-20" />
          </div>
          <div className="flex items-center gap-2">
            <img src={fairy} alt="Fairyproof" className="h-10" />
            <h2 className="text-sm font-medium">fairyproof</h2>
          </div>
        </div>

        <div className="flex gap-14 text-xl">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-blue-500 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-700 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
        </div>
        <p className="text-sm text-center pt-8">
               copyright © 2025 ELO. All rights reserved.
            </p>
    
      </div>
    </footer>
  );
};

export default Footer;
