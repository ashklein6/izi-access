import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

const styles = {
  container: {
    margin: 25
  },
  textField: {
    width: 400,
    marginBottom: 15
  },
  text: {
    textAlign: 'center',
    width: 330,
    margin: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18
  },
  form: {
    textAlign: 'center',
    padding: 50
  },
  header: {
    textAlign: 'center',
    marginBottom: 25
  },
  button: {
    width: 200,
    marginTop: 15
  },
  div: {
    textAlign: 'center',
    width: 330,
    margin: 'auto',
    paddingTop: 100,
    paddingBottom: 10,
    fontSize: 18
  }
};

class UserProfile extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       <Typography variant="h2" className={classes.header}>User Profile</Typography>
       <form>
         <div className={classes.text}>
         <Typography className={classes.text}>Jane</Typography>
          </div>
       </form>
     </div>
   );
 }
};

// const styles = {
//  header: {

//  }
// };

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(UserProfile));