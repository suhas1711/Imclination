import * as React from "react";
import { Card, Grid } from "@mui/material";
import BasicCard from "../Cards/cards.js";
import GraphChart from "../Graph/graph.js";
export default function MainGrid() {
  return (
    <Grid lg={12} md={12} sm={12} xs={12} container>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Moon Fever"
            txt1=" So what are these strange lights in the sky? Are they aliens invading
      from Mars?Are they coming to start the next ice age?"
            bname1="Lost"
            price="$415"
            bname2="design"
            bname3="Hubble"
            im="https://www.bing.com/th?id=OIP.0YVH8RjAETY4BaudcyW08AHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            im1="https://th.bing.com/th/id/OIP.YR1FHXGnCBSW9Kw53D_IfAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"
            im2="/static/images/avatar/3.jpg"
          />
        </Card>
      </Grid>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Space the final frontier"
            txt1="Usually the astronomy magzine or site will give you a general time and location to be ready to look when the meteroids start to falll"
            bname1="project"
            price="$87"
            bname2="Digital"
            bname3="Hubble"
            im="https://www.bing.com/th?id=OIP.0YVH8RjAETY4BaudcyW08AHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            im1="https://th.bing.com/th/id/OIP.YR1FHXGnCBSW9Kw53D_IfAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"
            im2="/static/images/avatar/3.jpg"
          />
        </Card>
      </Grid>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Moon Gazing"
            txt1="Comets are big source of meteroids because of the nature of those long tails. A large amount of dust,ice and other space debris."
            bname1="Lost"
            price="$200"
            bname2="design"
            bname3="Hubble"
            im="https://www.bing.com/th?id=OIP.0YVH8RjAETY4BaudcyW08AHaH9&w=241&h=259&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
            im1="https://th.bing.com/th/id/OIP.YR1FHXGnCBSW9Kw53D_IfAHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7"
            im2="/static/images/avatar/3.jpg"
          />
        </Card>
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}></Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <br />
        Portfolio
        <Card>
          <GraphChart />
        </Card>
      </Grid>
    </Grid>
  );
}
