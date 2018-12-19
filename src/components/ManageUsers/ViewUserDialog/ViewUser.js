import React, { Component } from 'react';
import { connect } from 'react-redux';

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

// Hard coded data
const rows = [
  { id: 1,
    description: 'Total Number', 
    desired: 125, 
    delivered: 140,
    difference: 15,
    percent: 112,
    comments: 'Based on in-room count. In room count is taken 3 to 6 times per account by at least two different people.'
  },
  { id: 2,
    description: 'Number of people of color/Indigenous', 
    desired: 71, 
    delivered: 70,
    difference: -1,
    percent: 99,
    comments: 'We generally set this goal at 51% in communities with at least 15% POC/Immigrant/Indigenous. Based on an in-room count.'
  },
  { id: 3,
    description: 'Number of people under 24', 
    desired: 35, 
    delivered: 33,
    difference: -2,
    percent: 94,
    comments: 'We generally set this goal at 25 - 33% unless the [project/event] does not warrant. Based on both in room and sign-in sheet counts.'
  },
  { id: 4,
    description: 'Measurable Indicators of Success 1: 80% of participants met 1 new person across race, class, culture or other means of self-identity', 
    desired: 112, 
    delivered: 126,
    difference: 14,
    percent: 113,
    comments: '80% of the room is our target goal for this MIS.'
  },
]

class ViewUser extends Component {

 state = {
   open: false,
   updating: false,
   rows: rows
 };

 handleChangeFor= (event) => {

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

 handleSave = () => {
  this.handleClickClose();
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
    <Button size="small" color="primary" onClick={this.handleClickOpen}>View</Button>
    <Dialog
      open={this.state.open}
      onClose={this.handleClickClose}
      aria-labelledby="goal-assessment-edit-dialog"
      scroll="paper"
      fullWidth
      maxWidth="sm"
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
          {this.state.rows.map( row => {
            return (
              <div key={row.id}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="description"
                  label="Description"
                  type="text"
                  variant="outlined"
                  value={row.description}
                  onChange={this.handleChangeFor}
                  multiline
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="desired"
                  label="Desired"
                  type="number"
                  variant="outlined"
                  value={row.desired}
                  onChange={this.handleChangeFor}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="delivered"
                  label="Delivered"
                  type="number"
                  variant="outlined"
                  value={row.delivered}
                  onChange={this.handleChangeFor}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="difference"
                  label="Difference"
                  type="number"
                  variant="outlined"
                  value={row.difference}
                  onChange={this.handleChangeFor}
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
  paper: {
    // height: 'calc(100% - 96px)'
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(ViewUser));