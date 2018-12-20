import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUsers from '../../TableUsers/TableUsers';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

class PendingClientRequests extends Component {

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_PENDING_REQUESTS'})
  };

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <div className={classes.title}>
          <Typography variant="h2" className={classes.heading}>Pending Client Requests</Typography>
        </div>     
        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <TableUsers users={this.props.reduxState.allUsers.pendingRequests}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    );
  }
};

const styles = {
 root: {
  width: '100%',
 },
 rootTable: {
  width: '100%',
  overflowX: 'scroll'
 },
 centerText: {
  textAlign: 'center'
 },
 colorBar: {
  // needs to be here for custom-css switch to work.
 },
 colorChecked: {
  // needs to be here for custom-css switch to work.
 },
 colorSwitchBase: {
  color: colors.orange,
  '&$colorChecked': {
   color: colors.orange,
   '& + $colorBar': {
    backgroundColor: colors.orange
   }
  }
 },
 details: {
  alignItems: 'center',
 },
 heading: {
  fontSize: "1.5rem",
 },
 icon: {
  verticalAlign: 'bottom',
  height: 20,
  width: 20,
 },
 status: {
  flexBasis: '25.00%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  display: 'flex'
 },
 subheading: {
  fontSize: '1rem',
  color: 'green',
  fontWeight: 'bold'
 },
 summary: {
  alignItems: 'center'
 },
 table: {
  minWidth: 700
 },
 title: {
  flexBasis: '75.00%',
 },
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

PendingClientRequests.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(PendingClientRequests));