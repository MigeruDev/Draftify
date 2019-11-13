import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    position: 'relative',
    marginTop: '7vh',
    width: '70vh',
    padding: 0,
  },
  card: {
    position: 'relative',
  },
  media: {
    height: '60vh',
    width: '68vh',
    marginLeft: 7,
    padding: 0,
  },
  content: {
    position: 'absolute',
    top: 130,
    left: 55,
    width: 325,
  },
});

class Waiting extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root}>
        <CssBaseline />
        <Card className={classes.card} elevation={0} style={{backgroundColor: 'transparent'}}>
          <CardMedia
            component='img'
            className={classes.media}
            image={require('../../assets/frame.png')}
            draggable='false'
          />
          <CardContent style={{'-webkit-user-select': 'none'}} className={classes.content}>
            <Typography gutterBottom color="textSecondary" variant="h5" component="h2">
              Saludos Invocador
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" >
              Comienza una partida de reclutamiento para que nuestro sistema se ponga en marcha xd
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

Waiting.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Waiting);