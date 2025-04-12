import React from "react";
import binance from "../images/smartchain.png";
import certik from "../images/certik.jpeg";
import coinmarketcap from "../images/coinmarketcap.png";
import { ArrowRight } from "lucide-react";
import fairy from "../images/fp_g_logo.png";
import ProfileCard from "../component/ProfileCard";
import CustomButton from "../component/CustomButton";
import Nikhil from "../images/nikhil.jpeg";
import sandeep from "../images/sandeep.jpeg";
import anuj from "../images/anuj.jpeg";

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center  min-h-screen ">
        <div className="text-center  w-full  ">
          <h1 className="text-3xl font-bold pt-20 mb-4">About Us</h1>
          <h2 className="text-2xl mb-6">
            Cool reward system with $ELO inside our food <br />
            ordering business
          </h2>

          <h3 className="text-base pt-2">
            We are building a new reward system with our $ELO. Please take part
            in our reward system and invest <br />
            and touch with your hand now.
          </h3>

          <div className="flex justify-center gap-6 mb-6 flex-wrap pt-10">
            <img
              src={binance}
              alt="binance"
              className="w-32 h-16 object-contain"
            />
            <img
              src={certik}
              alt="certik"
              className="w-32 h-16 object-contain"
            />
            <img src={fairy} alt="fairy" className="w-32 h-16 object-contain" />
            <img
              src={coinmarketcap}
              alt="coinmarketcap"
              className="w-32 h-16 object-contain"
            />
          </div>
          <div className=" pl-35">
            <h1 className="flex font-extrabold text-2xl">
              Have you met the ELO Founders Team?
            </h1>
            <h1 className="flex font-bold text-2xl">Meet the team</h1>
            <div className="p-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <ProfileCard
                  imgSrc={Nikhil}
                  name="Kevin Smith"
                  title="CEO"
                  description="He is a CEO,co-founder of ELO,Effortless Order projects"
                />
                <ProfileCard
                  imgSrc={sandeep}
                  name="Derek Smith"
                  title="Manager Development & Testing"
                  description="More than 6 years experiences in development & testing"
                />
                <ProfileCard
                  imgSrc={anuj}
                  name="Ajay Jain"
                  title="Web development Manager"
                  description="He is a web development manager"
                />
                <ProfileCard
                  imgSrc={sandeep}
                  name="Vladimir Urosevic"
                  title="Restaurant Support Manager"
                  description="He is a Restaurant Support Manager"
                />
                <ProfileCard
                  imgSrc={anuj}
                  name="Bhumish Shaw"
                  title="Server Administration Manager"
                  description="He is a server administration manager"
                />
                <ProfileCard
                  imgSrc={Nikhil}
                  name="Gow Patel"
                  title="Mobile development Manager"
                  description="He is a Mobile Development Manager"
                />
              </div>
            </div>
          </div>
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
      </div>
    </>
  );
};

export default AboutUs;
