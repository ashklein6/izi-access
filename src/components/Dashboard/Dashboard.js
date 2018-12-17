import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Dashboard extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>Dashboard</Typography>
     </div>
   );
 }
};

const styles = {
 header: {

 }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Dashboard));