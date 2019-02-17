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

  function getKudo(id) {
    let kudo;
    switch (id) {
      case 1: {
        kudo = 'https://s.gitcoin.co/static/v2/images/kudos/trophy_1.2e639d833962.svg';
        break;
      }
      case 2: {
        kudo = 'https://s.gitcoin.co/static/v2/images/kudos/trophy_2.f039e509264b.svg';
        break;
      }
      case 3: {
        kudo = 'https://s.gitcoin.co/static/v2/images/kudos/trophy_3.efe26dc35ec7.svg';
        break;
      }
      default: {
        kudo = 'https://s.gitcoin.co/static/v2/images/kudos/go_developer.6a8228167b27.svg';
      }
    }
    return kudo;
  }
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Kudo</TableCell>
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
              <TableCell><img src={getKudo(row.id)} style={{height: 60}}/></TableCell>
              <TableCell component="th" scope="row">
                <a href={row.link} target="_blank">{row.name}</a>
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