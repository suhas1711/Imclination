import React from "react";
import Card from "@mui/material/Card";
import {  Button } from "@mui/material";
import Stack from "@mui/material/Stack";


const butt = {
  position: "relative",
  variant: "outlined",
  bgcolor: "#C5B4E3",
  color: "black",
  height: "25px",
  width: "auto"
};
const butt1 = {
  position: "relative",
  variant: "outlined",
  bgcolor: "#ffe5b4",
  color: "black",
  height: "25px",
  width: "auto"
};
const butt2 = {
  position: "relative",
  variant: "outlined",
  bgcolor: "#90EE90",
  color: "black",
  height: "25px",
  width: "auto"
};

function Card1(props) {
  return (
    <div>
      <Card
        style={{
          width: "auto",
          height: "375px",
          background: `${props.img}`
        }}
      >
        <Stack spacing={2} direction="row">
          <Button sx={butt}>{props.b1}</Button>
          <Button sx={butt1}>{props.b2}</Button>
          <Button sx={butt2}>{props.b3}</Button>
        </Stack>
        <h2 style={{ color: "white", marginTop: "60%", marginRight: "200px" }}>
          {props.title}
        </h2>
        <p style={{ color: "lightgrey", marginLeft: "10px", marginTop: "0%" }}>
          {props.par}
        </p>
      </Card>
    </div>
  );
}
export default Card1;
