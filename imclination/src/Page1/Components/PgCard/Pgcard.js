import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const butt = {
  variant: "outlined",

  position: "flex",

  bgcolor: "white",

  color: "black",

  height: "25px",

  marginTop: "-10px",

  marginRight: "20px"
};
const details = { borderRadius: 90, height: "10px" };

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 20 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}`}</Typography>
      </Box>
    </Box>
  );
}
LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired
};

export default function OutlinedCard(props) {
  return (
    <>
      <Card sx={{ maxWidth: 300 }}></Card>
      <React.Fragment>
        <CardContent>
          <header>
            <Typography sx={{ fontSize: 14 }} color="text.primary">
              {props.title}
            </Typography>
            <div style={{ float: "right" }}>
              <Button sx={butt}>...</Button>
            </div>
            <Stack direction="row" spacing={2}>
              <Avatar alt="Remy Sharp" src={props.face} />
              <Typography>
                {props.nameuser}
                <Typography
                  sx={{ mb: 1.5, fontSize: 11, textAlign: "left" }}
                  color="text.secondary"
                >
                  {props.city}
                </Typography>
              </Typography>
            </Stack>
          </header>
          <Typography variant="body2">Instagram</Typography>
          <div class="w3-light-grey w3-small">
            <LinearProgressWithLabel
              sx={details}
              value={props.pere1}
              color={props.cr}
            />
          </div>
          <Typography variant="body2">Facebook</Typography>
          <LinearProgressWithLabel
            sx={details}
            value={props.pere2}
            color={props.cr}
          />

          <Typography variant="body2">Twitter</Typography>
          <LinearProgressWithLabel
            sx={details}
            value={props.pere3}
            color={props.cr}
          />
        </CardContent>
      </React.Fragment>
    </>
  );
}

//   return (
//       <Card variant="outlined" sx={{ maxWidth: 300 }}>{card}</Card>
//   );
// }
