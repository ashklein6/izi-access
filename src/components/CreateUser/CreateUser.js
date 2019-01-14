import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class CreateUser extends Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    iziName: '',
    date: null
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
          iziName: this.state.iziName,
          date: this.state.date
        },
      });
      alert('Success creating profile!')
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
      alert('Error creating profile!')
    }
    this.setState({
      ...this.state,
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      iziName: '',
      date: ''
    })
  } // end registerUser

  handleCancel = () => {
    this.props.dispatch({type: 'SET_TO_LOGIN_MODE'});
  }

  handleDemo = () => {
    this.setState({
      firstname: 'James',
      lastname: 'Andersen',
      email: 'jamesa@gmail.com',
      username: 'jandersen',
      password: 'a',
      iziName: 'Community factors for emotional distress.'
    })
  };

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        {this.props.errors.registrationMessage && (
          <Typography
            variant="h4"
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </Typography>
        )}
        <form onSubmit={this.registerUser} className={classes.form}>
        <Typography variant="h3" className={classes.header}>Create Account</Typography>
          <TextField
            label="First Name"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={this.state.firstname}
            onChange={this.handleInputChangeFor('firstname')}
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
            label="Email"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChangeFor('email')}
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
          <Typography className={classes.text}>
            If you are an IZI sponsor, enter the following
            information to request access to the full scope of the event data.
          </Typography>
          <div>
            <TextField
              label="IZI Name"
              className={classes.textField}
              margin="dense"
              variant="outlined"
              type="text"
              name="iziName"
              placeholder="iziName"
              value={this.state.iziName}
              onChange={this.handleInputChangeFor('iziName')}
            />
            <br />
            <Typography variant="h6">OR</Typography>
            <TextField
              className={classes.textField}
              type="date"
              margin="dense"
              variant="outlined"
              onChange={this.handleInputChangeFor('date')}
              name ="date"
            />
            <br />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              name="submit"
              value="createUser"
            >
              Create User
            </Button>
            <br />
            <Button
              className={classes.button}
              variant="contained"
              onClick={this.handleCancel}
              name="cancel"
              value="cancel"
            >
              Cancel
            </Button>
            <br />
            <Button
              className={classes.button}
              variant="contained"
              onClick={this.handleDemo}
              name="demo"
              value="demo"
            >
              Demo Fill
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const styles = {
  container: {
    margin: 'auto',
    textAlign: 'center',
  },
  textField: {
    backgroundColor: '#fff',
    margin: 'auto',
    minWidth: 350,
    marginBottom: 15
  },
  text: {
    textAlign: 'center',
    width: 330,
    margin: 'auto',
    padding: 10,
    fontSize: 18
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
    width: 200,
    marginTop: 15
  }
};

const mapReduxStateToProps = (state) => ({
 errors: state.errors
});

export default connect(mapReduxStateToProps)(withStyles(styles)(CreateUser));