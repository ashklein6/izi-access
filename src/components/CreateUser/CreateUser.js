import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    margin: 25
  },
  textField: {
    width: 400,
    marginBottom: 10
  },
  form: {
    textAlign: 'center',
    padding: 50
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  }
};

class CreateUser extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser} className={classes.form}>
        <Typography variant="h2" className={classes.header}>Create Account</Typography>
            <TextField
                label="First Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="firstname"
                placeholder="First Name"
                value={this.state.firstname}
                onChange={this.handleInputChangeFor('username')}
              />
            <br />
            <TextField
                label="Last Name"
                className={classes.textField}
                margin="dense"
                variant="outlined"
                type="text"
                name="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.handleInputChangeFor('lastname')}
              />
            <br />
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
            <br />
            <TextField
              label="Password"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              type="text"
              name="password"
              placeholder="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            <br />
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Create User"
            />
          </div>
        </form>
        <center>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
        </center>
      </div>
    );
  }
}

// const styles = {
//   form: {
//     backgroundColor: "var(--main-light-grey)",
//     width: "30%",
//     height: "250px",
//     margin: "20px auto",
//     padding: "25px",
//     borderRadius: "2px",
//   }
// };

const mapReduxStateToProps = (state) => ({
 errors: state.errors
});

export default connect(mapReduxStateToProps)(withStyles(styles)(CreateUser));