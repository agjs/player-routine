import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import className from 'classnames';
import React from 'react';
import { connect } from 'react-redux';
import { FEATURES } from '../../copy';
import { setError } from '../../store/status/actions';
import Feature from './Feature';
import './style.scss';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
});

class Wrapper extends React.Component {
  componentDidCatch(error, _errorInfo) {
    this.props.dispatch(setError(error));
  }
  render() {
    const { classes } = this.props;
    const classname = className('pr-wrapper', classes.root);
    return (
      <div className={classname}>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              style={{ marginTop: '150px' }}
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Player's Routine
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Practice and schedule is what differentiates professionals from hobbists. If you feel
              like you've been playing for years but haven't seen much progress, you've been doing
              it wrong
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Sign Up
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    How does it work
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <Typography
          style={{ marginTop: '100px' }}
          component="h2"
          variant="h2"
          align="center"
          color="textPrimary"
        >
          Features
        </Typography>
        <Typography
          style={{ marginBottom: '50px' }}
          component="h5"
          variant="h5"
          align="center"
          color="textPrimary"
        >
          Tailored for musicians to achieve greatness
        </Typography>
        <p />
        <Grid container spacing={24} className="pr-wrapper__features">
          {FEATURES.map((feature, index) => {
            const featureClassName = className('feature', {});
            return (
              <Grid className={featureClassName} key={index} item xs={6}>
                <Feature icon={feature.icon} title={feature.title} content={feature.content} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    status: state.status,
  };
};

export default withStyles(styles)(connect(mapStateToProps)(Wrapper));
