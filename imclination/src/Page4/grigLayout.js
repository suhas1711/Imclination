import { Card, Grid } from "@mui/material";
import React from "react";
import Card1 from "./Cardimage/Cardimage.js";
import MediaCard from "./Cardwithimage";
import BasicCard from "./Smallcard";
export default function GridLayout4() {
  return (
    <div>
      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        {/* blue */}
        <Grid lg={3} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%", background: "#324ab2" }}>
            <BasicCard
              bname1="1"
              bname2="2"
              bname3="3"
              txt1="Machine learning is a branch of artificial intelligence (AI) and computer science "
              price="$98"
              title="Pune"
            />
          </Card>
          {/* red */}
          <Grid lg={12} md={12} sm={12} xs={12}>
            <Card style={{ margin: "5%" }}>
              <MediaCard
                title="Melbourne"
                para=" When you enter into an new area of science you almost always find."
                bname1="Taipei"
                bname2="Glasglow"
                bname3="Belgrade"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtEZqRyO46wlQ6wmsP64NDoomyGF-1tpSRJGjkZexP&s"
              />
            </Card>
            {/* brown */}
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Card style={{ margin: "5%" }}>
                <BasicCard
                  title="Ingram"
                  bname1="1"
                  bname2="2"
                  bname3="3"
                  txt1="Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. "
                  price="$98"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* brown */}
        <Grid lg={3} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <BasicCard
              title="London"
              bname1="1"
              bname2="2"
              bname3="3"
              txt1="Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy."
              price="$98"
            />
          </Card>
          {/* green */}
          <Grid lg={12} md={12} sm={12} xs={12}>
            <Card style={{ margin: "5%", height: "375px" }}>
              <Card1
                title="Casablanca"
                par="API stands for Application Programming Interface."
                b1="1st"
                b2="2nd"
                b3="3rd"
                img="url(https://media.istockphoto.com/photos/colored-powder-explosion-on-black-background-picture-id1140180560?k=20&m=1140180560&s=612x612&w=0&h=X_400OQDFQGqccORnKt2PHYvTZ3dBLeEnCH_hRiUQrY=)"
              />
            </Card>

            <Grid lg={12} md={12} sm={12} xs={12}>
              <Card style={{ margin: "5%", background: "#324ab2" }}>
                <BasicCard
                  title="NewYork"
                  bname1="1"
                  bname2="2"
                  bname3="3"
                  txt1="Machine learning is a branch of artificial intelligence (AI) and computer science "
                  price="$98"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={3} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <MediaCard
              title="Kathmandu"
              para="When you enter into any new era"
              bname1="Dogs"
              bname2="Behance"
              bname3="Belgrade"
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR07qfg9G2wND7KFr4AJC5gwudMeYbI5eybXQ&usqp=CAU"
            />
          </Card>
          <Grid lg={12} md={12} sm={12} xs={12}>
            <Card style={{ margin: "5%", background: "#324ab2" }}>
              <BasicCard
                title="New Jersey"
                bname1="1"
                bname2="2"
                bname3="3"
                txt1="Machine learning is a branch of artificial intelligence (AI) and computer science "
                price="$98"
              />
            </Card>
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Card
                style={{ margin: "5%", height: "375px", background: "#00FF00" }}
              >
                <Card1
                  title="Indianapolis"
                  par="API stands for Application Programming Interface. "
                  b1="1st"
                  b2="2nd"
                  b3="3rd"
                  img="url(https://ik.imagekit.io/ikmedia/backlit.jpg)"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid lg={3} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%", background: "#324ab2" }}>
            <BasicCard
              title="Mumbai"
              bname1="1"
              bname2="2"
              bname3="3"
              txt1="Machine learning is a branch of artificial intelligence (AI) and computer science "
              price="$98"
            />
          </Card>

          <Grid lg={12} md={12} sm={12} xs={12}>
            <Card
              style={{ margin: "5%", height: "375px", background: "#00FF00" }}
            >
              <Card1
                title="Louisville"
                par="API stands for Application Programming Interface. "
                b1="1st"
                b2="2nd"
                b3="3rd"
                img="url(https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg)"
              />
            </Card>
            <Grid lg={12} md={12} sm={12} xs={12}>
              <Card style={{ margin: "5%" }}>
                <BasicCard
                  title="Dharavi"
                  bname1="1"
                  bname2="2"
                  bname3="3"
                  txt1="Machine learning is a branch of artificial intelligence (AI) and computer science "
                  price="$98"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
