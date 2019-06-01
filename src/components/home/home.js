import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Settings from '@material-ui/icons/Settings';

import Waiting from '../champ-select/Waiting';

const styles = theme => ({
  root: {
    minHeight: '100vh',
    background: '#DBD3D8',  // Tymber Wolf
    padding: 0,
  },
  appbar: {
    background: '#A73737',  // Sweet Brown
    color: '#EFF1F3',       // Anti-Flash White
  },
  sectionDesktop: {
    position: 'absolute',
    right: 10,
  },
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth='false' style={{'-webkit-user-select': 'none'}}>
        <CssBaseline />
        <AppBar className={classes.appbar} position="static" color="default" elevation={7}>
          <Toolbar>
            <Typography variant="h6" color="inherit">
              Draftify
            </Typography>
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Waiting />
      </Container>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Home);