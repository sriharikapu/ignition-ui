import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import getTheme from './theme';
import Hero from './Sections/Hero';
import Header from './Sections/Header';
import HackList from './Sections/HackList';
import { HackFactory, web3Service } from './Services';


const styles = () => ({
  content: {
  }
})

export const states = {
  RUNNING: 'running',
  FINISHED: 'finished',
  PROGRAMMED: 'programmed'
}

const defaultNewHacks = [{
  name: 'NEW Hack 1',
  pool: 3000,
  image: '',
  startDate: new Date('February 20, 2019 20:00:00'),
  endDate: new Date('February 21, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.PROGRAMMED
}, {
  name: 'NEW Hack 2',
  pool: 5000,
  image: '',
  startDate: new Date('February 14, 2019 20:00:00'),
  endDate: new Date('February 20, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.RUNNING
}, {
  name: 'NEW Hack 3',
  pool: 4000,
  image: '',
  startDate: new Date('February 7, 2019 20:00:00'),
  endDate: new Date('February 10, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.FINISHED
}]
class App extends Component {

  state = {
    newHacks: defaultNewHacks,
    hacks: []
  }

  componentDidMount() {
    // this.setState({ newHacks });
  }

  saveNewHack = (hackathon) => {
    const newHacksJSON = this.state.newHacks;

    web3Service.getAccount().then((wallet) => {
      return HackFactory.methods.newHackathon(Math.floor(new Date(hackathon.endDate).getTime()/1000), Math.floor(new Date(hackathon.startDate).getTime()/1000), hackathon.distribution)
      .send({from: wallet})
      .then(response => {
        newHacksJSON.unshift(hackathon);
        this.setState({ newHacks: newHacksJSON });
      })
    });
    
  }

  render() {
    const theme = getTheme();
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Hero saveHack={this.saveNewHack}/>
          <HackList newHacks={this.state.newHacks}/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
