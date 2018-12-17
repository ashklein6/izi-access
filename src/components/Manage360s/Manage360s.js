import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

class Manage360s extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>Manage360s</Typography>
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

export default connect(mapReduxStateToProps)(withStyles(styles)(Manage360s));