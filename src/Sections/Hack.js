import React from 'react';
import { withStyles, Grid } from '@material-ui/core';
import TeamsTable from '../Components/TeamsTable';
import JudgesTable from '../Components/JudgesTable';
 
const hack = (theme) => ({
  root: {},
  centered: {
    width: '100%',
    textAlign: 'center'
  }
})

class Hack extends React.Component {

  state = {
    teams: [],
    judges: []
  }

  componentDidMount() {
    // post to TRL API
    // Jueces
    // Teams
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.centered}>
              <h2>IGNITION</h2>
            </div>
          </Grid>
        </Grid>

        <Grid container>
          <Grid item xs={12}>
            <div className={classes.centered}>
              <h3>COUNTDOWN</h3>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={32}>
          <Grid item xs={7}>
            <div className={classes.centered}>
              <h4>TEAMS</h4>
            </div>
            <div>
              <TeamsTable />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className={classes.centered}>
              <h4>JUDGES</h4>
            </div>
            <div>
              <JudgesTable />
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(hack)(Hack);