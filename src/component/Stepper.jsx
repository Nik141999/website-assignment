import React from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';

const steps = ['Connect Wallet', 'Choose Network', 'Enter Amount', 'Click Buy'];

const CustomStepper = () => {
  return (
    <Box sx={{ width: '40%', padding: '20px',justifyContent: 'center', margin: 'auto' }}>
      
      <Stepper activeStep={-1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default CustomStepper;

