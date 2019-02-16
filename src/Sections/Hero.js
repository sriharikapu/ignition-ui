import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { hero } from './styles';
import CreateButton from '../Components/CreateButton';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

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
      <div className={classes.root}>
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
        <Grid container>
          <Grid item xs={12} md={6}>
            <div style={{marginLeft: '90px'}}>
              <h2 style={{ textAlign: 'left', marginTop: 18}}>
                Build your own site with the best interfaces for your web & mobile apps
              </h2>
              <p>
                Whether you want to fill this paragraph with some text like I'm doing right now, this place is perfect to
                 describe some features or anything you want - React has a complete solution for you.
              </p>
              <div className={classes.buttonContainer}>
                <CreateButton onClick={this.handleOpen}>Create Hackathon</CreateButton>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div style={{textAlign: 'center'}}>
              SOME IMAGE
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(hero)(Hero);