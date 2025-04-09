import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import CardComponent from "./CardComponent";
import ProgressCard from "./ProgessComponent";

const ExpandableParagraph = () => {
  const text = `React's setState function can be updated using either a functional approach or a direct update. The functional approach (setExpanded(prev => !prev)) ensures that the latest state value is used, preventing potential bugs caused by stale state values. On the other hand, a direct update (setExpanded(!expanded)) relies on the current state, which may not reflect the most recent updates due to React's batching mechanism. When multiple state updates occur in quick succession, the functional approach is more reliable. Best practice suggests using functional updates whenever the new state depends on the previous state, ensuring consistency and preventing unexpected behavior.`;

  const words = text.split(" ");
  const [wordCount, setWordCount] = useState(40);
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded((prev) => !prev);
    setWordCount(expanded ? 30 : words.length);
  };

  return (
    <>
      <div className="text">
        <p>{words.slice(0, wordCount).join(" ")}</p>
      </div>
      <button onClick={handleClick} style={{ border: "none", outline: "none" }}>
        {expanded ? "...see less" : "...see more"}
      </button>

      <CustomButton
        label="Hello"
        style={{
          border: "none",
          outline: "none",
          backgroundColor: "red",
          color: "blue",
          padding: "10px 20px",
          borderRadius: "15px",
          height: "30px",
          width: "200px",
        }}
      />

      <CardComponent
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "white",
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

      <CardComponent
        style={{
          padding: "20px",
          margin: "20px",
          backgroundColor: "white",
          borderRadius: "20px",
          width: "30%",
          display: "flex",
        }}
        text={[
          "Presale",
          "DEX",
          "CEX reserved",
          "staking",
          "Team",
          "Reward for Ordering",
          "Reward for Customers",
          "Airdrop"
        ]}
      />

      <ProgressCard />
    </>
  );
};

export default ExpandableParagraph;
