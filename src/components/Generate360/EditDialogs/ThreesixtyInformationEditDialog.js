import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

class ThreesixtyInformationEditDialog extends Component {

 state = {
   open: false,
   updating: false,
   name: this.props.reduxState.current360.info[0].name,
   date: this.props.reduxState.current360.info[0].date,
   location: this.props.reduxState.current360.info[0].location,
   category_id: this.props.reduxState.current360.info[0].category_id,
   client: this.props.reduxState.current360.info[0].client,
   description: this.props.reduxState.current360.info[0].description,
 };

 // Update the rows array when a textbox is typed in.
 handleChangeFor= (event) => {
  event.preventDefault();

  console.log('event:', event);

  this.setState({
    [event.target.name]: event.target.value,
    // set flag that this row has been updated so that it can be updated in database upon submittal 
    updated: true
  })
 } // end handleChangeFor

 // handles clicking of the "edit" button. Opens a dialog window.
 handleClickOpen = () => {
  this.props.dispatch({ type: 'FETCH_360_SECTION', payload: {section: 'info', current360Id: this.props.current360Id} });
  this.setState({
    ...this.state,
    open: true,
    updating: true
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

 // dispatches an action to update the database with the new values and 
 // calls handleClickClose.
 handleSave = () => {
  console.log('in handleSave');
  this.props.dispatch({ type: 'EDIT_360', payload: {section: 'info', current360Id: this.props.current360Id, data: this.state} })
  this.handleClickClose();
 } // end handleSave

 // called when this.props.reduxState.current360.updateNeeded.[section] is true (set true
 // after the section is updated), this runs to copy the section into local state.
 loadCurrentData = () => {

  // Create blank object to hold information
  let newState = {};

  // Save current state for open
  newState.open = this.state.open;
  // Save values from redux state
  newState.name = this.props.reduxState.current360.info[0].name;
  newState.date = moment(this.props.reduxState.current360.info[0].date).format('YYYY-MM-DD');
  newState.location = this.props.reduxState.current360.info[0].location;
  newState.category_id = this.props.reduxState.current360.info[0].category_id;
  newState.client = this.props.reduxState.current360.info[0].client;
  newState.description = this.props.reduxState.current360.info[0].description;
  // Set updating status to false
  newState.updating = false;

  // Set state to newState object
  this.setState( newState );

  // Dispatch action to indicate the update has been completed
  this.props.dispatch({ type: 'CURRENT_360_SECTION_UPDATE_COMPLETE', payload: {section: 'info'} });

 } // end loadCurrentData

 render() {
   const { classes } = this.props;

   console.log(this.state);

   // Check if the section information updated since this site was last loaded.
   // A section is re-downloaded each time the edit dialog is opened.
   if (this.props.reduxState.current360.updateNeeded.info === true) {
     this.loadCurrentData();
   }

   return (
     <React.Fragment>
      <Button size="small" color="primary" onClick={this.handleClickOpen}>Edit</Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClickClose}
        aria-labelledby="info-edit-dialog"
        scroll="paper"
        fullWidth
        maxWidth="lg"
        classes={{paper: classes.paper}}
      >
      {/* Conditionally render a loading message until data is loaded into local state */}
      {(this.state.updating === true) ? 
      <React.Fragment>
        <DialogTitle id="info-edit-dialog">Edit 360 Information</DialogTitle>
        <DialogContent>
          <DialogContentText>
            New information is currently loading...
          </DialogContentText>
        </DialogContent>
      </React.Fragment>
        :
        <React.Fragment>
          <DialogTitle id="info-edit-dialog">Edit 360 Information</DialogTitle>
          <DialogContent id="info-edit-dialog-content" ref={(el) => { this.scroll = el; }}>
            <DialogContentText>
              Remember to save changes before closing this edit dialog.
            </DialogContentText>
            <TextField
              // Create focus on the first text box of the page:
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              variant="outlined"
              value={this.state.name}
              onChange={(event) => this.handleChangeFor(event)}
              className={classes.input}
              fullWidth
              multiline
            />
            <TextField
              // Create focus on the first text box of the page:
              autoFocus
              margin="dense"
              id="client"
              name="client"
              label="Client"
              type="text"
              variant="outlined"
              value={this.state.client}
              onChange={(event) => this.handleChangeFor(event)}
              className={classes.input}
              fullWidth
              multiline
            />
            <TextField
              // Create focus on the first text box of the page:
              autoFocus
              margin="dense"
              id="date"
              name="date"
              label="Date"
              type="date"
              variant="outlined"
              value={this.state.date}
              onChange={(event) => this.handleChangeFor(event)}
              className={classes.input}
              fullWidth
            />
            <TextField
              // Create focus on the first text box of the page:
              autoFocus
              margin="dense"
              id="location"
              name="location"
              label="Location"
              type="text"
              variant="outlined"
              value={this.state.location}
              onChange={(event) => this.handleChangeFor(event)}
              className={classes.input}
              fullWidth
              multiline
            />
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
              <InputLabel
                ref={ref => {
                  this.InputLabelRef = ref;
                }}
                htmlFor="category-id"
              >
                Category
              </InputLabel>
              <Select
                value={this.state.category_id}
                onChange={this.handleChangeFor}
                input={
                  <OutlinedInput
                    labelWidth={65}
                    notched
                    name="category_id"
                    id="category-id"
                  />
                }
              >
                {this.props.reduxState.iziCategories.map(category => (
                  <MenuItem key={category.id} value={category.id}>{category.category}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              // Create focus on the first text box of the page:
              autoFocus
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              variant="outlined"
              value={this.state.description}
              onChange={(event) => this.handleChangeFor(event)}
              className={classes.input}
              fullWidth
              multiline
            />

          </DialogContent>
          <DialogActions className={classes.spaceBetween}>
            <div>
            </div>
            <div>
              <Button onClick={this.handleClickClose} color="primary">
                Cancel
              </Button>
              <Button variant="contained" onClick={this.handleSave} color="primary">
                Save Changes
              </Button>
            </div>
          </DialogActions>
        </React.Fragment>
      }
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
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ThreesixtyInformationEditDialog));