import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = {
    
    textField: {
      width: 400,
      marginBottom: 15
    },
    
    header: {
      textAlign: 'center',
      marginBottom: 25
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
    }
  };


class EditPassword extends Component {

state = {
    open: false
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
  this.handleClickClose();
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
              <Button onClick={this.handleClickClose} color="primary">
                Cancel
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

const mapReduxStateToProps = (reduxState) => ({
    reduxState
   });
export default connect(mapReduxStateToProps)(withStyles(styles)(EditPassword));