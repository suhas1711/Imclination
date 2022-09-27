import { Card, Grid } from "@mui/material";
import React from "react";
import Banner2 from "../Banner/Banner2";
import OutlinedCard from "../PgCard/Pgcard";
import BarGraph from "../Graphbar/Graphbar";
import OmCard from "../Cicularcard/Circularcard";
import { useQuery } from "react-query";
import fetchPosts from "../Api/api";


 export default function GridLayout() {
  const { data, error, isError, isLoading } = useQuery('users', fetchPosts)
  // console.log(data)
    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error! {error.message}</div>
    }
 

  return (
    <div>
      <div>
        <h3 style={{ alignContent: "center", marginLeft: "2%" }}>
          Be Single Minded
        </h3>
      </div>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              face="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2020/02/13152840/700JimCarrey.jpg"
              nameuser="Yash"
              city="Bombay"
              pere1="80"
              pere2="92"
              pere3="97"
              cr="success"
            />
          </Card>
        </Grid>
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              face="data:image/jpeg;base64,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"
              nameuser="shivam"
              city="Bombay"
              pere1="72"
              pere2="45"
              pere3="60"
              cr="error"
              pc="#34b53a"
            />
          </Card>
        </Grid>
        <Grid lg={4} md={12} sm={12} xs={12}>
          <Card style={{ margin: "5%" }}>
            <OutlinedCard
              face="https://s3-us-west-2.amazonaws.com/prd-rteditorial/wp-content/uploads/2020/02/13152840/700JimCarrey.jpg"
              nameuser="Omkar"
              city="lahore"
              pere1="47"
              pere2="63"
              pere3="90"
              pc="#34b53a"
            />
          </Card>
        </Grid>
      </Grid>

      <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
        <Grid lg={8} md={8} sm={12} xs={12}>
          <Banner2 />
          {/* Bottom Cards  */}
          <Grid lg={12} md={12} sm={12} xs={12} container direction="row">
           
            <Grid lg={3} md={12} sm={12} xs={12}>
            {data.slice(0, 1).map((users, id) => (

              <OmCard
                
                title="Twitter"
                per={users.tw}
                perText={users.tw}
                bg="#e2fbd7"
                pc="#34b53a"
              /> ))}
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
            {data.slice(0, 1).map((users, id) => (
              <OmCard
                title="Instagram"
                per={users.ig}
                perText={users.ig}
                bg="#dad7fe"
                pc="#4339f2"
              />))}
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
            {data.slice(0, 1).map((users, id) => (
              <OmCard
                title="Facebook"
                per={users.fb}
                perText={users.fb}
                bg="#ffe5d3"
                pc="#ff3a29"
              />))}
            </Grid>
            <Grid lg={3} md={12} sm={12} xs={12}>
            {data.slice(0, 1).map((users, id) => (
              <OmCard
                title="Behance"
                per={users.bh}
                perText={users.bh}
                bg="#ccf8fe"
                pc="#02a0fc"
              />))}
            </Grid>
            
          </Grid>
        </Grid>
        {/* Graph */}
        <Grid lg={4} md={4} sm={12} xs={12}>
          <Card style={{ margin: "4%", height: "100%" }}>
            <BarGraph />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}



