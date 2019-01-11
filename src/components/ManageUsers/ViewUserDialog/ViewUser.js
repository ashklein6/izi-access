import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

class ViewUser extends Component {

  state = {
    open: false, // true for dev purposes
    edit: false, // true should show view user, false should show edit user
    firstname: '',
    lastname: '',
    email: '',
    access_id: 0, 
    notes: '',
    id: 0
  };

  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  };

  // handles clicking of the "edit" button. Opens a dialog window.
  handleClickOpen = () => {
    this.setState({
      ...this.state,
      open: true,
    })
  }; // end handleClickOpen

  // handles clicking of the "save" or "cancel" button from the dailog window 
  // and closes the dialog window.
  handleClickClose = () => {
    this.setState({
      ...this.state,
      open: false,
      edit: false
    })
  }; // end handleClickClose

  editBtn = () => {
    this.setState({ 
      open: true,
      edit: true,
      firstname: this.props.user.firstname,
      lastname: this.props.user.lastname,
      email: this.props.user.email,
      access_id: this.props.user.access_id,
      notes: this.props.user.notes,
      id: this.props.user.id
    })
  };

  removeAccess = (id) => {
    this.props.dispatch({type: 'REMOVE_360_ACCESS', payload: id});
    
  };

  endEdit = () => {
    this.setState({
      open: true,
      edit: false,
      firstname: '',
      lastname: '',
      email: '',
      access_id: 0,
      notes: '',
      id: 0
    })
  };

  saveChanges = () => {
    this.props.dispatch({ type: 'EDIT_USER_INFO', payload: this.state });
    this.endEdit();
  };

  render() {
   const { classes } = this.props;
   const user = this.props.user;
   const level = this.props.reduxState.userAccessLevel;

   return (
    <React.Fragment>
    <Button size="small" variant="contained" onClick={this.handleClickOpen}>View</Button>
    <Dialog
      open={this.state.open}
      onClose={this.handleClickClose}
      aria-labelledby="goal-assessment-edit-dialog"
      scroll="paper"
      fullWidth
      maxWidth="sm"
      classes={{paper: classes.paper}}
    >
    {!this.state.edit ? (    
    <React.Fragment>
      <DialogTitle className={classes.dialogTitle} id="goal-assessment-edit-dialog">View User</DialogTitle>
      <DialogContent>
      <Button className={classes.editBtn} size="small" variant="contained" onClick={this.editBtn}>Edit</Button>
          <InputLabel>First Name:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.firstname}</Typography>
          <br />
          <InputLabel>Last Name:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.lastname}</Typography>
          <br />
          <InputLabel>Email:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.email}</Typography>
          <br />
          <InputLabel>Access Level:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.access_type}</Typography>
          <br />
          <InputLabel>360 Access:</InputLabel>
          <br />
            <ul>
              <li>
                {user.threesixty ? (
                <Typography className={classes.userInfo} variant="subheading">{user.threesixty}</Typography>
                ) : (
                <Typography className={classes.userInfo} variant="subheading">None</Typography>
                )}
              </li>
            </ul>
          <InputLabel>Notes:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.notes}</Typography>
          <br />
      </DialogContent>
    </React.Fragment>
    ) : (
    <React.Fragment>
      <DialogTitle className={classes.dialogTitle} id="goal-assessment-edit-dialog">Edit User</DialogTitle>
      <DialogContent>
          <InputLabel>First Name:</InputLabel>
          <Input 
            className={classes.userInfoEdit} 
            placeholder={user.firstname}
            onChange={this.handleChange}
            name="firstname"
          />
          <br />
          <InputLabel>Last Name:</InputLabel>
          <Input 
            className={classes.userInfoEdit} 
            placeholder={user.lastname}
            onChange={this.handleChange}
            name="lastname"
          />
          <br />
          <InputLabel>Email:</InputLabel>
          <Input 
            className={classes.userInfoEdit} 
            placeholder={user.email}
            onChange={this.handleChange}
            name="email"
          />
          <br />
          <InputLabel>Access Level:</InputLabel>
          <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.access_id}
              onChange={this.handleChange}
              name="access_id"
              InputProps={{
                startAdornment: <InputAdornment position="start">Level</InputAdornment>,
              }}
            >
              {level.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.access_type}
                </MenuItem>
              ))}
          </TextField>
          <br />
          <InputLabel>360 Access:</InputLabel>
          <br />
            <ul>
              <li>
                {user.threesixty ? (
                <div>
                  <Typography className={classes.userInfo} variant="subheading">{user.threesixty}</Typography>
                  <Tooltip title="Remove Access" placement="right">
                    <IconButton className={classes.removeAccess} onClick={() => this.removeAccess(user.connected_360_id)}>
                      <Cancel/>
                    </IconButton>
                  </Tooltip>
                </div>
                ) : (
                <Typography className={classes.userInfo} variant="subheading">None</Typography>
                )}
              </li>
            </ul>
          <InputLabel>Notes:</InputLabel>
          <br />
          <TextField 
            className={classes.notes} 
            placeholder={user.notes}
            onChange={this.handleChange}
            name="notes"
            multiline
            fullWidth
            margin="normal"
          />
          <br />
        <Button size="small" variant="contained" onClick={this.endEdit}>Cancel</Button>
        <Button size="small" variant="contained" onClick={this.saveChanges}>Save Changes</Button>
      </DialogContent>
    </React.Fragment>
    )}
    </Dialog>
    </React.Fragment>
   );
 }
};

const styles = {
  div: {
    padding: 50
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  },
  paper: {
    height: 'calc(75% - 96px)'
  },
  dialogTitle: {
    textAlign: 'center'
  },
  userInfo: {
    display: 'inline',
    marginLeft: '15px'
  },
  editBtn: {
    float: 'right'
  },
  userInfoEdit: {
    margin: '0px 0px 15px 15px'
  },
  removeAccess: {
    marginLeft: 10
  },
  notes: {
    margin: 'auto',
    paddingBottom: 25,
    width: '90%',
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewUser));