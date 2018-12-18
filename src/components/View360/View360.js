import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';


const styles = {
  sideBar: {
    height: '100vh',
    backgroundColor: '#ccc',
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
    margin: 25
  },
  subHeader: {
    textAlign: 'center',
  },
  dashboardBtn: {
    margin: '15px 0px',
    justifyContent: 'center',
  },
  list: {
    paddingTop: 0
  }
};

class View360 extends Component {

 state = {
 };

// will navigate to /manage360s
toManage360s = (event) => {
  event.preventDefault();
  this.props.history.push('/manage360s');
}
 render() {
  const { classes } = this.props;

  return (
    <Grid container spacing={0}>
      <Grid className={classes.sideBar} item xs={2}>
        <Button
          className={classes.dashboardBtn} 
          variant="contained"
          onClick={this.toManage360s}
        >
          Return to Dashboard
        </Button>
        <Divider />
        <List className={classes.list}>
          <ListItem button>
            <Typography>Goals Assessment</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <Typography>Dashboard</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <Typography>360 Report</Typography>
          </ListItem>
          <Divider />
          <ListItem button>
            <Typography>Analysis &amp; Recommendations</Typography>
          </ListItem>
          <Divider />
        </List>
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h2" className={classes.header}>View 360</Typography>
        <Typography variant="h5" className={classes.subHeader}>Client</Typography>
        <Typography variant="h5" className={classes.subHeader}>Location</Typography>
        <Typography variant="h5" className={classes.subHeader}>Date</Typography>
      </Grid>
    </Grid>
   );
 }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(View360));