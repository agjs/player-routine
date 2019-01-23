import { AppBar, Toolbar, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import Links from './Links';
import './style.scss';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navigation(props) {
  const { classes } = props;
  return (
    <div className="pr-topnav">
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Player's Routine
          </Typography>
          <Links />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navigation);
