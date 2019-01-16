import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class EditUser extends Component {

state = {
    open: false,
    firstName: '',
    lastName: '',
    email: '',
    id: 0
};

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
};

handleClickOpen = () => {
    this.setState({
        open: true,
        firstName: this.props.reduxState.user.firstname,
        lastName: this.props.reduxState.user.lastname,
        email: this.props.reduxState.user.email,
        id: this.props.reduxState.user.id
    })
};

handleClickClose = () => {
    this.setState({
        ...this.state,
        open: false
    })
}

handleSave = () => {
    this.handleClickClose();
    this.props.dispatch({type: 'EDIT_CURRENT_USER_INFO', payload: this.state});
}

render () {
    const { classes } = this.props;

    return (
        <div>
            <Button className={classes.editButton} onClick={this.handleClickOpen} variant="contained">Edit</Button>
        <Dialog
         open={this.state.open}
         onClose={this.handleClickClose}
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
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                type="text"
                name="firstName"
                value={this.state.firstName}
              />
              <br />
              <TextField
                label="Last Name"
                className={classes.textField}
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                type="text"
                name="lastName"
                value={this.state.lastName}
              />
            <br />
            <TextField
                label="Email"
                className={classes.textField}
                onChange={this.handleChange}
                margin="dense"
                variant="outlined"
                type="text"
                name="email"
                value={this.state.email}
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
    )}
}


const styles = {
    textField: {
      width: 400,
      marginBottom: 15,
      backgroundColor: 'white'
    },
    header: {
      textAlign: 'center',
      marginBottom: 25
    },
    editButton: {
      marginTop: 2,
      marginRight: 10,
      float: 'right',
    },
    div: {
      textAlign: 'left',
      width: 400,
      margin: 'auto',
      padding: 20,
      fontSize: 18,
      background: colors.lightGrey,
      borderRadius: 10
    }
  };

const mapReduxStateToProps = (reduxState) => ({
    reduxState
   });
export default connect(mapReduxStateToProps)(withStyles(styles)(EditUser));