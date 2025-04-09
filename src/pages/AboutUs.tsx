import React from "react";
import binance from "../images/smartchain.png";
import certik from "../images/certik.jpeg";
import coinmarketcap from "../images/coinmarketcap.png";
import fairy from "../images/fp_g_logo.png";
import ProfileCard from "../component/ProfileCard";

const AboutUs = () => {
  return (
    <>
      <div className="flex justify-center  min-h-screen ">
        <div className="text-center px-4 w-full  ">
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

          {/* Logos before h3 */}
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
                  imgSrc={fairy}
                  name="Kevin Smith"
                  title="CEO"
                  description="He is a CEO,co-founder of ELO,Effortless Order projects"
                />
                <ProfileCard
                  imgSrc={fairy}
                  name="Derek Smith"
                  title="Manager Development & Testing"
                  description="More than 6 years experiences in development & testing"
                />
                <ProfileCard
                  imgSrc={fairy}
                  name="Ajay Jain"
                  title="Web development Manager"
                  description="He is a web development manager"
                />
                <ProfileCard
                  imgSrc={fairy}
                  name="Vladimir Urosevic"
                  title="Restaurant Support Manager"
                  description="He is a Restaurant Support Manager"
                />
                <ProfileCard
                  imgSrc={fairy}
                  name="Bhumish Shaw"
                  title="Server Administration Manager"
                  description="He is a server administration manager"
                />
                <ProfileCard
                  imgSrc={fairy}
                  name="Gow Patel"
                  title="Mobile development Manager"
                  description="He is a Mobile Development Manager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
