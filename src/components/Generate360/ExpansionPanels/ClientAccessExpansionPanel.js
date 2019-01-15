import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';

// import edit and publish dialog components
import AddClientDialog from '../EditDialogs/AddClientDialog';
import ThreesixtyInformationPublishDialog from '../EditDialogs/ThreesixtyInformationPublishDialog';

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

class ClientAccessExpansionPanel extends Component {

 state = {
  publishDialogOpen: false,
 };

  // Opens a dialog window when user wants to publish.
  handleClickOpen = () => {
    this.setState({
      ...this.state,
      publishDialogOpen: true,
    })
   } // end handleClickOpen
  
   // handles clicking of the "publish" or "cancel" button from the publish dailog window 
   // and closes the publish dialog window.
   handleClickClose = () => {
    this.setState({
      ...this.state,
      publishDialogOpen: false
    })
    console.log('this.state:', this.state);
   } // end handleClickClose
  
   // dispatches an action to update the database with the new values and 
   // calls handleClickClose.
   handleSave = () => {
    console.log('in handleSave');
    this.setState({
      ...this.state,
      published: true,
    })
    this.props.dispatch({ type: 'CHANGE_PUBLISH_STATUS', payload: {field: 'published_status',status: true, current360Id: this.props.current360Id} })
    this.handleClickClose();
   } // end handleSave

   removeAccess = (threesixtyUserId) => {
     console.log('remove access for threesixty_user_id:', threesixtyUserId);
     this.props.dispatch({ type: 'REMOVE_360_ACCESS_FROM_360', payload: {threesixtyUserId: threesixtyUserId, current360Id: this.props.current360Id} });
   }

 componentDidMount() {
   // Get section when loaded
   this.props.dispatch({ type: 'FETCH_360_CLIENTS', payload: {current360Id: this.props.current360Id} });
 }

 render() {
   const { classes } = this.props;

   return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
          <div className={classes.title}>
            <Typography variant="h2" className={classes.heading}>Client Access</Typography>
          </div>
        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>
            <p><strong>The following clients have access to the protected information of this 360:</strong></p>
            <ul>
              {this.props.reduxState.current360.clients.length === 0 ? <li>None</li> : null}
              {this.props.reduxState.current360.clients.map((person, index) => {
                return (
                  <li key={index}><strong>{person.firstname}&nbsp;{person.lastname}</strong>&nbsp;(Username:&nbsp;{person.username},&nbsp;
                  Email:{person.email}, Database Id:{person.id})
                  <button onClick={() => this.removeAccess(person.threesixty_user_id)}>Remove Access</button></li>
                );
              })}
            </ul>
          </Paper>
        </ExpansionPanelDetails>

        <Divider />

        {/* Actions that show when the panel is expanded */}
        <ExpansionPanelActions> 
          <AddClientDialog current360Id={this.props.current360Id}/>
          <ThreesixtyInformationPublishDialog open={this.state.publishDialogOpen} handleClickOpen={this.handleClickOpen} 
          handleClickClose={this.handleClickClose} handleSave={this.handleSave}/>
        </ExpansionPanelActions>

      </ExpansionPanel>
    </div>
   );
 }
};

const styles = {
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
  property: {
    fontWeight: 'bold'
  },
  root: {
    width: '100%',
  },
  rootTable: {
    width: '100%',
    overflowX: 'scroll',
    padding: 20
  },
  status: {
    flexBasis: '25.00%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  subheading: {
    fontSize: '1rem',
    color: colors.red,
    fontWeight: 'bold'
  },
  subheadingUnpublished: {
    fontSize: '1rem',
    color: colors.purple,
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

ClientAccessExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ClientAccessExpansionPanel));