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

function TeamsTable(props) {
  const { classes, teams, onVote, voteOpen } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            {/* <TableCell align="right">Members</TableCell> */}
            <TableCell align="center">Votes</TableCell>
            <TableCell align="center">Send Vote</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teams.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.description}</TableCell>
              {/* <TableCell align="right">{row.members}</TableCell> */}
              <TableCell align="right">{row.votes}</TableCell>
              <TableCell align="right">
                <Fab color="default" aria-label="Add" size="small" onClick={onVote(row.walletAddress)} disabled={!voteOpen}>
                  <SendIcon />
                </Fab>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

TeamsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamsTable);