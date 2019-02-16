import React, { Component } from 'react';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import getTheme from './theme';
import Hero from './Sections/Hero';
import Header from './Sections/Header';
import HackList from './Sections/HackList';


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
  startDate: new Date('February 17, 2019 20:00:00'),
  endDate: new Date('February 19, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.PROGRAMMED
}, {
  name: 'NEW Hack 2',
  pool: 5000,
  image: '',
  startDate: new Date('February 14, 2019 20:00:00'),
  endDate: new Date('February 17, 2019 20:00:00'),
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
    newHacks: [],
    hacks: []
  }

  componentDidMount() {
    let newHacks = localStorage.getItem('newHacks');
    if (!newHacks) {
      newHacks = defaultNewHacks;
      localStorage.setItem('newHacks', JSON.stringify(defaultNewHacks));
    }
    newHacks = JSON.parse(newHacks);
    this.setState({ newHacks });
  }

  saveNewHack = (hackathon) => {
    const newHacks = localStorage.getItem('newHacks');
    const newHacksJSON = JSON.parse(newHacks);

    newHacksJSON.unshift(hackathon);

    localStorage.setItem('newHacks', JSON.stringify(newHacksJSON));
    this.setState({ newHacks: newHacksJSON });
  }

  render() {
    const theme = getTheme();
    const { classes } = this.props;
    console.log(this.state.newHacks)
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
