import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditPassword extends Component {

state = {
  open: false,
  noMatch: false,
  oldPassword: '',
  newPassword: '',
  confirmNewPassword: '',
  passwordChanged: false,
  changeError: false,
};

handleClickOpen = () => {
    this.setState({
        ...this.state,
        open: true
    })
}

handleClickClose = () => {
    this.setState({
      ...this.state,
      open: false
    })
}

handleSave = () => {
  if(this.state.newPassword !== this.state.confirmNewPassword){
    this.setState({
      ...this.state,
      noMatch: true
    })
  } else {
    axios.put('/resetPassword', {
      oldPassword: this.state.oldPassword,
      newPassword: this.state.newPassword,
      username: this.props.reduxState.user.username,
    }).then(response => {
      if(response.data.message === 'Password change confirmed') {
        this.setState({
          ...this.state,
          changeError: false,
          passwordChanged: true,
          noMatch: false,
        })
      } else if(response.data.message === 'Cannot verify credentials') {
        this.setState({
          ...this.state,
          changeError: true,
          passwordChanged: false,
          noMatch: false,
        })
      }
    }).catch((error) => {
      console.log(error);
    })
  }
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

render(){
    const { classes } = this.props;

    return(
        <div>
            <Button 
            onClick={this.handleClickOpen}
            className={classes.button}
            variant= "contained"
            >Change Password</Button>
        <Dialog
         open={this.state.open}
         onClose={this.handleClickClose}
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
                type="password"
                name="oldPassword"
                placeholder="Old Password"
                value={this.state.oldPassword}
                onChange={this.handleChange}
              />
              <br />
              <TextField
                label="New Password"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={this.state.newPassword}
                onChange={this.handleChange}
              />
            <br />
            <TextField
                label="Confirm New Password"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="password"
                name="confirmNewPassword"
                placeholder="Confirm New Password"
                value={this.state.confirmNewPassword}
                onChange={this.handleChange}
              />
            <br />
          </div>
          {this.state.noMatch &&
           <DialogContentText className={classes.feedback}>
             New password does not match.
           </DialogContentText>
           }
           {this.state.changeError &&
           <DialogContentText className={classes.feedback}>
             Old password unable to be confirmed, please try again.
           </DialogContentText>
           }
           {this.state.passwordChanged &&
           <DialogContentText className={classes.feedback}>
             Password has successfully been changed.
           </DialogContentText>
           }
          </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClickClose} color="primary">
                Close
              </Button>
              <Button onClick={this.handleSave} color="primary">
                Save Changes
              </Button>
          </DialogActions>
          </Dialog>
        </div>
    )
  }
}

const styles = {
  textField: {
    width: 400,
    marginBottom: 15,
    backgroundColor: '#fff'
  },
  header: {
    textAlign: 'center',
    marginBottom: 25,
  },
  button: {
    width: 200,
    marginTop: 15,
  },
  div: {
    textAlign: 'left',
    width: 400,
    margin: 'auto',
    padding: 20,
    fontSize: 18,
    background: '#eceff0',
    borderRadius: 10
  },
  feedback: {
    textAlign: 'center',
    marginBottom: 25,
    color: 'red',
  },
};

const mapReduxStateToProps = (reduxState) => ({
    reduxState
   });
export default connect(mapReduxStateToProps)(withStyles(styles)(EditPassword));