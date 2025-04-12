import React, { useState } from "react";
import logo from "../images/datar1.png";
import CustomButton from "./CustomButton";
import { Wallet } from "lucide-react";
import metamaskk from "../images/metamask.png";
import walletconnectt from "../images/walletconnect.png";
import { Link } from "react-router-dom";
import bii from "../images/bii.png";

const HeaderComponent = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showContractsModal, setShowContractsModal] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <>
      <header className="bg-white shadow py-3 px-6 w-full">
        <div className="flex items-center justify-between">
          <div>
            <Link to="">
              <img src={logo} className="h-5 w-5 rounded-full" alt="Logo" />
            </Link>
          </div>

          <ul className="flex gap-2 text-sm font-semibold relative">
            <li className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition">
              <Link to="">Home</Link>
            </li>
            <li className="hover:bg-gray-200 px-3 py-1 rounded-2xl cursor-pointer transition">
              <Link to="/pre-sale">Pre-sale</Link>
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
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li className="hover:bg-gray-100 px-4 py-2">
                    <Link to="/about-us">ELO Whitepaper</Link>
                  </li>
                  <li
                    className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
                    onClick={() => {
                      setShowContractsModal(true);
                      setShowDropdown(false);
                    }}
                  >
                    Contracts
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
              backgroundImage: "linear-gradient(to right, #4e954a 0%, #4e954a 100%)",
              color: "white",
              borderRadius: "20px",
              height: "30px",
              width: "180px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
            onClick={() => setShowWalletModal(true)}
          />
        </div>
      </header>

      {/* Contracts Modal */}
      {showContractsModal && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative border border-gray-200">
              <h2 className="text-lg font-semibold mb-4">Contracts</h2>
              <div className="mb-4">
                <p className="font-medium">ELO Token contract</p>
                <p className="text-green-600 break-all">
                  0xeAfD5b2DCd03f54b12128405D30aC15F89906399
                </p>
              </div>
              <div>
                <p className="font-medium">ELO Token Presale contract</p>
                <p className="text-green-600 break-all">
                  0xBb569C738f56348B21a84D520f679fe41Fd01cc5
                </p>
              </div>
              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setShowContractsModal(false)}
              >
                ×
              </button>
            </div>
          </div>
        </>
      )}

      {showWalletModal && (
        <>
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md shadow-lg relative border border-gray-200">
              <h2 className="text-lg font-semibold mb-4 text-center">
                Connect Wallet
              </h2>

              <div className="mb-6">
                <p className="text-sm font-medium mb-4">1. Choose Network</p>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-100 cursor-pointer w-24">
                    <img src={bii} alt="Binance" className="h-10 w-10" />
                    <span className="text-sm font-medium text-center">Binance</span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm font-medium mb-4">2. Choose Wallet</p>
                <div className="flex justify-center gap-6">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-100 cursor-pointer w-24">
                    <img src={metamaskk} alt="MetaMask" className="h-10 w-10" />
                    <span className="text-sm font-medium text-center">MetaMask</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-100 cursor-pointer w-24">
                    <img src={walletconnectt} alt="WalletConnect" className="h-10 w-10" />
                    <span className="text-sm font-medium text-center">WalletConnect</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="text-black bg-gray-100 px-6 py-2 rounded-xl text-sm font-medium w-full transition"
                  onClick={() => {
                    setShowWalletModal(false);
                  }}
                >
                  Connect
                </button>
              </div>

              <button
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
                onClick={() => setShowWalletModal(false)}
              >
                ×
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HeaderComponent;
