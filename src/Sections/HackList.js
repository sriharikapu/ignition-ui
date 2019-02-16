import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import HackItem from '../Components/HackItem';

const styles = (theme) => ({
  root: {
  }
});

const states = {
  RUNNING: 'running',
  FINISHED: 'finished',
  PROGRAMMED: 'programmed'
}

const hackathons = [{
  name: 'Hack 1',
  pool: 3000,
  image: '',
  startDate: new Date('February 17, 2019 20:00:00'),
  endDate: new Date('February 19, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.PROGRAMMED
}, {
  name: 'Hack 2',
  pool: 5000,
  image: '',
  startDate: new Date('February 14, 2019 20:00:00'),
  endDate: new Date('February 17, 2019 20:00:00'),
  hasLocation: false,
  location: '',
  state: states.RUNNING
}, {
    name: 'Hack 3',
    pool: 4000,
    image: '',
    startDate: new Date('February 7, 2019 20:00:00'),
    endDate: new Date('February 10, 2019 20:00:00'),
    hasLocation: false,
    location: '',
    state: states.FINISHED
}]


class HackList extends React.Component {
  render() {
    const { classes } = this.props;
    return <div>
      <Grid container>
        <Grid item xs={3}>
        <label>NEWEST</label>
          <Grid container>
            {hackathons.map((hack) => {
                return <Grid item xs={12}>
                  <HackItem {...hack} />
                </Grid>
              })
            }
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <label>BEST RATED</label>
          <Grid container>
            {hackathons.map((hack) => {
              return <Grid item xs={3}>
                <HackItem {...hack} />
              </Grid>
            })}
            {hackathons.map((hack) => {
              return <Grid item xs={3}>
                <HackItem {...hack} />
              </Grid>
            })}
          </Grid>
        </Grid>
      
      </Grid>
    </div>
  }
}

export default withStyles(styles)(HackList);