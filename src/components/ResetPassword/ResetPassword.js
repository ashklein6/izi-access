import React, { Component } from 'react';
import axios from 'axios';
import colors from '../App/colors';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const loading = {
  margin: '1em',
  fontSize: '24px',
};

class ResetPassword extends Component {

  state = {
    username: '',
    password: '',
    confirmPassword: '',
    update: false,
    isLoading: true,
    error: false,
  }

  async componentDidMount() {
    console.log(this.props.match.params.token);
    await axios
      .get('/forgotPassword', {
        params: {
          passwordResetToken: this.props.match.params.token,
        },
      })
      .then(response => {
        console.log(response);
        if (response.data.message === 'password reset link ok') {
          this.setState({
            username: response.data.username,
            update: false,
            isLoading: false,
            error: false,
          });
        } else {
          this.setState({
            update: false,
            isLoading: false,
            error: true,
          });
        }
      })
      .catch(error => {
        console.log(error.data);
      });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  updatePassword = e => {
    e.preventDefault();
    axios
      .put('/forgotPassword', {
        username: this.state.username,
        password: this.state.password,
        token: this.props.match.params.token,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.message === 'password updated') {
          this.setState({
            updated: true,
            error: false,
          });
        } else {
          this.setState({
            updated: false,
            error: true,
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;
    const { password, error, isLoading, updated } = this.state;
    if (error) {
      return (
        <div className={classes.container}>
          <div style={loading}>
            <Typography className={classes.error} variant="h6">Problem resetting password. Please send another reset link.</Typography>
          </div>
        </div>
      );
    } else if (isLoading) {
      return (
        <div className={classes.container}>
          <div style={loading}>Loading User Data...</div>
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <form onSubmit={this.updatePassword}>
          <Typography className={classes.header} variant="h6">Enter New Password</Typography>
            <TextField
              // style={inputStyle}
              id="password"
              label="password"
              onChange={this.handleChange('password')}
              value={password}
              type="password"
            />
            <Button className={classes.submitButton} variant="contained" onClick={this.updatePassword}>Submit</Button>
          </form>
          {updated && (
            <div>
              <Typography variant="h6">
                Your password has been successfully reset, please try <a href="/login#/profile">logging in</a> again.
              </Typography>
            </div>
          )}
        </div>
      )
    }
  }
}

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center',
    padding: 20,
  },
  header: {
    margin: '25px auto',
  },
  error: {
    marginBottom: 50,
    padding: 10,
    color: '#fff',
    backgroundColor: colors.red
  },
  submitButton:{
    display: 'block',
    margin: '25px auto'
  },
}

export default (withStyles(styles)(ResetPassword));