import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class GoalsAssessmentEditDialog extends Component {

 state = {
   open: false,
   updating: false,
   rows: []
 };

 // Update the rows array when a textbox is typed in.
 handleChangeFor= (event, index) => {
  event.preventDefault();
  // Pull the current values
  let rows = this.state.rows;
  // Isolate the object that contains the updated text
  let objectToChange = rows[index];

  // Update the text within the object
  objectToChange = {
    ...objectToChange,
    [event.target.name]: event.target.value
  }
  // Redefine the object
  rows[index]=objectToChange;

  // Set state to the new values
  this.setState({
    ...this.state,
    rows: rows
  })

 } // end handleChangeFor

 // handles clicking of the "edit" button. Opens a dialog window.
 handleClickOpen = () => {
  this.props.dispatch({ type: 'FETCH_360_SECTION', payload: {section: 'goalsAssessment', current360Id: 1} });
  this.setState({
    ...this.state,
    open: true,
    updating: true
    // rows: this.props.reduxState.current360.goalsAssessment
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
  this.handleClickClose();
 } // end handleSave

 // called when this.props.reduxState.current360.updateNeeded[this section] is true (set true
 // after the section is updated), this runs to copy the section into local state.
 loadCurrentData = () => {
  this.setState({
     ...this.state,
     rows: this.props.reduxState.current360.goalsAssessment,
     updating: false
  })
  this.props.dispatch({ type: 'CURRENT_360_SECTION_UPDATE_COMPLETE' });
 } // end loadCurrentData

 render() {
   const { classes } = this.props;

   // Check if the section information updated since this site was last loaded.
   // A section is re-downloaded each time the edit dialog is opened.
   if (this.props.reduxState.current360.updateNeeded === true) {
     this.loadCurrentData();
   }

   return (
     <React.Fragment>
    <Button size="small" color="primary" onClick={this.handleClickOpen}>Edit</Button>
    <Dialog
      open={this.state.open}
      onClose={this.handleClickClose}
      aria-labelledby="goal-assessment-edit-dialog"
      scroll="paper"
      fullWidth
      maxWidth="lg"
      classes={{paper: classes.paper}}
    >
    {(this.state.updating === true) ? 
    <React.Fragment>
      <DialogTitle id="goal-assessment-edit-dialog">Edit Goals Assessment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          New information is currently loading...
        </DialogContentText>
      </DialogContent>
    </React.Fragment>
      :
      <React.Fragment>
        <DialogTitle id="goal-assessment-edit-dialog">Edit Goals Assessment</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Remember to save changes before closing this edit dialog.
          </DialogContentText>
          {this.state.rows.map( (row,index) => {
            return (
              <div key={row.id} className={classes.inputGroup}>
                <Typography variant="subtitle">Row {index + 1}</Typography>
                <TextField
                  // Create focus on the first text box of the page:
                  {...(index === 0) ? {autoFocus: true} : null}
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  variant="outlined"
                  value={this.state.rows[index].description}
                  onChange={(event) => this.handleChangeFor(event,index)}
                  className={classes.input}
                  fullWidth
                  multiline
                />
                <div className={classes.spaceBetween}>
                  <TextField
                    margin="dense"
                    id="desired"
                    name="desired"
                    label="Desired"
                    type="number"
                    variant="outlined"
                    value={this.state.rows[index].desired}
                    onChange={(event) => this.handleChangeFor(event,index)}
                    className={classes.input}
                  />
                  <TextField
                    margin="dense"
                    id="delivered"
                    name="delivered"
                    label="Delivered"
                    type="number"
                    variant="outlined"
                    value={this.state.rows[index].delivered}
                    onChange={(event) => this.handleChangeFor(event,index)}
                    className={classes.input}
                  />
                  <TextField
                    margin="dense"
                    id="difference"
                    name="difference"
                    label="Difference"
                    type="number"
                    variant="outlined"
                    value={this.state.rows[index].difference}
                    onChange={(event) => this.handleChangeFor(event,index)}
                    className={classes.input}
                  />
                  <TextField
                    margin="dense"
                    id="percent"
                    name="percent"
                    label="Percent"
                    type="number"
                    variant="outlined"
                    value={this.state.rows[index].percent}
                    onChange={(event) => this.handleChangeFor(event,index)}
                    className={classes.input}
                  />
                </div>
                <TextField
                  margin="dense"
                  id="comments"
                  name="comments"
                  label="Comments"
                  type="text"
                  variant="outlined"
                  value={this.state.rows[index].comments}
                  onChange={(event) => this.handleChangeFor(event,index)}
                  className={classes.input}
                  fullWidth
                  multiline
                />
              </div>
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSave} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </React.Fragment>
    }
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
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputGroup: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 5
  },
  paper: {
    height: 'calc(100% - 96px)'
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

export default connect(mapReduxStateToProps)(withStyles(styles)(GoalsAssessmentEditDialog));