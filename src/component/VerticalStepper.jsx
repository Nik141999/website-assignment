import React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
} from "@mui/material";

const VerticalStepper = ({ steps }) => {
 

  return (
    <div style={{ maxWidth: 400 }}>
      <Stepper orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel>{step.label}</StepLabel>
            <StepContent>
              {step.description && (
                <Typography component="div">{step.description}</Typography>
              )}
             
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default VerticalStepper;
