import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(Region, Jobs13, Jobs18, Change, PercentChange) {
  return { Region, Jobs13, Jobs18, Change, PercentChange };
}

const rows = [
  createData("Region", 11904, 13114, 1210, 10.2),
  createData("State", 13103, 14469, 1366, 10.4),
  createData("Nation", 300651, 326205, 25554, 9.1)
];

export default function KeyTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><em>Region</em></TableCell>
            <TableCell align="right">2013 Jobs</TableCell>
            <TableCell align="right">2018 Jobs</TableCell>
            <TableCell align="right">Change</TableCell>
            <TableCell align="right">% Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.Industry}>
              <TableCell component="th" scope="row">
                {row.Region}
              </TableCell>
              <TableCell align="right">{row.Jobs13}</TableCell>
              <TableCell align="right">{row.Jobs18}</TableCell>
              <TableCell align="right">{row.Change}</TableCell>
              <TableCell align="right">{row.PercentChange}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
