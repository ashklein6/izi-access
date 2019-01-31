import React, { Component } from 'react';
import { connect } from 'react-redux';
import PendingClientRequests from './ExpansionPanels/PendingClientRequests';
import Users from './ExpansionPanels/Users';
import DeactivatedUsers from './ExpansionPanels/DeactivatedUsers';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

class ManageUsers extends Component {

  state = {
  };

  returnToDash = () => {
    this.props.history.push('/dashboard');
  };

  render() {
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained" onClick={this.returnToDash}>Return to Dashboard</Button>
      <PendingClientRequests />
      <Users />
      <DeactivatedUsers />
    </div>
    );
  }
};

const styles = {
  root: {
    width: '100%',
  },
  button: {
    margin: 25,
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

ManageUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ManageUsers));