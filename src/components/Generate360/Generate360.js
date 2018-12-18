import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Import Expansion Panels for each subsection
import GoalsAssessmentExpansionPanel from './ExpansionPanels/GoalAssessmentsExpansionPanel';

class Generate360 extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div className={classes.div}>
       <Typography variant="h2" className={classes.header}>Generate360</Typography>
       <GoalsAssessmentExpansionPanel />
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