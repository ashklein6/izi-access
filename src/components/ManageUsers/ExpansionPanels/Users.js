import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUsers from '../../TableUsers/TableUsers';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';

class Users extends Component {

  state = {
    searchBy: '',
    level: '',
    sortBy: '',
  };

  componentDidMount() {
    this.viewAllUsers();
    this.props.dispatch({type: 'FETCH_ACCESS_LEVELS'});
  };

  // handles change for inputs
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    })
  };

  // handle click of searchIcon button from 'Search by Name or Email' input
  submitSearch = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'FETCH_USERS_SEARCH', payload: this.state});
  };

  viewAllUsers = () => {
    this.props.dispatch({type: 'FETCH_ALL_USERS'});
  };

render() {
  const { classes } = this.props;
  const level = this.props.reduxState.userAccessLevel;
  

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
      <div >
        <span>
          <form className={classes.form} onSubmit={this.submitSearch}>
          
            <TextField className={classes.searchField} 
              placeholder="Search by Name or Email" 
              type="search" 
              onChange={this.handleChange}
              name="searchBy" 
              value={this.state.searchBy}
            />
            
            <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.level}
              onChange={this.handleChange}
              name="level"
              InputProps={{
                startAdornment: <InputAdornment position="start">Level</InputAdornment>,
              }}
            >
              {level.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.access_type}
                </MenuItem>
              ))}
            </TextField>
            <Button className={classes.button} variant="contained" onClick={this.submitSearch}>Search</Button>

            <Button className={classes.button} variant="contained" onClick={this.viewAllUsers}>View All Users</Button>

            {/* <TextField
              select
              className={classNames(classes.margin, classes.textField)}
              value={this.state.sortBy}
              onChange={this.handleChange}
              name="sortBy"
              InputProps={{
                startAdornment: <InputAdornment position="start">Sort</InputAdornment>,
              }}
            >
              {ranges.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField> */}

          </form>
        </span>
      </div>

        {/* Information on the expansion panel's summary bar (always shows) */}
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className={classes.summary}>
        <div className={classes.title}>
          <Typography variant="h2" className={classes.heading}>Users</Typography>
        </div>     
        </ExpansionPanelSummary>

        {/* Content that is within the expansion panel (shows when panel is expanded) */}
        <ExpansionPanelDetails className={classes.details}>
          <TableUsers users={this.props.reduxState.allUsers.allUsers} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
    );
  }
};

const styles = {
  root: {
    width: '100%',
  },
  details: {
    alignItems: 'center',
  },
  heading: {
    fontSize: "1.5rem",
  },
  summary: {
    alignItems: 'center'
  },
  title: {
    flexBasis: '75.00%',
  },
  searchField: {
    width: 200,
    margin: '0px 15px 25px 15px'
  },
  textField: {
    width: 150,
    margin: '0px 15px 25px 15px'
  },
  form: {
    textAlign: 'center'
  },
  button: {
    margin: '0px 25px'
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Users));