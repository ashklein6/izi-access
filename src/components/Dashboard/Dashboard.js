import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Forward from '@material-ui/icons/Forward';
import PriorityHigh from '@material-ui/icons/PriorityHigh';

class Dashboard extends Component {

 state = {
  pending: false
 };

 handleCreate = () => {
  this.props.history.push('/create360')
 }

 handleView = () => {
  this.props.history.push('/manage360s')
 }

 handleUsers = () => {
   this.props.history.push('/manageUsers')
 }

 componentDidMount() {
   axios.get('/allUsers/checkRequests')
   .then((response) => {
     if(response.data){
       this.setState({
         pending: true
       })
     } else {
       this.setState({
         pending: false
       })
     }
   })
 }

 render() {
   const { classes } = this.props;

   return (
     <div className={classes.div}>
      <Typography variant="h3" className={classes.header}>Admin Dashboard</Typography>
      <ButtonBase className={classes.button} onClick={this.handleCreate}>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid className={classes.btnText} item xs={8}>
              <Typography variant="h6">CREATE NEW 360</Typography>
            </Grid>
            <Grid className={classes.btnGrid} item xs={4}>
              <Avatar className={classes.root}>
                <Forward />
              </Avatar>
            </Grid>
          </Grid>
        </Paper>
      </ButtonBase>

      <ButtonBase className={classes.button} onClick={this.handleView}>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid className={classes.btnText} item xs={8}>
              <Typography variant="h6">360 MANAGER</Typography>
            </Grid>
            <Grid className={classes.btnGrid} item xs={4}>
              <Avatar className={classes.root}>
                <Forward />
              </Avatar>
            </Grid>
          </Grid>
        </Paper>
      </ButtonBase>

      <ButtonBase className={classes.button} onClick={this.handleUsers}>
        <Paper className={classes.paper}>
          <Grid container spacing={0}>
            <Grid className={classes.btnText} item xs={8}>
              <Typography variant="h6">MANAGE USERS</Typography>
            </Grid>
            <Grid className={classes.btnGrid} item xs={2}>
            { this.state.pending ?
              <Avatar className={classes.root}>
                <PriorityHigh />
              </Avatar> : null}
            </Grid>
            <Grid className={classes.btnGrid} item xs={2}>
              <Avatar className={classes.root}>
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
    display: 'flex',
    width: 380,
    padding: 5,
    backgroundColor: '#ddd',
  },
  button: {
    marginBottom: 25
  },
  btnText: {
    textAlign: 'left',
    paddingLeft: 20,
    margin: 'auto 0px',
  },
  btnGrid: {
    margin: 0,
    paddingRight: 10
  },
  root: {
    marginLeft: 'auto',
  },
  header: {
    marginBottom: 25
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Dashboard));