import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';
import TableTemplate from '../TableTemplate/TableTemplate';

// import edit dialog component
import DashboardEditDialog from '../EditDialogs/DashboardEditDialog';

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
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class DashboardExpansionPanel extends Component {

 state = {
  active: true,
  activeStatus: 'Active',
  public: false,
  publicStatus: 'Private'
 };

 // handle the toggle of active/inactive for the section
 handleChangeActive = () => {
   if (this.state.active) {
     this.setState({
       ...this.state,
       active: false,
       activeStatus: 'Inactive'
     })
   } else {
    this.setState({
      ...this.state,
      active: true,
      activeStatus: 'Active'
    })
   }
 } // end handleChangeActive

  // handle the toggle of public/private for the section
  handleChangePublic = () => {
    if (this.state.public) {
      this.setState({
        ...this.state,
        public: false,
        publicStatus: 'Private'
      })
    } else {
     this.setState({
       ...this.state,
       public: true,
       publicStatus: 'Public'
     })
    }
  } // end handleChangePublic

 componentDidMount() {
   // Get section when loaded
   this.props.dispatch({ type: 'FETCH_DASHBOARD', payload: {section: 'dashboard', current360Id: this.props.current360Id} });
 }

 render() {
   const { classes } = this.props;

   return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
          <div className={classes.title}>
            <Typography variant="h2" className={classes.heading}>Dashboard</Typography>
          </div>

          <div className={classes.status}>
            {/* Conditionally render "Active" on expansion panel summary if the section is active. */}
            {(this.state.activeStatus === 'Active') ? 
            <Typography variant="h2" className={classes.subheading}>{this.state.activeStatus},&nbsp;</Typography>
            : null }
            {/* Render "Public" on expansion panel summary if the section is active. */}
            <Typography variant="h2" className={classes.subheading}>{this.state.publicStatus}</Typography>
          </div>


        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>
            <TableTemplate 
              headers={['Description', 'Details']} 
              width={['15%',null]}
              data={this.props.reduxState.current360.dashboard} 
              className={[null,null]}
              cellVariables={['row_title', 'row_info']} 
            />
          </Paper>
        </ExpansionPanelDetails>

        <Divider />

        {/* Actions that show when the panel is expanded */}
        <ExpansionPanelActions>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.active}
                onChange={this.handleChangeActive}
                value="active"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.state.activeStatus}
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.public}
                onChange={this.handleChangePublic}
                value="public"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.state.publicStatus}
          />
          
          <DashboardEditDialog current360Id={this.props.current360Id}/>
        </ExpansionPanelActions>

      </ExpansionPanel>
    </div>
   );
 }
};

const styles = {
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
  root: {
    width: '100%',
  },
  rootTable: {
    width: '100%',
    overflowX: 'scroll'
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

DashboardExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(DashboardExpansionPanel));