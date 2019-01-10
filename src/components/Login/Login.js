import React, { Component } from 'react';
import { connect } from 'react-redux';
import ForgotPassword from '../ForgotPassword/ForgotPassword';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.container}>
        {this.props.errors.loginMessage && (
          <Typography
            variant="h4"
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </Typography>
        )}
        <form onSubmit={this.login} className={classes.form}>
          <Typography variant="h3" className={classes.header}>Login</Typography>
          <div>
            <TextField
              label="Username"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </div>
          <div>
            <TextField
              label="Password"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </div>
          <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div>
        </form>
        <Button
          type="button"
          className={classes.button}
          onClick={() => {this.props.dispatch({type: 'SET_TO_REGISTER_MODE'})}}
        >
          Register
        </Button>
        <br />
        <ForgotPassword />
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'var(--main-light-grey)',
    width: 380,
    margin: '25px auto',
    padding: 17,
    borderRadius: 2,
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  },
  button: {
    textAlign: 'center',
    width: 200,
    padding: 10,
  },
  textField: {
    backgroundColor: '#fff',
    margin: 'auto',
    minWidth: 350,
    marginBottom: 15
  },
};

const mapReduxStateToProps = (state) => ({
 errors: state.errors
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Login));