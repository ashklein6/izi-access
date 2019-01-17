import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import MarnitaLogo from '../HomePage/marnita_logo.png';
import colors from '../App/colors';

// Material-UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

class Nav extends Component {

  employee = (user) => {
    if(user >= 4) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classes.nav} position="fixed">
          <Toolbar>
            <Link to="/home">
              <img src={MarnitaLogo} alt="Marnita's Table Placeholder" className={classes.image}/>
              <Typography className={classes.title} variant="h4">
                MarnitaConnect
              </Typography>
            </Link>
  
            <div className={classes.grow} />
              {this.employee(this.props.reduxState.user.access_id) && (
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
  image: {
    height: '2.125rem',
    marginRight: 10
  },
  nav: {
    overflow: 'hidden',
    backgroundColor: colors.purple,
  },
  title: {
    color: 'white',
    display: 'inline-block'
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Nav));
