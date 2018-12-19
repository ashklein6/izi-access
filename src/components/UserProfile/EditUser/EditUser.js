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


class EditUser extends Component {

    state = {
      open: false,
    };
   
    handleChangeFor= (event) => {
   
    } // end handleChangeFor
   
    // handles clicking of the "edit" button. Opens a dialog window.
    handleClickOpen = () => {
     this.setState({
       ...this.state,
       open: true
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
   
    //  componentDidMount() {
    //    console.log('dialog mounted');
    //    this.getCurrentData();
    //  }
   
    render() {
      const { classes } = this.props;
   
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
       >
         <DialogTitle id="goal-assessment-edit-dialog">Edit Goals Assessment</DialogTitle>
         <DialogContent>
           <DialogContentText>
             Remember to save changes before closing this edit dialog.
           </DialogContentText>
               <div>
                 <TextField
                   autoFocus
                   margin="dense"
                   id="firstname"
                   label="First Name"
                   type="text"
                   variant="outlined"
                   onChange={this.handleChangeFor}
                   multiline
                 />
                 <TextField
                   autoFocus
                   margin="dense"
                   id="lastname"
                   label="Last Name"
                   type="number"
                   variant="outlined"
                   onChange={this.handleChangeFor}
                 />
                 <TextField
                   autoFocus
                   margin="dense"
                   id="email"
                   label="Email"
                   type="number"
                   variant="outlined"
                   onChange={this.handleChangeFor}
                 />
               </div>
           })}
         </DialogContent>
         <DialogActions>
           <Button onClick={this.props.handleClickClose} color="primary">
             Cancel
           </Button>
           <Button onClick={this.handleSave} color="primary">
             Save Changes
           </Button>
         </DialogActions>
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
     }
   };
   
   const mapReduxStateToProps = (reduxState) => ({
    reduxState
   });
   
   export default connect(mapReduxStateToProps)(withStyles(styles)(EditUser));