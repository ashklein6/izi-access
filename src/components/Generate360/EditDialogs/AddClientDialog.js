import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUsers from '../TableTemplate/TableUsers';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

const ranges = [
  {
    value: 'person.firstname',
    label:  'First Name'
  },
  {
    value: 'person.lastname',
    label:  'Last Name'
  },
  {
    value: 'person.email',
    label:  'Email'
  },
  {
    value: 'person.access_id',
    label:  'Access Level'
  }
];

class AddClientDialog extends Component {

 state = {
   open: false,
   searchBy: '',
   level: '',
   sortBy: '',
 };

 addAccess = (person) => {
   console.log('person:', person);
  if (person.access_id >= 4) {
    alert(`Users with Employee and Admin access levels already have access to every 360.`);
  } else if (person.access_id <=2) {
    alert(`Only clients can be given access to a 360. Change this user's access level to client first and then proceed.`);
  } else if (person.access_id === 3) {
    this.props.dispatch({ type: 'ADD_360_ACCESS', payload: {userId: person.id, current360Id: this.props.current360Id} });
    alert(`This user has been given access to this 360.`);
  } else {
    alert(`There has been an error giving this client access.`);
  }
}

  // handles change for inputs
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
 } // end handleClickOpen

 // handles clicking of the "save" or "cancel" button from the dailog window 
 // and closes the dialog window.
 handleClickClose = () => {
  this.setState({
    ...this.state,
    open: false
  })
 } // end handleClickClose

  // handle click of searchIcon button from 'Search by Name or Email' input
  submitSearch = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'FETCH_USERS_SEARCH', payload: this.state});
  };

 render() {
   const { classes } = this.props;
   const level = this.props.reduxState.userAccessLevel;

   return (
     <React.Fragment>
      <Button size="small" color="primary" onClick={this.handleClickOpen}>Add Client</Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClickClose}
        aria-labelledby="info-edit-dialog"
        scroll="paper"
        fullWidth
        maxWidth="lg"
        classes={{paper: classes.paper}}
      >
        <React.Fragment>
          <DialogTitle id="info-edit-dialog">Add Client</DialogTitle>
          <DialogContent id="info-edit-dialog-content" ref={(el) => { this.scroll = el; }}>
            <DialogContentText>
              Give a client access to the protected information of this 360.
            </DialogContentText>
            <form className={classes.form} onSubmit={this.submitSearch}>
          
            <TextField className={classes.searchField} placeholder="Search by Name or Email" type="search" onChange={this.handleChange}
              name="searchBy" value={this.state.searchBy}
              // InputProps={{
              //   endAdornment: 
              //   <InputAdornment position="end">
              //     <IconButton variant="contained" size="small" className={classes.button} onClick={this.submitSearch}>
              //       <SearchIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              //     </IconButton>
              //   </InputAdornment>
              // }}
            />
            
            <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.level}
              onChange={this.handleChange}
              name="level"
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
            <Button variant="contained" onClick={this.submitSearch}>Search</Button>

            <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.sortBy}
              onChange={this.handleChange}
              name="sortBy"
              InputProps={{
                startAdornment: <InputAdornment position="start">Sort</InputAdornment>,
              }}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            </form>
            <TableUsers users={this.props.reduxState.allUsers.allUsers} addAccess={this.addAccess}/>
          </DialogContent>
          <DialogActions className={classes.spaceBetween}>
            <div>
            </div>
            <div>
              <Button onClick={this.handleClickClose} color="primary">
                Exit
              </Button>
            </div>
          </DialogActions>
        </React.Fragment>
      </Dialog>
    </React.Fragment>
   );
 }
};

const styles = {
  formControl: {
    marginTop: 8,
    marginBottom: 4
  },
  paper: {
    minHeight: '50%'
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  textField: {
    width: 150,
    margin: '0px 15px 25px 15px'
  },
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AddClientDialog));