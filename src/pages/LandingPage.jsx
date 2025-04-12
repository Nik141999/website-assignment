import React from "react";
import certik from "../images/certik.jpeg";
import fairy from "../images/fp_g_logo.png";
import binance from "../images/smartchain.png";
import { useNavigate } from "react-router-dom";
import CustomButton from "../component/CustomButton";
import { ArrowRight, ArrowDown } from "lucide-react";
import coinmarketcap from "../images/coinmarketcap.png";
import ProgressCard from "../component/ProgessComponent";
import VerticalStepper from "../component/VerticalStepper";
import RoadmapSection from "../component/Roadmap";

const LandingPage = () => {
  const navigate = useNavigate();

  const stepData = [
    {
      label: "Choose your network",
      description: (
        <>
          <p>
            $ELO is available on Binance Smart Chain. Choose a network to
            participate in $ELO pre-sale:
          </p>
        </>
      ),
    },
    {
      label: "Create a MetaMask wallet",
      description: "Download MetaMask and set up your wallet to store $ELO.",
    },
    {
      label: "Send BEP20 $BNB to MetaMask",
      description:
        "Transfer $BNB from your exchange account to MetaMask wallet.",
    },
    {
      label: "Click on pre-sale",
      description: "Navigate to the pre-sale page to participate in the event.",
    },
    {
      label: "Swap BEP20 $BNB to $ELO",
      description: "Use our pre-sale swap tool to exchange your BNB to $ELO.",
    },
    {
      label: "Claim $ELO",
      description: "After the pre-sale ends, claim your allocated $ELO tokens.",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex justify-evenly w-full px-10 py-10">
          <div className="w-1/2 flex justify-end">
            <div className="text-center pr-5">
              <h1 className="font-bold text-6xl bg-gradient-to-r from-[#4e954a] to-[#4e954a] bg-clip-text text-transparent text-justify">
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
                      <span className="ml-2">Get ELO</span>
                      <ArrowRight size={20} />
                    </span>
                  }
                  onClick={() => navigate("/pre-sale")}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundImage: "linear-gradient(to right, #4e954a 0%, #4e954a 100%)",
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
                  onClick={() => navigate("")}
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

          <div className="w-1/2 flex items-center justify-center pr-30">
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

        <div className="flex justify-center gap-6 ">
          <img
            src={binance}
            alt="binance"
            className="w-32 h-16 object-contain"
          />
          <img src={certik} alt="certik" className="w-32 h-16 object-contain" />
          <img src={fairy} alt="fairy" className="w-32 h-16 object-contain" />
          <img
            src={coinmarketcap}
            alt="coinmarketcap"
            className="w-32 h-16 object-contain"
          />
        </div>

        <div className="mt-10 font-extrabold w-full text-left h-100 px-40 bg-gray-200 rounded-2xl pt-10">
          <h1 className="text-lg text-green-500">our main features</h1>
          <p className="text-2xl">
            Cool Reward System for <br /> Orders
          </p>
          <div className="flex justify-evenly mt-10">
            <div>
              <h1>what you get</h1>
              <p>
                if you order foods to our restaurant,you will <br />
                get $ELO as rewards.If you are a customer <br />
                or investor,you can get more rewards.This <br />
                means you got cool rewards from us <br />
                instead of orders.
              </p>
            </div>
            <div>
              <h1>Extra services</h1>
              <p>
                We will provide more extra services so that <br />
                our $ELO has got more valuable.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-10 w-full px-40 flex flex-col items-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-green-600">
              Let's Get Started
            </h1>
            <p className="text-lg text-gray-700">How to get $ELO</p>
          </div>

          <VerticalStepper steps={stepData} />
        </div>

        <div className="text-center px-10 bg-gray-200 w-full rounded-2xl h-full pt-10">
          <h1 className="text-3xl font-bold">Tokenomics</h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mt-4">
            During the presale, you will have the option to buy $ELO. Presale
            will take place in two steps with different prices. Presale supports
            only BEP20 $BNB. All $ELO purchased can be claimed at the pre-sale
            page after the end of the vesting period.
          </p>

          <div className="mt-8">
            <h2 className="text-4xl font-extrabold text-green-600">
              1B – 1,000,000,000
            </h2>
            <p className="text-md font-semibold mt-2 text-gray-700">
              Total Supply
            </p>
          </div>

          <div className="flex justify-center mt-10 pl-40">
            <div className="max-w-3xl w-full mb-5">
              <ProgressCard />
            </div>
          </div>
        </div>
        <RoadmapSection />

        <div className="h-80 pt-18 mt-20 text-center bg-gray-200 w-full rounded-2xl">
          <h1 className="text-xl font-bold text-green-500">
            Already convinced?
          </h1>
          <h1 className="text-3xl font-extrabold pt-1">
            What are you waiting for?
          </h1>
          <p className="mt-2">
            Ensure to grab your ELO token now and enjoy vast benefits <br />
            that come along with being a part of us.
          </p>

          {/* Centered Button */}
          <div className="flex justify-center mt-4">
            <CustomButton
              label={
                <span className="flex items-center">
                  <span className="ml-2">Get $ELO Now</span>
                  <ArrowRight size={20} />
                </span>
              }
              style={{
                border: "none",
                outline: "none",
                backgroundColor: "green",
                color: "white",
                fontSize: "12px",
                padding: "10px 20px",
                borderRadius: "20px",
                height: "40px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
