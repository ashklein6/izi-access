import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';

import GoalsAssessmentEditComponent from './Supplements/GoalsAssessmentsEditComponent';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
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
 };

 deleteRow = (id) => {
   console.log('delete row', id);
 }

 // Update the rows array when a textbox is typed in.
 handleChangeFor= (event, id) => {
  event.preventDefault();

  console.log('event:', event, 'id:', id);

  this.setState({
    [id]: {
      ...this.state[id],
      [event.target.name]: event.target.value 
    }
  })
 } // end handleChangeFor

 // handles clicking of the "edit" button. Opens a dialog window.
 handleClickOpen = () => {
  this.props.dispatch({ type: 'FETCH_360_SECTION', payload: {section: 'goalsAssessment', current360Id: 1} });
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
  this.props.dispatch({ type: 'EDIT_360', payload: {section: 'goalsAssessment', data: this.state} })
  this.handleClickClose();
 } // end handleSave

 // called when this.props.reduxState.current360.updateNeeded.[section] is true (set true
 // after the section is updated), this runs to copy the section into local state.
 loadCurrentData = () => {

  let newState = {};

  Object.keys(this.state).map( (key) => {
    if (isNaN(key) && key !== 'newState') {
      newState[key]=this.state[key]
    };
  });

  this.props.reduxState.current360.goalsAssessment.map((row,index) => {
    let rowCheck = row;
    // if (index==2) {
      Object.entries(rowCheck).map((entry) => {
        // console.log('entry example:', entry);
        if (entry[1] == null) {
          rowCheck[entry[0]] = '';
        }
      })
    // }
    newState[row.id]=rowCheck;
    console.log('rowCheck:', rowCheck);
  });

  newState.updating = false;

  this.setState( newState );

  this.props.dispatch({ type: 'CURRENT_360_SECTION_UPDATE_COMPLETE', payload: {section: 'goalsAssessment'} });

 } // end loadCurrentData

 render() {
   const { classes } = this.props;

   // Check if the section information updated since this site was last loaded.
   // A section is re-downloaded each time the edit dialog is opened.
   if (this.props.reduxState.current360.updateNeeded.goalsAssessment === true) {
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
            {Object.keys(this.state).map( (key,index) => {
              if (!isNaN(key)) {
                return (
                  <GoalsAssessmentEditComponent key={this.state[key].id} row={this.state[key]} index={index} handleChangeFor={this.handleChangeFor} deleteRow={this.deleteRow} />
              );
                }
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