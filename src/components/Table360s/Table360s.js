import React, { Component } from 'react';
import {connect} from 'react-redux';

// Material-UI
import Typography from '@material-ui/core/Typography';

class Table360 extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>TABLES</Typography>
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

export default connect(mapReduxStateToProps)(withStyles(styles)(Table360));