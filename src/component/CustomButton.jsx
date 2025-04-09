import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({
  label,
  onClick,
  style ={}
  
}) => {
  return (
    <Button
     onClick={onClick} 
     style={style}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
