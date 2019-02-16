import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({
  root: {
    color: 'blue',
    outline: 0,
    textDecoration: 'none',
    backgroundColor: 'transparent',
    overflow: 'hidden',
    position: 'relative',
    display: 'block',
    margin: '5px',
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
    return <div>
      <p>{name}</p>
      <p>{pool} $</p>
      <p>{state}</p>
    </div>
  }
}

export default withStyles(styles)(HackItem);