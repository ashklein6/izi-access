import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Dashboard extends Component {

 state = {

 };

 handleCreate = () => {
  this.props.history.push('/generate360')
 }

 handleView = () => {
  this.props.history.push('/manage360s')
 }

 handleUsers = () => {
   this.props.history.push('/manageUsers')
 }

 render() {
   const { classes } = this.props;

   return (
     <div className={classes.div}>
      <Typography variant="h2" className={classes.header}>Admin Dashboard</Typography>
      <Button 
        variant="contained" 
        style={{width: 400, height: 50, margin: 12, fontSize: 20}} 
        onClick={this.handleCreate}>Create New BBE</Button>
      <Button 
        variant="contained" 
        style={{width: 400, height: 50, margin: 12, fontSize: 20}} 
        onClick={this.handleView}>View and Manage BBE's</Button>
      <Button 
        variant="contained" 
        style={{width: 400, height: 50, margin: 12, fontSize: 20}} 
        onClick={this.handleUsers}>Manage Users</Button>
     </div>
   );
 }
};

const styles = {
  div: {
    width: 600,
    justifyContent: 'center',
    margin: 'auto',
    textAlign: 'center',
    padding: 20
 }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Dashboard));