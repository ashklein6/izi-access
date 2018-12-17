import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table360s from '../Table360s/Table360s';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';

// temporary data
const ranges = [
  {
    value: 'health',
    label: 'health',
  },
  {
    value: 'transportation',
    label: 'transportation',
  },
  {
    value: 'other',
    label: 'other',
  },
];

//this page has all sorts of weird problems, but the general idea is there...
//ashley, if you're reading this, you should probs go get a hot apple blahst
class Manage360s extends Component {

  state = {
    category: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

 render() {
   const { classes } = this.props;

   return (
      <div >
        <Button variant="contained">Return to Dashboard</Button>
        <span>
          <Typography variant="h4" className={classes.header}>Unpublished 360s</Typography>
          <Button variant="contained">Create New 360</Button>
        </span>
        <span>
          <p>Search By</p>
          <form>
            <TextField placeholder="Name or Client" type="search"/>
            <TextField placeholder="Location" type="search"/>
            <TextField placeholder="name" type="date"/>
            <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.category}
              onChange={this.handleChange}
              name="category"
              InputProps={{
                startAdornment: <InputAdornment position="start">Category</InputAdornment>,
              }}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </span>
        <Table360s/>
        <span>
          <Typography variant="h4" className={classes.header}>Published 360s</Typography>
          <p>Search By</p>
          <form>
            <TextField placeholder="Name or Client" type="search"/>
            <TextField placeholder="Location" type="search"/>
            <TextField placeholder="name" type="date"/>
            <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.category}
              onChange={this.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">Category</InputAdornment>,
              }}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </form>
        </span>
        <Table360s/>
      </div>
   );
 }
};

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
});

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Manage360s));