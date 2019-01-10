import React, { Component } from 'react';
import axios from 'axios';
import colors from '../App/colors';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Cancel from '@material-ui/icons/Cancel';

class ForgotPassword extends Component {

  state = {
    email: '',
    showError: false,
    messageFromServer: '',
    showNullError: false,
    open: false,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  sendEmail = event => {
    event.preventDefault();
    if (this.state.email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      });
    } else {
      axios.post('/forgotPassword', {
          email: this.state.email,
        })
        .then(response => {
          console.log(response.data);
          if (response.data === 'email not in db') {
            this.setState({
              showError: true,
              messageFromServer: '',
              showNullError: false,
            });
          } else if (response.data === 'recovery email sent') {
            this.setState({
              showError: false,
              messageFromServer: 'recovery email sent',
              showNullError: false,
            });
          }
        })
        .catch(error => {
          console.log(error.data);
        });
    }
  };

  handleClickOpen = () => {
    this.setState({
      ...this.state,
      open: true,
    })
  } // end handleClickOpen

  handleClickClose = () => {
    this.setState({
      ...this.state,
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
      open: false,
    })
  } // end handleClickClose

  render() {
    const { classes } = this.props;
    const { email, messageFromServer, showNullError, showError } = this.state;
    return (
      <React.Fragment>
        <Button className={classes.button} onClick={this.handleClickOpen}>Forgot Password?</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClickClose}
          aria-labelledby="forgot-password-dialog"
        >
          <div className={classes.container}>
            <Typography variant="h6">Forgot Password?</Typography>
            <Typography className={classes.header} variant="h6">Enter Your Email Address</Typography>
            <form className="profile-form" onSubmit={this.sendEmail}>
              <TextField
                className={classes.input}
                id="email"
                label="email"
                value={email}
                onChange={this.handleChange('email')}
                placeholder="Email Address"
              />
              <Button className={classes.submitButton} variant="contained" onClick={this.sendEmail}>Submit</Button>
            </form>
            {showNullError && (
              <div>
                <Typography className={classes.error}>The email address cannot be empty.</Typography>
              </div>
            )}
            {showError && (
              <div>
                <Typography className={classes.error}>
                  That email address isn't recognized. Please try again or register for a new account.
                </Typography>
              </div>
            )}
            {messageFromServer === 'recovery email sent' && (
              <div>
                <Typography className={classes.emailSent}>
                  Password Reset Email Sent!
                </Typography>
              </div>
            )}
          <IconButton className={classes.closeButton} onClick={this.handleClickClose}>
            <Cancel />
          </IconButton>
          </div>
        </Dialog>
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    textAlign: 'center',
    padding: 20,
    height: 350,
    width: 275
  },
  input: {
    // marginBottom: 25
  },
  header: {
    marginBottom: 25,
  },
  error: {
    marginBottom: 50,
    padding: 10,
    color: '#fff',
    backgroundColor: colors.red
  },
  emailSent: {
    marginBottom: 50,
    padding: 10,
    backgroundColor: colors.lightGrey
  },
  button: {
    // display: 'block',
    textAlign: 'center',

    width: 200,
    padding: 10,
    margin: 10,
  },
  submitButton:{
    display: 'block',
    margin: '25px auto'
  },
  closeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    padding: 10,
    margin: 10,
  }
}

export default (withStyles(styles)(ForgotPassword));