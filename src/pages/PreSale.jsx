import React from "react";
import CustomStepper from "../component/Stepper";
import CardComponent from "../component/CardComponent";

const PreSale = () => {
  return (
    <>
      <div>
        <div className="pl-40 pt-14">
          <h1 className="text-2xl text-green-500 font-bold">Pre-sale</h1>
          <h2 className="mt-2 text-base">
            During the pre-sale, you will have the option to buy $ELO. All $ELO
            purchased can be claimed after the end of the visiting period.
          </h2>
        </div>
        <div>
          <span className="flex justify-center mt-20 ">
            <h2>
              Grab Your ELO token now and enjoy vast benifits that come along
              with{" "}
            </h2>
          </span>
          <h2 className="flex justify-center">being a part of us.</h2>
        </div>
        <CustomStepper />

        <div className="flex justify-center ">
        <CardComponent
          style={{
            paddingLeft: "20px",
            borderRadius: "20px",
            width: "30%",
            display: "flex",            
            
          }}
          text={[
            "Token Information",
            "Pre-sale Information",
            "Pre-sale Status",
            "Buyer Information",
          ]}
          showDivider={true}
        />
        </div>
      </div>
    </>
  );
};

export default PreSale;
