import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  startButton: {
    position: 'absolute',
    right: 0,
    left: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    bottom: '15vh',
    flexGrow: 1,
  }
});

class Home extends Component {
  render(){
    const { classes} = this.props;
    return (
      <div xs={12} className={classes.startButton}>
        <Fab variant="extended" aria-label="Delete" className={classes.fab}>
          <NavigationIcon className={classes.extendedIcon} />
          Comenzar
        </Fab>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);