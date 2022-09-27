import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

const butt1 = {
  variant: "outlined",
  bgcolor: "#C5B4E3",
  color: "black",
  height: "25px",
  width: "4x"
};
const butt2 = {
  variant: "outlined",
  bgcolor: "#ffe5b4",
  color: "black",
  height: "25px",
  width: "4x"
};
const butt3 = {
  variant: "outlined",
  bgcolor: "#90EE90",
  color: "black",
  height: "25px",
  width: "4x"
};
export default function MediaCard(props) {
  return (
    <Card sx={{}}>
      <Stack spacing={2} direction="row">
        <Button sx={butt1}>{props.bname1}</Button>
        <Button sx={butt2}>{props.bname2}</Button>
        <Button sx={butt3}>{props.bname3}</Button>
      </Stack>
      <br />
      <CardMedia
        sx={{ borderRadius: "9%" }}
        component="img"
        height="150"
        alt="night galaxy"
        src={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.para}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detailies</Button>
      </CardActions>
    </Card>
  );
}
