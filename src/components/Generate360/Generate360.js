import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

// Import loading dialog
import LoadingDialog from './EditDialogs/LoadingDialog';

// Import Expansion Panels for each subsection
import ThreesixtyInformationExpansionPanel from './ExpansionPanels/ThreesixtyInformationExpansionPanel';
import GoalsAssessmentExpansionPanel from './ExpansionPanels/GoalAssessmentsExpansionPanel';
import DashboardExpansionPanel from './ExpansionPanels/DashboardExpansionPanel';
import ThreeSixtyEventOverviewExpansionPanel from './ExpansionPanels/ThreesixtyEventOverviewExpansionPanel';
import ThreesixtyMindstormExpansionPanel from './ExpansionPanels/ThreesixtyMindstormExpansionPanel';
import ThreesixtyOralReportExpansionPanel from './ExpansionPanels/ThreesixtyOralReportExpansionPanel';
import ThreesixtyFreeformExpansionPanel from './ExpansionPanels/ThreesixtyFreeformExpansionPanel';
import ThreesixtyCircleShareInExpansionPanel from './ExpansionPanels/ThreesixtyCircleShareInExpansionPanel';
import AnalysisRecExpansionPanel from './ExpansionPanels/AnalysisRecExpansionPanel';
import DemographicDataExpansionPanel from './ExpansionPanels/DemographicDataExpansionPanel';
import FreeformExpansionPanel from './ExpansionPanels/FreeformExpansionPanel';
import ClientAccessExpansionPanel from './ExpansionPanels/ClientAccessExpansionPanel';

class Generate360 extends Component {

 state = {
  current360Id: this.props.match.params.id
 };

 // navigates to /manage360s
 back = (event) => {
  event.preventDefault();
  this.props.history.push('/manage360s');
  }

 render() {
   const { classes } = this.props;
   console.log('CURRENT 360 ID CURRENT 360 ID CURRENT 360 ID:', this.state.current360Id);
   return (
     <div className={classes.div}>
       <div className={classes.returnButton}>
          <Button
            className={classes.manage360Btn} 
            variant="contained"
            onClick={this.back}
          >
            Return to Home Page
          </Button>
       </div>
       <Typography variant="h2" className={classes.header}>Generate360</Typography>
       <ThreesixtyInformationExpansionPanel current360Id={this.state.current360Id}/>
       <GoalsAssessmentExpansionPanel current360Id={this.state.current360Id}/>
       <DashboardExpansionPanel current360Id={this.state.current360Id}/>
       <ThreeSixtyEventOverviewExpansionPanel current360Id={this.state.current360Id}/>
       <ThreesixtyMindstormExpansionPanel current360Id={this.state.current360Id}/>
       <ThreesixtyOralReportExpansionPanel current360Id={this.state.current360Id}/>
       <ThreesixtyFreeformExpansionPanel current360Id={this.state.current360Id}/>
       <ThreesixtyCircleShareInExpansionPanel current360Id={this.state.current360Id}/>
       <AnalysisRecExpansionPanel current360Id={this.state.current360Id}/>
       <DemographicDataExpansionPanel current360Id={this.state.current360Id}/>
       <FreeformExpansionPanel current360Id={this.state.current360Id}/>
       <ClientAccessExpansionPanel current360Id={this.state.current360Id}/>
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