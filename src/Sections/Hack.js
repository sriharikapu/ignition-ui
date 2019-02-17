import React from 'react';
import axios from 'axios';
import { withStyles, Grid, TextField, DialogActions, Button } from '@material-ui/core';
import TeamsTable from '../Components/TeamsTable';
import JudgesTable from '../Components/JudgesTable';
import { HackContract, web3Service, HackFactory } from '../Services';

import DialogContent from '@material-ui/core/DialogContent';

import Dialog from '@material-ui/core/Dialog';

const hack = (theme) => ({
  root: {
    padding: 30
  },
  centered: {
    width: '100%',
    textAlign: 'center'
  },
  dialog: {
    width: '100%',
  },
  modalTitle: {
    textAlign: 'center'
  },
})

const teamWallets = {
  '0x76CC77f2627e4bfFf1Dc7a88f4c80a632894F0E2': 'Team 1',
  '0xDEf7Bf3Cb2495B69f13C608b65FeAb5C55410685': 'Team 2',
  '0x00B8FBD65D61b7DFe34b9A3Bb6C81908d7fFD541': 'Team 3',
  '0x87F25BfEa6d93E30FA0a3E0D86C386244F636a41': 'Team 4',
  '0xdaf4f3f616cDed1e5fB2E7c0A77361718BB7A105': 'Team 5',
  '0x9BCf28E6c1E19F11DCa9f2A45fBdC4327A94e522': 'Team 6',
  '0xbaA5d582b0ACdc1D56Bc3D3CA83c4F6f89BdE54C': 'Team 7',
  '0x484A3588e42fB1541858aA314854eEd26E14816c': 'Team 8',
}

const judgeWallets = {
  '0x9B2828ef19b39De73d5F81A688dF35939AC5fDC0': 'Judge 1',
  '0x4Ba702aD0bf197a54414e0251Edd058FE6Ba4CBD': 'Judge 2',
  '0x733d35a79DCDDA443263FCe3147105C9aac7A55F': 'Judge 3',
  '0x6E902c319d28c618A139F1f1DddD9452F9dbB49a': 'Judge 4',
  '0x00B8FBD65D61b7DFe34b9A3Bb6C81908d7fFD541': 'Judge 5',
  '0x6fFe96a7fD9aabE8cd46E7af28799f1c69A0150F': 'Judge 6',
  '0x7eA59207d90d6fc10A4EfF5A48D6Ec89Ce455658': 'Judge 7',
  '0x0D0963f22D2491CA534d2F3aE3549Ec9CdD01571': 'Judge 8',
}

let idJud = 0;
function createDataJudge(name, description, votesGiven, votesAvailable) {
  idJud += 1;
  return { idJud, name, description, votesGiven, votesAvailable };
}


let id = 0;
function createData(name, description, members, votes, walletAddress) {
  id += 1;
  return { id, name, description, members, votes, walletAddress };
}


const ENDPOINT = 'https://7teikvy6sh.execute-api.us-east-1.amazonaws.com/dev/graphql'
class Hack extends React.Component {

  state = {
    teams: [],
    judges: [],
    open: false,
    amountVotes: 0,
    votingPeriodOpen: true
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentDidMount() {
    // post to TRL API
    // Jueces
    axios({
      method: 'post',
      url: ENDPOINT,
      headers: {'Content-Type': 'application/json'},
      data: {
        "query": "query { candidates(_periodIndex: 0) { _candidateAddress _totalAmountOfVotes } }"
      }
    }).then(response => {
      const candidates = response.data.data.candidates;
      const teamsData = candidates.map(team => {
        return createData(teamWallets[team._candidateAddress], '', 3, team._totalAmountOfVotes, team._candidateAddress)
      });
      const teams = teamsData.filter((team) => !!team.name)
      this.setState({ teams })
    });

    
    axios({
      method: 'post',
      url: ENDPOINT,
      headers: {'Content-Type': 'application/json'},
      data: {
        "query": "query { voters(_periodIndex: 0) {_voterAddress _tokensUsed _tokensStaked _tokensRemaining } }"
      }
    }).then(response => {
      const voters = response.data.data.voters;
      const votersData = voters.map(jud => {
        return createDataJudge(judgeWallets[jud._voterAddress], '', jud._tokensUsed, jud._tokensRemaining)
      });
      const judges = votersData.filter((judge) => !!judge.name)
      this.setState({ judges })
    });

  }

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  }

  sendVote = () => {
    web3Service.getAccount().then((wallet) => {
      // return HackContract.methods
      //   .vote(this.state.currentVoteWallet, this.state.amountVotes)
      return HackFactory.methods.vote(0, this.state.currentVoteWallet, this.state.amountVotes)
        .send({ from: wallet })
    }).then((result) => this.handleClose());
  }

  onVote = (walletAddress) => () => {
    this.setState({ currentVoteWallet: walletAddress, open: true })
  }
  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Dialog onClose={this.handleClose} open={this.state.open} className={classes.dialog} maxWidth="md">
          <DialogContent>
            <h5>Vote for {teamWallets[this.state.currentVoteWallet]}</h5>
            <TextField
              label="Amount"
              type="number"
              className={classes.textField}
              value={this.state.amountVotes}
              onChange={this.handleChange('amountVotes')}
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="default">
              Cancel
            </Button>
            <Button onClick={this.sendVote} variant="contained" color="primary">
              Vote
            </Button>
          </DialogActions>
        </Dialog>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.centered}>
              <h2 style={{color: 'black'}}>IGNITION</h2>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <div className={classes.centered}>
              <h3 style={{color: 'black'}}>{`VOTING ${this.state.votingPeriodOpen ? 'OPEN' : 'CLOSED'}`}</h3>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={32}>
          <Grid item xs={7}>
            <div className={classes.centered}>
              <h4>TEAMS</h4>
            </div>
            <div>
              <TeamsTable teams={this.state.teams} onVote={this.onVote} voteOpen={this.state.votingPeriodOpen}/>
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.centered}>
              <h4>JUDGES</h4>
            </div>
            <div>
              <JudgesTable judges={this.state.judges}/>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(hack)(Hack);