import React, { Component } from 'react';
import { connect } from 'react-redux';
import PendingClientRequests from './ExpansionPanels/PendingClientRequests';
import DeactivatedUsers from './ExpansionPanels/DeactivatedUsers';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

class ManageUsers extends Component {

  state = {
  };

  render() {
    const { classes } = this.props;
  return (
    <div className={classes.root}>
      <PendingClientRequests />
      <DeactivatedUsers />
    </div>
    );
  }
};

const styles = {
  root: {
    width: '100%',
  },
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

ManageUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ManageUsers));