import React from 'react';
import { withStyles } from '@material-ui/core';
 
import { header } from './styles';

class Header extends React.Component {
  render() {
    const { classes} = this.props;
    return (
      <header className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <h2 className={classes.heading}>IGNITION</h2>
          </div>
        </div>
      </header>
    )
  }
}

export default withStyles(header)(Header);