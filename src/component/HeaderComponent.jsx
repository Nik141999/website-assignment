import React, { useState } from "react";
import logo from "../images/datar1.png";
import CustomButton from "./CustomButton";
import { Wallet } from "lucide-react";


const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };
  return (
    <header className="bg-white shadow py-3 px-6 w-full">
      <div className="flex items-center justify-between ">
        <div>
          <img src={logo} className="h-5 w-5 rounded-full" alt="Logo" />
        </div>

        <ul className="flex gap-2 text-sm font-semibold relative">
          <li className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition">
            <a href="#">Home</a>
          </li>
          <li className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition">
            <a href="#">Pre-Sale</a>
          </li>
          <li className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition">
            <a href="#">Stake</a>
          </li>

          <li
            className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition relative"
            onClick={toggleDropdown}
          >
            <span className="flex items-center gap-1">
              More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>

            {showDropdown && (
              <ul className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-xl w-40 py-2 z-50">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="#about">About Us</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="#whitepaper">ELO Whitepaper</a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="#contracts">Contracts</a>
                </li>
              </ul>
            )}
          </li>
        </ul>

        <CustomButton
          label={
            <span className="flex items-center gap-2 ">
              <Wallet size={16} /> Wallet Connect
            </span>
          }
          style={{
            border: "none",
            outline: "none",
            backgroundColor: "green",
            color: "white",
            borderRadius: "20px",
            height: "30px",
            width: "180px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        />
      </div>
    </header>
  );
};

export default HeaderComponent;
