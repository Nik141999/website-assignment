import React from "react";
import { Card, CardContent, Typography, LinearProgress, Box } from "@mui/material";

const data = [
  { label: "Presale", value: 10 },
  { label: "DEX", value: 10 },
  { label: "CEX reserved", value: 10 },
  { label: "Staking", value: 25 },
  { label: "Team", value: 10 },
  { label: "Reward for Ordering", value: 25 },
  { label: "Reward for Customers", value: 5 },
  { label: "Airdrop", value: 5 },
];

const ProgressCard = () => {
  return (
    <Card sx={{ maxWidth: 600, p: 2, borderRadius: 3, boxShadow: 3 }}>
      <CardContent>
        {data.map((item, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Typography sx={{ flex: 1, fontWeight: 500 }}>{item.label}</Typography>
            <Typography sx={{ fontWeight: 600, minWidth: 40 }}>{item.value}%</Typography>
            <Box sx={{ flex: 2, ml: 2 }}>
              <LinearProgress
                variant="determinate"
                value={item.value}
                sx={{
                  height: 8,
                  borderRadius: 5,
                  backgroundColor: "#eee",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "blue",
                  },
                }}
              />
            </Box>
          </Box>
        ))}
      </CardContent>
    </Card>
  );
};

export default ProgressCard;
