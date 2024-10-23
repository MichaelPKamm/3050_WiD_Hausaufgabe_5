import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Tabelle = ({ filtered_data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Anbieter </TableCell>
            <TableCell align="right">Datensatz</TableCell>
            <TableCell align="right">Zusammenfassung</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filtered_data.map((d) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{d.anbieter}</TableCell>
              <TableCell align="left">{d.datensatz}</TableCell>
              <TableCell align="left">{d.zusammenfassung}</TableCell>
              <TableCell align="center">{d.service}</TableCell>
              <TableCell align="center">{d.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
