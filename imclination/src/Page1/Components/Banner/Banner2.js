import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import banner from "../Banner/banner.png";


const text = {
  color: "white",
  textAlign: "left",
  marginTop: "15px"
};
const sani = {
  maxWidth: 999,
  maxHeight: 990,
  backgroundColor: "#4339f2"
};
const butt = {
  variant: "outlined",
  bgcolor: "white",
  color: "black",
  height: "25px",
  marginTop: "-25px",
  marginRight: "20px"
};
const Banner2 = () => {
  return (
    <div>
      <Card sx={sani}>
        <div style={{ float: "left" }}>
          <img
            style={{ width: 100, height: 130 }}
            src={banner}
            alt="cardbanner"
          />
        </div>
        <div style={{ float: "center" }}>
          <center>
            <Typography variant="h5" gutterBottom sx={text}>
              <b>Creative outdoor adds</b>
            </Typography>
          </center>
          <center>
            <Typography variant="body1" gutterBottom sx={text}>
              Every large design company whether its multinational. Branding
              corporation or a regular down at heel tatty. Magzine publisher
              needs to fill holes in workforce.
            </Typography>
          </center>
        </div>
        <div style={{ float: "right" }}>
          <Button sx={butt}>see more</Button>
        </div>
      </Card>
    </div>
  );
};
export default Banner2;
