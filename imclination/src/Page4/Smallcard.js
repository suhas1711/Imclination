import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import CardActions from "@mui/material/CardActions";

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

  width: "auto"
};
const butt3 = {
  variant: "outlined",
  bgcolor: "#90EE90",
  color: "black",
  height: "25px",
  width: "15px",
  bname1: "hubble"
};
// const butt4={
//   color:"red",
//   bgcolor:"white"
// };



export default function BasicCard(props) {
  return (
    <Card sx={{}}>
      <React.Fragment>
        <CardContent>
          <Stack spacing={1} direction="row">
            <Button sx={butt1}>{props.bname1}</Button>
            <Button sx={butt2}>{props.bname2}</Button>
            <Button sx={butt3}>{props.bname3}</Button>
          </Stack>
          <div>
            <Typography variant="h5" marginTop="2%">
              {props.title}
            </Typography>
            <Typography
              variant="h7"
              gutterBottom
              marginLeft="220px"
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
        </CardContent>
        <CardActions>
          <Button size="small"> Detailss </Button>
        </CardActions>
      </React.Fragment>
    </Card>
  );
}
