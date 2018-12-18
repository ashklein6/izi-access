import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../colors';

// import edit dialog component
import GoalsAssessmentEditDialog from '../EditDialogs/GoalAssessmentsEditDialog';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

// Hard coded data
const rows = [
  { id: 1,
    description: 'Total Number', 
    desired: 125, 
    delivered: 140,
    difference: 15,
    percent: 112,
    comments: 'Based on in-room count. In room count is taken 3 to 6 times per account by at least two different people.'
  },
  { id: 2,
    description: 'Number of people of color/Indigenous', 
    desired: 71, 
    delivered: 70,
    difference: -1,
    percent: 99,
    comments: 'We generally set this goal at 51% in communities with at least 15% POC/Immigrant/Indigenous. Based on an in-room count.'
  },
  { id: 3,
    description: 'Number of people under 24', 
    desired: 35, 
    delivered: 33,
    difference: -2,
    percent: 94,
    comments: 'We generally set this goal at 25 - 33% unless the [project/event] does not warrant. Based on both in room and sign-in sheet counts.'
  },
  { id: 4,
    description: 'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    desired: 112, 
    delivered: 126,
    difference: 14,
    percent: 113,
    comments: '80% of the room is our target goal for this MIS.'
  },
]

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

class GoalsAssessmentExpansionPanel extends Component {

 state = {
  active: true,
  status: 'Active',
  open: false,
  rows: rows
 };

 // handle the toggle of active/inactive for the section
 handleChange = () => {
   if (this.state.active) {
     this.setState({
       ...this.state,
       active: false,
       status: 'Inactive'
     })
   } else {
    this.setState({
      ...this.state,
      active: true,
      status: 'Active'
    })
   }
 } // end handleChange

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
      <ExpansionPanel defaultExpanded>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
          <div className={classes.title}>
            <Typography variant="h2" className={classes.heading}>Goals Assessment</Typography>
          </div>

          {/* Conditionally render "Active" on expansion panel summary if the section is active. */}
          {(this.state.status === 'Active') ? 
          <div className={classes.status}>
            <Typography variant="h2" className={classes.subheading}>{this.state.status}</Typography>
          </div> : null }
        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell width="25%">Description</CustomTableCell>
                  <CustomTableCell>Desired</CustomTableCell>
                  <CustomTableCell>Delivered</CustomTableCell>
                  <CustomTableCell>Difference</CustomTableCell>
                  <CustomTableCell>Percent</CustomTableCell>
                  <CustomTableCell>Comments</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.rows.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <CustomTableCell component="th" scope="row" width="25%">
                        {row.description}
                      </CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.desired}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.delivered}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.difference}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.percent}%</CustomTableCell>
                      <CustomTableCell>{row.comments}</CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        </ExpansionPanelDetails>

        <Divider />

        {/* Actions that show when the panel is expanded */}
        <ExpansionPanelActions>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.active}
                onChange={this.handleChange}
                value="active"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.state.status}
          />
          <Button size="small" color="primary" onClick={this.handleClickOpen}>Edit</Button>
          <GoalsAssessmentEditDialog open={this.state.open} handleOpen={this.handleClickOpen}
          handleClose={this.handleClickClose}/>
        </ExpansionPanelActions>

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

GoalsAssessmentExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(GoalsAssessmentExpansionPanel));