import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUser from './EditUser/EditUser'

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
  editUserOpen: false,
  editPasswordOpen: false,
  requestAccessOpen: false
 };

  // handles clicking of the user "edit" button. Opens a dialog window.
 handleUserClickOpen = () => {
  this.setState({
    ...this.state,
    editUserOpen: true
  })
 }

 handlePasswordClickOpen = () => {
  this.setState({
    ...this.state,
    editPasswordOpen: true
  })
 }

 handleAccessClickOpen = () => {
  this.setState({
    ...this.state,
    requestAccessOpen: true
  })
 }

  // handles clicking of the "save" or "cancel" button from the dailog window 
  // and closes the dialog window.
  handleUserClickClose = () => {
  this.setState({
    ...this.state,
    editUserOpen: false
  })
  } // end handleClickClose

  handlePasswordClickClose = () => {
  this.setState({
    ...this.state,
    editPasswordOpen: false
  })
  }

  handleAccessClickClose = () => {
  this.setState({
    ...this.state,
    requestAccessOpen: false
  })
  }

  handleSave = () => {
  this.handleClickClose();
  }

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>User Profile</Typography>
         <div className={classes.div}>
         <Button className={classes.editButton} onClick={this.handleUserClickOpen} variant="contained">Edit</Button>
          <Typography variant="body1" className={classes.text}>First Name: Jane</Typography>
          <Typography variant="body1" className={classes.text}>Last Name: Doe</Typography>
          <Typography variant="body1" className={classes.text}>Email: janedoe@mail.com</Typography>
          <Button 
            onClick={this.handlePasswordClickOpen}
            className={classes.button}
            variant= "contained"
            >Change Password</Button>
          </div>
       <br />
         <div className={classes.div}>
          <Typography className={classes.text}>
            Your Accessable 360s
            <Typography className={classes.text}>360 #1<Button className={classes.viewButton} variant="contained">View</Button></Typography>
            <Typography className={classes.text}>360 #2<Button className={classes.viewButton} variant="contained">View</Button></Typography>
          </Typography>
          <Button
            onClick={this.handleAccessClickOpen} 
            className={classes.button} 
            variant= "contained"
            >Request 360 Access</Button>
          </div>
       <br />
       <Dialog
         open={this.state.editUserOpen}
         onClose={this.handleUserClickClose}
         aria-labelledby="edit-user-info"
         scroll="paper"
         width= '400'
         maxWidth="lg"
       >
       <DialogTitle id="edit-user-info" className={classes.header} variant="h4">Edit User Info</DialogTitle>
         <DialogContent>
           <DialogContentText className={classes.header}>
             Remember to save changes before closing this edit dialog.
           </DialogContentText>
         <div className={classes.div}>
            <TextField
                label="First Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="firstName"
                placeholder="First Name"
              />
              <br />
              <TextField
                label="Last Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="lastName"
                placeholder="Last Name"
              />
            <br />
            <TextField
                label="Email"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="email"
                placeholder="Email"
              />
            <br />
          </div>
          </DialogContent>
          <DialogActions>
           <Button onClick={this.handleUserClickClose} color="primary">
             Cancel
           </Button>
           <Button onClick={this.handleSave} color="primary">
             Save Changes
           </Button>
         </DialogActions>
          </Dialog>
       <br />
       <Dialog
         open={this.state.editPasswordOpen}
         onClose={this.handlePasswordClickClose}
         aria-labelledby="edit-password"
         scroll="paper"
         width= '400'
         maxWidth="lg"
       >
       <DialogTitle id="edit-password" className={classes.header}>Change Password</DialogTitle>
         <DialogContent>
           <DialogContentText className={classes.header}>
             Remember to save changes before closing this edit dialog.
           </DialogContentText>
         <div className={classes.div}>
            <TextField
                label="Old Password"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="oldPassword"
                placeholder="Old Password"
              />
              <br />
              <TextField
                label="New Password"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="newPassword"
                placeholder="New Password"
              />
            <br />
            <TextField
                label="Confirm New Password"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="confirmNewPassword"
                placeholder="Confirm New Password"
              />
            <br />
          </div>
          </DialogContent>
          <DialogActions>
           <Button onClick={this.handlePasswordClickClose} color="primary">
             Cancel
           </Button>
           <Button onClick={this.handleSave} color="primary">
             Save Changes
           </Button>
         </DialogActions>
          </Dialog>
       <br />
       <Dialog
         open={this.state.requestAccessOpen}
         onClose={this.handleAccessClickClose}
         aria-labelledby="request-access"
         scroll="paper"
         width= '400'
         maxWidth="lg"
       >
       <DialogTitle id="edit-password" className={classes.header}>Request IZI Access</DialogTitle>
         <DialogContent>
           <DialogContentText className={classes.header}>
             Remember to save changes before closing this edit dialog.
           </DialogContentText>
         <div className={classes.div}>
            <TextField
                label="IZI Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="iziName"
                placeholder="IZI Name"
              />
              <Typography variant="h5" className={classes.header}>OR</Typography>
              {/* <br /> */}
              <TextField
              label="Date of IZI"
              className={classes.textField}
              type="date"
              margin="dense"
              variant="outlined"
              name ="date"
                />
            <br />
          </div>
          </DialogContent>
          <DialogActions>
           <Button onClick={this.handleAccessClickClose} color="primary">
             Cancel
           </Button>
           <Button onClick={this.handleSave} color="primary">
             Save Changes
           </Button>
         </DialogActions>
          </Dialog>
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