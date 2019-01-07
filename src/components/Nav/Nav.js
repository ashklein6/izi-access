import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

let root = document.querySelector(':root');
const colors = {
  purple: window.getComputedStyle(root).getPropertyValue('--main-purple'),
  purpleHover: window.getComputedStyle(root).getPropertyValue('--main-purple-hover'),
  red: window.getComputedStyle(root).getPropertyValue('--main-red'),
  redHover: window.getComputedStyle(root).getPropertyValue('--main-red-hover'),
  pink: window.getComputedStyle(root).getPropertyValue('--main-pink'),
  pinkHover: window.getComputedStyle(root).getPropertyValue('--main-pink-hover'),
  orange: window.getComputedStyle(root).getPropertyValue('--main-orange'),
  orangeHover: window.getComputedStyle(root).getPropertyValue('--main-orange-hover'),
};

class Nav extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.nav} position="static">
          <Toolbar>
            <Link to="/home">
              <Typography className={classes.title} variant="h4">
                MarnitaConnect
              </Typography>
            </Link>
  
            <div className={classes.grow} />
              {this.props.reduxState.user.id && (
                <>
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </>
              )}

              <Link className="nav-link" to="/profile">
              {/* Show this link if they are logged in or not,
              but call this link 'Home' if they are logged in,
              and call this link 'Login / Register' if they are not */}
                {this.props.reduxState.user.id ? 'Profile' : 'Login / Register'}
              </Link>

              {/* Show the link to the info page and the logout button if the user is logged in */}
              {this.props.reduxState.user.id && (
                <>
                  <LogOutButton className="nav-link"/>
                </>
              )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

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
  nav: {
    overflow: 'hidden',
    backgroundColor: colors.purple,
  },
  title: {
    color: '#fff'
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Nav));
