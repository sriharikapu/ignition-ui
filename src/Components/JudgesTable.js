import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import SendIcon from '@material-ui/icons/Send';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    // minWidth: 700,
  },
});

let id = 0;
function createData(name, description, votesGiven, votesAvailable) {
  id += 1;
  return { id, name, description, votesGiven, votesAvailable };
}

const rows = [
  createData('Name', 'COnsensys CEO', 4, 20),
  createData('Name', 'COnsensys CEO', 4, 19),
  createData('Name', 'COnsensys CEO', 4, 18),
  createData('Name', 'COnsensys CEO', 4, 10),
  createData('Name', 'COnsensys CEO', 4, 9),
  createData('Name', 'COnsensys CEO', 4, 8),
  createData('Name', 'COnsensys CEO', 4, 7),
  createData('Name', 'COnsensys CEO', 4, 6),
  createData('Name', 'COnsensys CEO', 4, 5),
];

function JudgesTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="right">Votes Given</TableCell>
            <TableCell align="right">Votes Available</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell align="right">{row.votesGiven}</TableCell>
              <TableCell align="right">{row.votesAvailable}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

JudgesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JudgesTable);