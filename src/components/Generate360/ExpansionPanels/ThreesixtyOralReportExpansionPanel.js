import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';
import MarkDownOutput from '../../MarkDownEditor/MarkdownOutput';

// import edit dialog component
// import AnalysisRecEditDialog from '../EditDialogs/AnalysisRecEditDialog';

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

class ThreesixtyOralReportExpansionPanel extends Component {

 state = {

 };

 // handle the toggle of published/unpublished for the section
 handleChangePublished = () => {
  if (this.props.reduxState.current360.info[0].threesixty_reports_published) {
   // If section is being unpublished, dispatch action to unpublish:
    this.props.dispatch({ type: 'CHANGE_PUBLISH_STATUS', payload: {field: 'threesixty_reports_published', status: false, current360Id: this.props.current360Id}})
  } else {
   // If section is being published, dispatch action to publish:
   this.props.dispatch({ type: 'CHANGE_PUBLISH_STATUS', payload: {field: 'threesixty_reports_published', status: true, current360Id: this.props.current360Id}})
  }
} // end handleChangePublished

 // handle the toggle of public/private for the section
 handleChangePublic = () => {
  if (this.props.reduxState.current360.info[0].threesixty_reports_public) {
   // If section is being changed to private, dispatch action to make private:
    this.props.dispatch({ type: 'CHANGE_PUBLIC_STATUS', payload: {field: 'threesixty_reports_public', status: false, current360Id: this.props.current360Id}})
  } else {
   // If section is being changed to public, dispatch action to make public:
   this.props.dispatch({ type: 'CHANGE_PUBLIC_STATUS', payload: {field: 'threesixty_reports_public', status: true, current360Id: this.props.current360Id}})
  }
} // end handleChangePublished

 componentDidMount() {
   // Get section when loaded
   this.props.dispatch({ type: 'FETCH_THREESIXTY_REPORTS', payload: {section: 'threesixty_reports', current360Id: this.props.current360Id} });
 }

 render() {
   const { classes } = this.props;

   return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.expansionPanel}>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
          <div className={classes.title}>
            <Typography variant="h2" className={classes.heading}>360 Report - Oral Report</Typography>
          </div>

          <div className={classes.status}>
            {/* Conditionally render "Published" on expansion panel summary if the section is active. */}
            {(this.props.reduxState.current360.info[0].threesixty_reports_published === true) ?
            <Typography variant="h2" className={classes.subheading}>Visible,&nbsp;</Typography>
            : null }
            {/* Render "Public" on expansion panel summary if the section is active. */}
            <Typography variant="h2" className={classes.subheading}>{this.props.reduxState.current360.info[0].threesixty_reports_public ? 'Public' : 'Private'}</Typography>
          </div>


        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <Paper className={classes.rootTable}>

          </Paper>
        </ExpansionPanelDetails>

        <Divider />

        {/* Actions that show when the panel is expanded */}
        <ExpansionPanelActions>
          <FormControlLabel
            control={
              <Switch
                checked={this.props.reduxState.current360.info[0].threesixty_reports_published}
                onChange={this.handleChangePublished}
                value="published"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.props.reduxState.current360.info[0].threesixty_reports_published ? 'Published' : 'Unpublished'}
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.props.reduxState.current360.info[0].threesixty_reports_public}
                onChange={this.handleChangePublic}
                value="public"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.props.reduxState.current360.info[0].threesixty_reports_public ? 'Public' : 'Private'}
          />
          
          {/* <AnalysisRecEditDialog current360Id={this.props.current360Id}/> */}
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

ThreesixtyOralReportExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(ThreesixtyOralReportExpansionPanel));