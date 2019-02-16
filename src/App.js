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
class App extends Component {
  render() {
    const theme = getTheme();
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Hero />
          <HackList />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
