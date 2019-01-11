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

const styles = {
    container: {
      margin: 25
    },
    textField: {
      width: 400,
      marginBottom: 15
    },
    text: {
      textAlign: 'left',
      paddingTop: 10,
      paddingBottom: 10,
      fontSize: 18,
      borderRadius: 10
    },
    form: {
      textAlign: 'center',
      padding: 50
    },
    header: {
      textAlign: 'center',
      marginBottom: 25
    },
    button: {
      width: 200,
      marginTop: 15,
    },
    
    div: {
      textAlign: 'left',
      width: 400,
      margin: 'auto',
      padding: 20,
      fontSize: 18,
      background: '#eceff0',
      borderRadius: 10
    }
  };

class RequestAccess extends Component {

state = {
    open: false,
    iziName: '',
    date: '',
    };

handleClickOpen = () => {
    this.setState({
        ...this.state,
        open: true
    })
}

handleClickClose = () => {
    this.setState({
      ...this.state,
      open: false
    })
}

handleSave = () => {
    this.handleClickClose();
    this.props.dispatch({
      type: 'REQUEST_360_ACCESS', 
      payload: {
        iziName: this.state.iziName, 
        date: this.state.date,
        user: this.props.reduxState.user.id,
      }});
    this.setState({
      iziName: '',
      date: '',
    })
}

handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  })
}

render(){
    const { classes } = this.props;

    return(
        <div>
            <Button
            onClick={this.handleClickOpen} 
            className={classes.button} 
            variant= "contained"
            >Request 360 Access</Button>
        <Dialog
         open={this.state.open}
         onClose={this.handleClickClose}
         aria-labelledby="request-access"
         scroll="paper"
         width= '400'
         maxWidth="lg"
       >
       <DialogTitle id="edit-password" className={classes.header}>Request IZI Access</DialogTitle>
         <DialogContent>
           <DialogContentText className={classes.header}>
             Remember to save changes before closing this edit dialog.
           </DialogContentText>
         <div className={classes.div}>
            <TextField
                label="IZI Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="iziName"
                placeholder="IZI Name"
                value={this.state.iziName}
                onChange={this.handleChange}
              />
              <Typography variant="h6" className={classes.header}>OR</Typography>
              {/* <br /> */}
              <TextField
              label="Date of IZI"
              className={classes.textField}
              type="date"
              margin="dense"
              variant="outlined"
              name ="date"
              value={this.state.date}
              onChange={this.handleChange}
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
    )
}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
   });
export default connect(mapReduxStateToProps)(withStyles(styles)(RequestAccess));