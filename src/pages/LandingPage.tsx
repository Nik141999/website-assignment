import React from "react";
import CustomButton from "../component/CustomButton";
import { ArrowRight, ArrowDown } from "lucide-react";
import binance from "../images/smartchain.png";
import certik from "../images/certik.jpeg";
import coinmarketcap from "../images/coinmarketcap.png";
import fairy from "../images/fp_g_logo.png";

const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        {/* Top Section with Text + Video */}
        <div className="flex justify-evenly w-full px-10 py-10">
          {/* Left Side - Text and Buttons */}
          <div className="w-1/2 flex justify-end">
            <div className="text-center pr-5">
              <h1 className="font-bold text-6xl text-green-400 text-justify">
                Effortless order <br /> food
              </h1>
              <h3 className="text-justify mt-4">
                ELO is decentralized reward system, the overall system <br />
                include reward will be extended and we will launch extra <br />
                services to make our token more valuable. people who own <br />
                $ELO can get more and more reward. Our community will <br />
                grow so fast and surely go to the moon with strong <br />
                supporters and investors.
              </h3>
              <span className="flex mt-4">
                <h2>Let's get more and more $ELO token</h2>
              </span>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <CustomButton
                  label={
                    <span className="flex items-center">
                      <span className="ml-2">Get Started</span>
                      <ArrowRight size={20} />
                    </span>
                  }
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: "green",
                    color: "white",
                    fontSize: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    borderRadius: "15px",
                    height: "40px",
                    width: "130px",
                  }}
                />

                <CustomButton
                  label={
                    <span className="flex items-center">
                      <span className="ml-2">ELO Whitepaper</span>
                      <ArrowDown size={20} />
                    </span>
                  }
                  style={{
                    border: "none",
                    outline: "none",
                    color: "green",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 20px",
                    borderRadius: "15px",
                    height: "40px",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="w-1/2 flex items-center justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cKmOOxZdat4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Logos - Just Below the Above Section */}
        <div className="flex justify-center gap-6 ">
          <img src={binance} alt="binance" className="w-32 h-16 object-contain" />
          <img src={certik} alt="certik" className="w-32 h-16 object-contain" />
          <img src={fairy} alt="fairy" className="w-32 h-16 object-contain" />
          <img src={coinmarketcap} alt="coinmarketcap" className="w-32 h-16 object-contain" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
