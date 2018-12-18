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

class GoalsAssessmentEditDialog extends Component {

 state = {
  rows: rows
 };

 handleChangeFor= (event) => {
  
 } // end handleChangeFor

 handleSave = () => {
  this.props.handleClose();
 }

 render() {
   const { classes } = this.props;

   return (
    <Dialog
      open={this.props.open}
      onClose={this.props.handleClose}
      aria-labelledby="goal-assessment-edit-dialog"
      scroll="paper"
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle id="goal-assessment-edit-dialog">Edit Goals Assessment</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Remember to save changes before closing this edit dialog.
        </DialogContentText>
        {this.state.rows.map( row => {
          return (
            <div>
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
        <Button onClick={this.props.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleSave} color="primary">
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
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
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(GoalsAssessmentEditDialog));