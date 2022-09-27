import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import TimelineIcon from "@mui/icons-material/Timeline";

const butt1 = {
  variant: "outlined",
  bgcolor: "#C5B4E3",
  color: "black",
  height: "25px",
  width: "5"
};
const butt2 = {
  variant: "outlined",
  bgcolor: "#ffe5b4",
  color: "black",
  height: "25px",
  width: "20px"
};
const butt3 = {
  variant: "outlined",
  bgcolor: "#90EE90",
  color: "black",
  height: "25px",
  width: "15px",
  bname1: "hubble"
};

const img = {
  variant: "outlined",
  display: "inline",
  float: "right",
  color: "orange",
  height: "35px",
  marginLeft: "300px",
  marginTop: "-12%",
  width: "25px"
};

export default function BasicCard(props) {
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 300 }}>
      <CardContent>
        <Stack spacing={2} direction="row">
          <Button sx={butt1}>{props.bname1}</Button>
          <Button sx={butt2}>{props.bname2}</Button>
          <Button sx={butt3}>{props.bname3}</Button>
        </Stack>
        <div>
          <Typography variant="h5" marginTop="2%">
            {props.title}
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            marginLeft="250px"
            marginTop="-9%"
            color="orange"
          >
            {props.price}
          </Typography>
        </div>
        {/* <Button sx={butt4}>$415</Button> */}
        <Typography variant="body2" marginBottom="3%">
          {props.txt1}
        </Typography>
        <div sx={{ marginTop: "9%" }}>
          <Stack direction="row" spacing={2}>
            <AvatarGroup max={3}>
              <Avatar alt="Remy Sharp" src={props.im} />
              <Avatar alt="Travis Howard" src={props.im1} />

              <Avatar alt="Cindy Baker" src={props.im2} />
              <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
            </AvatarGroup>
          </Stack>
          <TimelineIcon sx={img} style={{}} />
        </div>
      </CardContent>
    </Card>
  );
}
