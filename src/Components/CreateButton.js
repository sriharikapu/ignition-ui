import React from 'react';
import { withStyles } from '@material-ui/core';
import classnames from 'classnames';

const styles = (theme) => ({
  root: {
    textTransform: 'uppercase',
    textDecoration: 'none',
    backgroundColor: 'transparent',
    fontSize: 13,
    fontWeight: 400,
    letterSpacing: 1,
    textAlign: 'center',
    cursor: 'pointer',
    color: 'black',
    border: '2px solid white',
    borderRadius: 50,
    padding: '0px 38px',
    transition:' all .2s linear',
    '&:hover': {
      borderColor: 'black', 
      color: 'white',
      backgroundColor: 'black'
    }
  }
});

class CreateButton extends React.Component {
  render() {
    const { classes, className, children, onClick } = this.props;
    return <a className={classnames(classes.root, className)} onClick={onClick}>
        {children}
      </a>
  }
}

export default withStyles(styles)(CreateButton);