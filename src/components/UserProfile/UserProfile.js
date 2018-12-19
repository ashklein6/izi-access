import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUser from './EditUser/EditUser';
import EditPassword from './EditUser/EditPassword';
import RequestAccess from './EditUser/RequestAccess';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  
  text: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    borderRadius: 10
  },

  header: {
    textAlign: 'center',
    marginBottom: 25
  },

  viewButton: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 200,
    float: 'right'
  },

  div: {
    textAlign: 'left',
    width: 400,
    margin: 'auto',
    padding: 20,
    fontSize: 18,
    background: '#eceff0',
    borderRadius: 10
  }
};

class UserProfile extends Component {

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography 
        variant="h2" 
        className={classes.header}
        >User Profile</Typography>
      <div className={classes.div}>
         <EditUser />
            <Typography 
              variant="body1" 
              className={classes.text}
              >First Name: Jane</Typography>
          <Typography 
            variant="body1" 
            className={classes.text}
            >Last Name: Doe</Typography>
          <Typography 
            variant="body1" 
            className={classes.text}
            >Email: janedoe@mail.com</Typography>
          <EditPassword />
        </div>
        <br />
        <div className={classes.div}>
          <Typography 
            className={classes.text}>
            Your Accessable 360s
              <Typography 
                className={classes.text}>360 #1
                <Button className={classes.viewButton} 
                variant="contained">View</Button>
              </Typography>
            <Typography 
              className={classes.text}>360 #2
              <Button className={classes.viewButton} 
              variant="contained">View</Button>
            </Typography>
          </Typography>
          <RequestAccess />
          </div>
     </div>
   );
 }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(UserProfile));