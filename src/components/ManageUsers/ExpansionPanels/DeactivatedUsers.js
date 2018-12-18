import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

// Hard coded data
let id = 0;
function createData( first_name, last_name, email, level ) {
  id += 1;
  return { first_name, last_name, email, level };
}

const rows = [
  createData('John', 'Doe', 'john_doe@email.com', 'Level'),
  createData('John', 'Doe', 'john_doe@email.com', 'Level'),
  createData('John', 'Doe', 'john_doe@email.com', 'Level'),
];

// Cleanly style table cells within Material-UI
const CustomTableCell = withStyles(theme => ({
  head: {
    fontSize: '1rem',
    backgroundColor: colors.orange,
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
  body: {
    padding: 5,
  },
}))(TableCell);

class DeactivatedUsers extends Component {

  state = {
    open: false,
    rows: rows
  };


  // handles clicking of the "edit" button. Opens a dialog window.
  handleClickOpen = () => {
    this.setState({
      ...this.state,
      open: true
    })
  } // end handleClickOpen

  // handles clicking of the "save" or "cancel" button from the dailog window 
  // and closes the dialog window.
  handleClickClose = () => {
    this.setState({
      ...this.state,
      open: false
    })
  } // end handleClickClose

  render() {
    const { classes } = this.props;

  return (
    <div className={classes.root}>
      <ExpansionPanel>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <div className={classes.title}>
          <Typography variant="h2" className={classes.heading}>Manage Deactivated Users</Typography>
        </div>     
        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>First Name</CustomTableCell>
                  <CustomTableCell>Last Name</CustomTableCell>
                  <CustomTableCell>Email</CustomTableCell>
                  <CustomTableCell>Level</CustomTableCell>
                  <CustomTableCell>Actions</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => {
                return (
                  <TableRow key={row.id}>
                    <CustomTableCell className={classes.centerText} component="th" scope="row">
                    {row.first_name}
                    </CustomTableCell>
                    <CustomTableCell className={classes.centerText}>{row.last_name}</CustomTableCell>
                    <CustomTableCell className={classes.centerText}>{row.email}</CustomTableCell>
                    <CustomTableCell className={classes.centerText}>{row.level}</CustomTableCell>
                    <CustomTableCell className={classes.centerText} component="th" scope="row">
                      <Button variant="contained">View</Button>
                    </CustomTableCell>
                  </TableRow>
                );
                })}
              </TableBody>
            </Table>
          </Paper>
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

DeactivatedUsers.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(DeactivatedUsers));