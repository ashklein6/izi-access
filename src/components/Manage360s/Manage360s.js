import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table360s from '../Table360s/Table360s';
import Search360s from '../Search360s/Search360s';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


//this page has all sorts of weird problems, but the general idea is there...
//ashley, if you're reading this, you should probs go get a hot apple blahst
class Manage360s extends Component {

  // dispatches action to get both published and unpublished 360s
  // to populate the tables
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_PUBLISHED'});
    this.props.dispatch({type: 'FETCH_UNPUBLISHED'});
  }; // end componentDidMount

  // operates the button that returns users to the admin dashboard
  returnToDash = () => {
    this.props.history.push('/dashboard');
  };

  // operates button that takes users to the 360 generator
  goToGenerator = () => {
    this.props.history.push('/create360');
  };

 render() {
   const { classes } = this.props;

   return (
      <div >
        <Button variant="contained" onClick={this.returnToDash}>Return to Dashboard</Button>
        <span>
          <Button variant="contained" onClick={this.goToGenerator}>Create New 360</Button>
          <Typography variant="h4" className={classes.header}>Unpublished 360s</Typography>
        </span>
        <span>
          <Typography>Search By</Typography>
          <Search360s status="false"/> 
        </span>
        <Table360s rows={this.props.reduxState.all360s.unpublished} />
        <span>
          <Typography variant="h4" className={classes.header}>Published 360s</Typography>
          <Typography>Search By</Typography>
          <Search360s status="true"/>
        </span>
        <Table360s rows={this.props.reduxState.all360s.published} />
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