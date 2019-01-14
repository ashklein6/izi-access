import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Import loading dialog
import LoadingDialog from './EditDialogs/LoadingDialog';

// Import Expansion Panels for each subsection
import ThreesixtyInformationExpansionPanel from './ExpansionPanels/ThreesixtyInformationExpansionPanel';
import GoalsAssessmentExpansionPanel from './ExpansionPanels/GoalAssessmentsExpansionPanel';
import DashboardExpansionPanel from './ExpansionPanels/DashboardExpansionPanel';
import AnalysisRecExpansionPanel from './ExpansionPanels/AnalysisRecExpansionPanel';

class Generate360 extends Component {

 state = {
  current360Id: 1,
 };

 render() {
   const { classes } = this.props;

   return (
     <div className={classes.div}>
       <Typography variant="h2" className={classes.header}>Generate360</Typography>
       <ThreesixtyInformationExpansionPanel current360Id={this.state.current360Id}/>
       <GoalsAssessmentExpansionPanel current360Id={this.state.current360Id}/>
       <DashboardExpansionPanel current360Id={this.state.current360Id}/>
       <AnalysisRecExpansionPanel current360Id={this.state.current360Id}/>
       <LoadingDialog current360Id={this.state.current360Id}/>
     </div>
   );
 }
};

const styles = {
  div: {
    padding: 50
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Generate360));