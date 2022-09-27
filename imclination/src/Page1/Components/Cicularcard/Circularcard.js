import React from "react";
import { Card } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";





// CircularProgress Bar function
function Example(props) {
  return (
    <div style={{ marginBottom: 80 }}>
      <div style={{ marginTop: 25, display: "flex" }}>
        <div style={{ width: "80%", paddingLeft: 30 }}>{props.children}</div>
        <div style={{ width: "10%" }}></div>
      </div>
    </div>
  );
}
// Card CSS
const shivam = {
  variant: "outlined",
  marginTop: "80px",
  marginright: "50px",
  height: "200px",
  width: "150px"
};

//Creating Cards
export default function OmCard(props) {
  return (
    <Card sx={shivam}>
      <center>
        <span>{props.title}</span>
      </center>
      <div className="cstyle">
        <Example>
          <CircularProgressbar
            value={props.per}
            text={props.perText}
            background
            styles={buildStyles({
              backgroundColor: `${props.bg}`,
              textColor: "black",
              pathColor: `${props.pc}`,
              trailColor: "transparent"
            })}
          />
        </Example>
      </div>
    </Card>
  );
}
