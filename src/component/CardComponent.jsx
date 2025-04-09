
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
                width: "100%",
                fontSize: "7px",
                padding: "8px",
                margin: "5px",
                paddingBottom: "10px",
                
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
