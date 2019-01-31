import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Search360s extends Component {

  state = {
      name: '',
      location: '',
      date: '',
      category: '',
  };

  // sets the properties in state to their typed in values
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  };

  // dispatches the search query to populate the table with the new search results
  // and then resets state to empty strings so the textfields are reset to empty
  handleSearch = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: 'FETCH_360_SEARCH', 
      payload: {
        ...this.state,
        publishedStatus: this.props.status
      }
    });
    this.setState({
      name: '',
      location: '',
      date: '',
      category: '',
    });
  }; // end handlesearch

  viewAll = () => {
    this.props.dispatch({type: 'FETCH_PUBLISHED'});
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.form} onSubmit={this.handleSearch}>
          <TextField className={classes.textField} placeholder="Name or Client" type="search" onChange={this.handleChange}
            name="name" value={this.state.name}/>
          <TextField className={classes.textField} placeholder="Location" type="search" onChange={this.handleChange}
            name="location" value={this.state.location}/>
          <TextField className={classes.textField} placeholder="Date" type="date" onChange={this.handleChange}
            name="date" value={this.state.date}/>
          <TextField
            select
            className={classes.textField}
            value={this.state.category}
            onChange={this.handleChange}
            name="category"
            InputProps={{
              startAdornment: <InputAdornment position="start">Category</InputAdornment>,
            }}
          >
            {this.props.reduxState.iziCategories.map(category => (
              <MenuItem key={category.id} value={category.id}>
                {category.category}
              </MenuItem>
            ))}
          </TextField>
          <Button className={classes.button} variant="contained" type="submit">Search</Button>
        </form>
        <Button className={classes.button} variant="contained" onClick={this.viewAll}>View All</Button>
      </div>
    );
  }
};

const styles = {
  form: {
    display: 'inline-block',
    margin: 'auto'
  },
  textField: {
    padding: 25
  },
  button: {
    margin: 25
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
 });
 
 export default connect(mapReduxStateToProps)(withStyles(styles)(Search360s));