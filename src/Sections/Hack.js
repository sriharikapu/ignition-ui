import React from 'react';
import axios from 'axios';
import { withStyles, Grid, TextField, DialogActions, Button } from '@material-ui/core';
import TeamsTable from '../Components/TeamsTable';
import JudgesTable from '../Components/JudgesTable';
import { web3Service, HackFactory } from '../Services';

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
  '0x76CC77f2627e4bfFf1Dc7a88f4c80a632894F0E2': { name: 'Ethergram', description: 'Simple payments over telegram', link: 'https://kauri.io/article/db03ca50ad79458ea66e9de25d53fb2a/v3/ethergram' },
  '0xDEf7Bf3Cb2495B69f13C608b65FeAb5C55410685': { name: 'EthVelcro', description: 'Trigger webhooks with smart contract events or Graph Protocol subscriptions', link: 'https://kauri.io/article/172e228b2e7d4beaa59c0a49a027ef1e/v1/ethvelcro' },
  '0x00B8FBD65D61b7DFe34b9A3Bb6C81908d7fFD541': { name: 'The Will', description: 'The Will Of The People', link: 'https://kauri.io/article/77c3af763758464bb19e61aae06f0e6c/v1/the-will' },
  '0x87F25BfEa6d93E30FA0a3E0D86C386244F636a41': { name: 'Impact Curator', description: 'Curation of social impact projects', link: 'https://kauri.io/article/62a6c0e38c094999b6f3945a5ed07cdb/v1/impact-curator' },
  '0xdaf4f3f616cDed1e5fB2E7c0A77361718BB7A105': { name: 'UpTown', description: 'Empowering residents affected by rapidly rising living costs through community voting and efficient deployment of affordable housing funds.', link: 'https://kauri.io/article/5bc0603263a745aab70373b319622abc/v1/uptown' },
  '0x9BCf28E6c1E19F11DCa9f2A45fBdC4327A94e522': { name: 'Wel-fair', description: 'Government task marketplace to "top-up" welfare benefits', link: 'https://kauri.io/article/76125c8a2dd543eb8fa2076a46be56f3/v1/wel-fair' },
  '0xbaA5d582b0ACdc1D56Bc3D3CA83c4F6f89BdE54C': { name: 'ProjectMap', description: 'An incentivization layer for humanitarian mapping w/ extensible bounty structures, e.g. the payment of perpetual royalties to map editors.', link: 'https://kauri.io/article/cff659cda55242b3885242e97675fba9/v7/projectmap' },
  '0x484A3588e42fB1541858aA314854eEd26E14816c': { name: 'SmartPiggies', description: 'Decentralized Derivatives for Universal Price Insurance', link: 'https://kauri.io/article/06b31a287ddf407e98e31893994bad31/v4/smartpiggies' },
}

const judgeWallets = {
  '0x9B2828ef19b39De73d5F81A688dF35939AC5fDC0': { name: 'Joseph Lubin', img: 'https://www.ethdenver.com/wp-content/uploads/2018/08/joseph-lubin-250x250.jpeg'},
  '0x4Ba702aD0bf197a54414e0251Edd058FE6Ba4CBD': { name: 'Andreas M. Antonopoulos', img: 'https://www.ethdenver.com/wp-content/uploads/2018/10/1_Qaf5-hNLF-460KQZ7AIx9Q-250x250.png'},
  '0x733d35a79DCDDA443263FCe3147105C9aac7A55F': { name: 'Vlad Zamfir', img: 'https://www.ethdenver.com/wp-content/uploads/2018/10/vlad-250x250.jpg'},
  '0x6E902c319d28c618A139F1f1DddD9452F9dbB49a': { name: 'Aya Miyaguchi', img: 'https://www.ethdenver.com/wp-content/uploads/2019/02/f8c85b92-3331-491f-9bf3-97b0217e3914-250x250.jpg'},
  '0x00B8FBD65D61b7DFe34b9A3Bb6C81908d7fFD541': { name: 'Caitlin Long', img: 'https://www.ethdenver.com/wp-content/uploads/2018/11/Symbiont-headshot_cropped-250x250.jpg'},
  '0x6fFe96a7fD9aabE8cd46E7af28799f1c69A0150F': { name: 'Erik Voorhees', img: 'https://www.ethdenver.com/wp-content/uploads/2018/08/Erik-Voorhees-250x250.jpg'},
  '0x7eA59207d90d6fc10A4EfF5A48D6Ec89Ce455658': { name: 'Fabian Vogelsteller', img: 'https://www.ethdenver.com/wp-content/uploads/2018/12/Blockchain_Technologies-0025-250x250.jpg'},
  '0x0D0963f22D2491CA534d2F3aE3549Ec9CdD01571': { name: 'Hannah Parsons', img: 'https://www.ethdenver.com/wp-content/uploads/2018/09/HannahXI-180x180.png'},
}

let idJud = 0;
function createDataJudge(name, img, votesGiven, votesAvailable) {
  idJud += 1;
  return { idJud, name, img, votesGiven, votesAvailable };
}


let id = 0;
function createData(name, description, members, votes, walletAddress, link) {
  id += 1;
  return { id, name, description, members, votes, walletAddress, link };
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
        const teamInfo = teamWallets[team._candidateAddress] || {}
        return createData(teamInfo.name, teamInfo.description, 3, team._totalAmountOfVotes, team._candidateAddress, teamInfo.link)
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
        const judgeInfo = judgeWallets[jud._voterAddress] || {}
        return createDataJudge(judgeInfo.name, judgeInfo.img, jud._tokensUsed, jud._tokensRemaining)
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
    const currentTeam = teamWallets[this.state.currentVoteWallet]
    return (
      <div className={classes.root}>
        <Dialog onClose={this.handleClose} open={this.state.open} className={classes.dialog} maxWidth="md">
          <DialogContent>
            <h5>Vote for {currentTeam && currentTeam.name}</h5>
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