import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { colors } from "@mui/material";

export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableRow style={{ height: "10px", marginLeft: "100px" }}></TableRow>

        <TableBody>
          <TableRow
            style={{ height: "-20%" }}
            // ping
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell> </TableCell>
            <TableCell scope="cols"></TableCell>
            <TableCell></TableCell>
            <Avatar
              style={{
                position: "relative",
                left: "-100px",
                height: "40px",
                width: "40px",
                marginTop: "10px"
              }}
              alt="Remy Sharp"
              src={props.im}
            />
            <TableCell style={{ left: "-70px", position: "relative" }}>
              {props.name}
            </TableCell>
            <TableCell align="left">{props.date}</TableCell>
            <TableCell style={{ textAlign: "center" }}>{props.time}</TableCell>
            <TableCell style={{ color: `${props.color}` }}>
              {props.price}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
