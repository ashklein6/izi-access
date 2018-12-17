import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';

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


class Create360 extends Component {

  state = {
    name: '',
    client: '',
    date: '',
    location: '',
    category: '',
    status: false,
  };

  // will navigate to admin dashboard
  returnToDashboard = (event) => {
    event.preventDefault();
    this.props.history.push('/dashboard');
  }

  // handles change for inputs
  handleChange = (event) => {
    console.log('in handleChange');
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  }

  // handles change for switch
  handleSwitch = (event) => {
    console.log('in handleSwitch', this.state.status);
    let newValue = !this.state.status;
    this.setState({
      ...this.state,
      status: newValue
    });
  }

  // dispatch to current360Saga
  handleSubmit = (event) => {
    console.log('handleSubmit');
    event.preventDefault();
    this.props.dispatch({ type: 'CREATE_360)', payload: this.state });
    // this.props.history.push('/generate360');
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        {JSON.stringify(this.state)}
        {/* {JSON.stringify(this.props.mapReduxStateToProps)} */}
        <Button 
          variant="contained"
          onClick={this.returnToDashboard}
        >
          Return to Dashboard
        </Button>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Typography variant="h2" className={classes.header}>Create 360</Typography>
          <TextField
            label="Name"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.name}
            name ="name"
            placeholder="Name"
          /><br />

          <TextField
            label="Client"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.client}
            name ="client"
            placeholder="Client"
          /><br />

          <TextField
            // label="Date"
            className={classes.textField}
            type="date"
            margin="dense"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.date}
            name ="date"
          /><br />

          <TextField
            label="Location"
            className={classes.textField}
            margin="dense"
            variant="outlined"
            onChange={this.handleChange}
            value={this.state.location}
            name ="location"
            placeholder="Location"
          /><br />

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Category
            </InputLabel>
            <Select
              className={classes.textField}
              value={this.state.category}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  labelWidth={0}
                  name="category"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={1}>Category 1</MenuItem>
              <MenuItem value={2}>Category 2</MenuItem>
              <MenuItem value={3}>Category 3</MenuItem>
            </Select>
          </FormControl><br />

          <span>BBE</span>
          <Switch
            checked={this.state.status}
            onChange={this.handleSwitch}
            color="default"
          />
          <span>SBS</span>

          <br />

          <Button type="submit" variant="contained">Create 360</Button>
        </form>
    </div>
    );
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Create360));