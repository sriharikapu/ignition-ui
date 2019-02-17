import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles, TextField, DialogActions, Button } from '@material-ui/core';
import { hero } from './styles';
import CreateButton from '../Components/CreateButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';

import Dialog from '@material-ui/core/Dialog';
import Particles from 'react-particles-js';

function getSum(total, num) {
  return total + num;
}

class Hero extends React.Component {

  TOTAL = 100

  state = {
    open: false,
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    distribution: [0, 0, 0, 0, 0],
    hasLocation: false,
    totalAvailable: 100
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleDistribution = (position) => (event) => {
    let value = parseInt(event.target.value);
    if (isNaN(value)) {
      value = 0;
    }
    const dist = this.state.distribution
    dist[position] = value;
    const totalNewDistributed = dist.reduce(getSum);
    if (this.TOTAL - totalNewDistributed < 0) return;

    this.setState((prev) => {
      prev.distribution[position] = value;
      const totalNewDistributed = prev.distribution.reduce(getSum);
      return { distribution: prev.distribution, totalAvailable: this.TOTAL - totalNewDistributed}
    })
  }

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  }

  onSave = () => {
    const {
      name,
      description,
      startDate,
      endDate,
      distribution
    } = this.state;
    this.props.saveHack({ name, description, startDate, endDate, distribution });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="Hero">
        <div className={classes.particles}>
          <Particles />
        </div>
        <Dialog onClose={this.handleClose} open={this.state.open} className={classes.dialog} maxWidth="md">
          <DialogTitle className={classes.modalTitle}>Hackathon Information</DialogTitle>
          <DialogContent>
            <div className={classes.modalBody}>
              <Grid container>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    className={classes.textField}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    className={classes.textField}
                    value={this.state.description}
                    onChange={this.handleChange('description')}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Start Date"
                    type="date"
                    value={this.state.startDate}
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('startDate')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="End Date"
                    type="date"
                    className={classes.textField}
                    margin="normal"
                    onChange={this.handleChange('endDate')}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12}>
                      <h5>Bounty Distribution</h5>
                    </Grid>
                    <Grid item xs={12}>
                      <label>Total Distribution: {this.state.totalAvailable}</label>
                    </Grid>
                    <Grid item xs={6}>
                      <div className={classes.distContainer}>
                        <TextField
                          label="Percentage for First"
                          type="number"
                          className={classes.distField}
                          value={this.state.distribution[1] ? this.state.distribution[1] : ''}
                          margin="normal"
                          onChange={this.handleDistribution(1)}
                        />
                      </div>
                    </Grid>
                    
                    <Grid item xs={6}>
                      <div className={classes.distContainer}>
                        <TextField
                          label="Percentage for Second"
                          type="number"
                          className={classes.distField}
                          value={this.state.distribution[2] ? this.state.distribution[2] : ''}
                          margin="normal"
                          onChange={this.handleDistribution(2)}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.distContainer}>
                        <TextField
                          label="Percentage for Third"
                          type="number"
                          className={classes.distField}
                          value={this.state.distribution[3] ? this.state.distribution[3] : ''}
                          margin="normal"
                          onChange={this.handleDistribution(3)}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.distContainer}>
                        <TextField
                          label="Percentage for Fourth"
                          type="number"
                          className={classes.distField}
                          value={this.state.distribution[4] ? this.state.distribution[4] : ''}
                          margin="normal"
                          onChange={this.handleDistribution(4)}
                        />
                      </div>
                    </Grid>

                    <Grid item xs={6}>
                      <div className={classes.distContainer}>
                        <TextField
                          label="Percentage for Fifth"
                          type="number"
                          className={classes.distField}
                          value={this.state.distribution[5] ? this.state.distribution[5] : ''}
                          margin="normal"
                          onChange={this.handleDistribution(5)}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </DialogContent>
          <div className={classes.actionContainer}>
            <DialogActions>
              <Button onClick={this.handleClose} color="default">
                Cancel
              </Button>
              <Button onClick={this.onSave} variant="contained" color="primary">
                Create Hackaton
              </Button>
            </DialogActions>
          </div>
        </Dialog>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={6}>
            <div style={{marginLeft: '90px'}}>
              <h2 style={{ textAlign: 'left', marginTop: 18, color: "White"}}>
                ACCELERATING IDEAS THROUGH VIRTUAL HACKATHONS
              </h2>
              <p>
                <h3>
                  Expose the developers to companies and sponsors who enable them to create hacks that can make true impact
                </h3>
              </p>
              <div className={classes.buttonContainer}>
                <CreateButton onClick={this.handleOpen}><h3>CREATE HACKATHON</h3></CreateButton>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(hero)(Hero);