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


// Hard coded data
const user = [
  { id: 1,
    firstname: 'Jon', 
    lastname: 'Doe', 
    email: 'john_doe@email.com',
    level: 'something',
    notes: 'This is where you can enter notes about the user.',
  }
]

class ViewUser extends Component {

state = {
  open: true, // true for dev purposes
  edit: false, // true should show view user, false should show edit user
  firstname: '',
  lastname: '',
  email: '',
  level: '', // access_id???
  notes: ''
};

handleChange = (event) => {
  console.log('in handleChange');
  this.setState({
    ...this.state,
    [event.target.name]: event.target.value,
  })
}

// handles clicking of the "edit" button. Opens a dialog window.
handleClickOpen = () => {
  // this.props.dispatch({ type: 'FETCH_360_SECTION', payload: {section: 'goalsAssessment', current360Id: 1} });
  this.setState({
    ...this.state,
    open: true,
  })
} // end handleClickOpen

// handles clicking of the "save" or "cancel" button from the dailog window 
// and closes the dialog window.
handleClickClose = () => {
  this.setState({
    ...this.state,
    open: false,
    edit: false
  })
} // end handleClickClose

handleSave = () => {
  this.handleClickClose();
}


editBtn = () => {
  this.setState({ edit: !this.state.edit})
}

// 
removeAccess = () => {
  console.log('Remove Access');
  
}

 loadCurrentData = () => {
  this.setState({
     ...this.state,
     rows: this.props.reduxState.current360.goalsAssessment,
     updating: false
  })
  this.props.dispatch({ type: 'CURRENT_360_SECTION_UPDATE_COMPLETE' });
 }


 render() {
   const { classes } = this.props;

   // Check if the section information updated since this site was last loaded.
   // A section is re-downloaded each time the edit dialog is opened.
   if (this.props.reduxState.current360.updateNeeded === true) {
     this.loadCurrentData();
   }

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
    {this.state.edit ? (    
    <React.Fragment>
      <DialogTitle className={classes.dialogTitle} id="goal-assessment-edit-dialog">View User</DialogTitle>
      {user.map( user =>
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
          <InputLabel>Level:</InputLabel>
          <Typography className={classes.userInfo} variant="subheading">{user.level}</Typography>
          <br />
          <InputLabel>360 Access:</InputLabel>
          <br />
            <ul>
              <li>
                <Typography className={classes.userInfo} variant="subheading">360 They Have access to</Typography>
              </li>
            </ul>
          <InputLabel>Notes:</InputLabel>
          <Typography variant="subheading">{user.notes}</Typography>
          <br />
      </DialogContent>)}
    </React.Fragment>
    ) : (
    <React.Fragment>
      <DialogTitle className={classes.dialogTitle} id="goal-assessment-edit-dialog">Edit User</DialogTitle>
      {user.map( user =>
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
          <InputLabel>Level:</InputLabel>
          <Input 
            className={classes.userInfoEdit} 
            placeholder={user.level}
            onChange={this.handleChange}
            name="level"
          />
          <br />
          <InputLabel>360 Access:</InputLabel>
          <br />
            <ul>
              <li>
                <Typography className={classes.userInfo} variant="subheading">360 They Have access to</Typography>
                <Tooltip title="Remove Access" placement="right">
                  <IconButton className={classes.removeAccess} onClick={this.removeAccess}>
                    <Cancel/>
                  </IconButton>
                </Tooltip>
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
        <Button size="small" variant="contained" onClick={this.cancelEdit}>Cancel</Button>
        <Button size="small" variant="contained">Save Changes</Button>
      </DialogContent>)}
      {JSON.stringify(this.state)}
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