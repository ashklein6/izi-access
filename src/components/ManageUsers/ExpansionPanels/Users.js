import React, { Component } from 'react';
import { connect } from 'react-redux';
import TableUsers from '../../TableUsers/TableUsers';
import ViewUser from '../ViewUserDialog/ViewUser';

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
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';


let root = document.querySelector(':root');
const colors = {
  purple: window.getComputedStyle(root).getPropertyValue('--main-purple'),
  purpleHover: window.getComputedStyle(root).getPropertyValue('--main-purple-hover'),
  red: window.getComputedStyle(root).getPropertyValue('--main-red'),
  redHover: window.getComputedStyle(root).getPropertyValue('--main-red-hover'),
  pink: window.getComputedStyle(root).getPropertyValue('--main-pink'),
  pinkHover: window.getComputedStyle(root).getPropertyValue('--main-pink-hover'),
  orange: window.getComputedStyle(root).getPropertyValue('--main-orange'),
  orangeHover: window.getComputedStyle(root).getPropertyValue('--main-orange-hover'),
};

const ranges = [];

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
    console.log('in handleChange');
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
          
            <TextField className={classes.searchField} placeholder="Search by Lastname or Email" type="search" onChange={this.handleChange}
              name="searchBy" value={this.state.searchBy}
              // InputProps={{
              //   endAdornment: 
              //   <InputAdornment position="end">
              //     <IconButton variant="contained" size="small" className={classes.button} onClick={this.submitSearch}>
              //       <SearchIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
              //     </IconButton>
              //   </InputAdornment>
              // }}
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
                <MenuItem key={option.id} value={option.access_level}>
                  {option.access_type}
                </MenuItem>
              ))}
            </TextField>
            <Button variant="contained" onClick={this.submitSearch}>Search</Button>

            <Button variant="contained" onClick={this.viewAllUsers}>View All Users</Button>

            <TextField
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
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

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
  rootTable: {
    width: '100%',
    overflowX: 'scroll'
  },
  centerText: {
    textAlign: 'center'
  },
  colorBar: {
    // needs to be here for custom-css switch to work.
  },
  colorChecked: {
    // needs to be here for custom-css switch to work.
  },
  colorSwitchBase: {
    color: colors.orange,
    '&$colorChecked': {
    color: colors.orange,
    '& + $colorBar': {
      backgroundColor: colors.orange
    }
    }
  },
  details: {
    alignItems: 'center',
  },
  heading: {
    fontSize: "1.5rem",
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  status: {
    flexBasis: '25.00%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex'
  },
  subheading: {
    fontSize: '1rem',
    color: 'green',
    fontWeight: 'bold'
  },
  summary: {
    alignItems: 'center'
  },
  table: {
    minWidth: 700
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
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(Users));