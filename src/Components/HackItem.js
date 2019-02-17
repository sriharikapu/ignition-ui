import React from 'react';
import moment from 'moment';
import { withStyles, Grid, Button } from '@material-ui/core';
import { states } from '../App';

const styles = (theme) => ({
  root: {
    height: 250,
    width: '100%',
    maxWidth: '200px',
    textAlign: 'center',
    border: '1px solid',
    position: 'relative',
    cursor: 'pointer'
  },
  details: {
    marginTop: '10px'
  },
  rowButton: {
    position: 'absolute',
    bottom: 0
  },
  buttonContainer: {
    textAlign: 'center',
    display: 'flex',
    position: 'relative',
    marginBottom: '15px',
    padding: 3
  },
  button: {
    width: '30px',
  }
});

class HackItem extends React.Component {
  render() {
    const { 
      classes, 
      name,
      pool,
      image,
      startDate,
      endDate,
      hasLocation,
      location,
      state } = this.props;

    let message;
    if (state === states.PROGRAMMED) {
      message = `Starting ${moment(startDate).endOf('day').fromNow()}`
    } else if (state === states.RUNNING) {
      message = `Finishing ${moment(endDate).endOf('day').fromNow()}`
    } else {
      message = `Finished ${moment(endDate).from()}`
    }
    
    return <div className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={10}>
          <h5>{name}</h5>
          <div className={classes.details}>
            <p>{pool} $</p>
            <p>{message}</p>
          </div>
        </Grid>
      </Grid>

      <Grid container justify="center" className={classes.rowButton}>
        <Grid item xs={12}>
          <div className={classes.buttonContainer}>
            <Button onClick={() => {}} color="default" className={classes.button}>
              Fund
            </Button>
            <Button onClick={() => {}} variant="contained" color="primary">
              Participate
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  }
}

export default withStyles(styles)(HackItem);