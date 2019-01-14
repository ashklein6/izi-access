import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';
import moment from 'moment';

// import edit and publish dialog components
import ThreesixtyInformationEditDialog from '../EditDialogs/ThreesixtyInformationEditDialog';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class ThreesixyInformationExpansionPanel extends Component {

 state = {
  publishDialogOpen: false,
 };

 // handle the toggle of published/unpublished for the 360
 handleChangePublished = () => {
   if (this.props.reduxState.current360.info[0].published_status) {
    // If 360 is being unpublished, dispatch action to unpublish:
     this.props.dispatch({ type: 'CHANGE_PUBLISH_STATUS', payload: {field: 'published_status', status: false, current360Id: this.props.current360Id}})
   } else {
    // if 360 is being published, open publish dialog window to show warning
    this.handleClickOpen();
   }
 } // end handleChangeActive

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

 componentDidMount() {
   // Get section when loaded
   this.props.dispatch({ type: 'FETCH_360_INFO', payload: {current360Id: this.props.current360Id} });
 }

 render() {
   const { classes } = this.props;

   return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
          <div className={classes.title}>
            <Typography variant="h2" className={classes.heading}>360 Information</Typography>
            {JSON.stringify(this.props.reduxState.current360.info.published_status)}
          </div>

          <div className={classes.status}>
            {/* Render publication status on expansion panel summary. */}
            <Typography variant="h2" className={classes.subheading}>{this.props.reduxState.current360.info[0].published_status ? 'Published' : 'Unpublished'}</Typography>
          </div>


        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>
            {this.props.reduxState.current360.info.map((threesixty, index) => {
              return (
                <React.Fragment key={index}>
                  <p><span className={classes.property}>Database Id: </span>{threesixty.id}</p>
                  <p><span className={classes.property}>Name: </span>{threesixty.name}</p>
                  <p><span className={classes.property}>Date: </span>{moment(threesixty.date).format('ll')}</p>
                  <p><span className={classes.property}>Location: </span>{threesixty.location}</p>
                  <p><span className={classes.property}>Category: </span>{threesixty.category}</p>
                  <p><span className={classes.property}>Client: </span>{threesixty.client}</p>
                  <p><span className={classes.property}>Description: </span>{threesixty.description}</p>
                </React.Fragment>
              );
            })}
          </Paper>
        </ExpansionPanelDetails>

        <Divider />

        {/* Actions that show when the panel is expanded */}
        <ExpansionPanelActions>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.reduxState.current360.info[0].published_status}
                onChange={this.handleChangePublished}
                value="published"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.props.reduxState.current360.info[0].published_status ? 'Published' : 'Unpublished'}
          />
          
          <ThreesixtyInformationEditDialog current360Id={this.props.current360Id}/>
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

ThreesixyInformationExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ThreesixyInformationExpansionPanel));