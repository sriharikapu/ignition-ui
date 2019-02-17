import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { hero } from './styles';
import CreateButton from '../Components/CreateButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Particles from 'react-particles-js';

class Hero extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root} id="Hero">
      <div className={classes.particles}>
              <Particles />
            </div>
        <Dialog onClose={this.handleClose}  open={this.state.open} className={classes.dialog}>
          <DialogTitle>Set backup account</DialogTitle>
          {/* <DialogContent className={classes.content}></DialogContent> */}
          <div className={classes.modalBody}>
            <Grid container>
              <Grid item xs={12} md={6}>
                HOLA
              </Grid>
              <Grid item xs={12} md={6}>
                ADIOS
              </Grid>
            </Grid>
          </div>
        </Dialog>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={6}>
            <div style={{marginLeft: '90px'}}>
              <h2 style={{ textAlign: 'left', marginTop: 18, color: "White"}}>
                BUILT THE FIRST EVER DECENTRALIZED HACKATHON
              </h2>
              <p>
                <h3>
                Have you ever thoght thaa hackathon can be decentralized to 
                improve judging and distribute all promised bountie 
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