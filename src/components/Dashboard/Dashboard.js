import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Forward from '@material-ui/icons/Forward';
import PriorityHigh from '@material-ui/icons/PriorityHigh';




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

      <ButtonBase>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid className={classes.btnText} item xs={8}>
              <Typography variant="h6">MANAGE USERS</Typography>
            </Grid>
            <Grid className={classes.btnGrid} item xs={4}>
              <Avatar className={classes.icon}>
                <PriorityHigh />
              </Avatar>
              <Avatar className={classes.icon}>
                <Forward />
              </Avatar>
            </Grid>
          </Grid>
        </Paper>
      </ButtonBase>
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
    padding: 20,
  },
  paper: {
    display: 'inline',
    width: 380,
    padding: 5,
    backgroundColor: '#ddd',
  },
  btnText: {
    textAlign: 'left',
    paddingLeft: 20,
    margin: 'auto 0px'
  },
  btnGrid: {
    display: 'flex',
  },
  icon: {
    margin: 'auto',
  },
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Dashboard));