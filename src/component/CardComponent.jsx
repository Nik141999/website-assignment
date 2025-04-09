
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";

const CardComponent = ({ text = [], style = {} }) => {
  return (
    <Card style={style}>
      <CardMedia />
      <CardContent>
        {text.map((item, index) => (
          <Typography key={index} gutterBottom variant="h7" component="div">
            <Divider
              style={{
                backgroundColor: "lightgray",
                borderRadius: "20px",
                width: "300",
                fontSize: "10px",
                padding: "8px",
                alignItems: "center",
                
              }}
            >
              {item}
            </Divider>
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
