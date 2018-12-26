import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';

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
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

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

 componentDidMount() {
   this.props.dispatch({ type: 'FETCH_360_SECTION', payload: {section: 'goalsAssessment', current360Id: 1} });
 }

 render() {
   const { classes } = this.props;

   return (
    <div className={classes.root}>
      {JSON.stringify(this.props.reduxState.current360.goalsAssessment)}
      <ExpansionPanel defaultExpanded className={classes.expansionPanel}>

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
                {this.props.reduxState.current360.goalsAssessment.map(row => {
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
          
          <GoalsAssessmentEditDialog />
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
  expansionPanel: {
    backgroundColor: colors.lightGrey
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
    alignItems: 'center',
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