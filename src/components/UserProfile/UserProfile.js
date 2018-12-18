import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    margin: 25
  },
  textField: {
    width: 400,
    marginBottom: 15
  },
  text: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    borderRadius: 10
  },
  form: {
    textAlign: 'center',
    padding: 50
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  },
  button: {
    width: 200,
    marginTop: 15,
  },
  editButton: {
    marginTop: 2,
    marginRight: 10,
    float: 'right',
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

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>User Profile</Typography>
       <form>
         <div className={classes.div}>
         <Button className={classes.editButton} variant="contained">Edit</Button>
          <Typography variant="body1" className={classes.text}>First Name: Jane</Typography>
          <Typography variant="body1" className={classes.text}>Last Name: Doe</Typography>
          <Typography variant="body1" className={classes.text}>Email: janedoe@mail.com</Typography>
          <Button 
            className={classes.button} 
            variant= "contained"
            >Change Password</Button>
          </div>
       </form>
       <br />
       <form>
         <div className={classes.div}>
          <Typography className={classes.text}>
            Your Accessable 360s
            <Typography className={classes.text}>360 #1<Button className={classes.viewButton} variant="contained">View</Button></Typography>
            <Typography className={classes.text}>360 #2<Button className={classes.viewButton} variant="contained">View</Button></Typography>
          </Typography>
          <Button 
            className={classes.button} 
            variant= "contained"
            >Request 360 Access</Button>
          </div>
       </form>
     </div>
   );
 }
};

// const styles = {
//  header: {

//  }
// };

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(UserProfile));