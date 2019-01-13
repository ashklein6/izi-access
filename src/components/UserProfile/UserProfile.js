import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditUser from './EditUser/EditUser';
import EditPassword from './EditUser/EditPassword';
import RequestAccess from './EditUser/RequestAccess';
import moment from 'moment';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class UserProfile extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_USER_INFO'});
  }

 render() {
   const { classes } = this.props;
   const user = this.props.reduxState.user;

   return (
      <section>
        <Typography variant="h3" className={classes.header}>
          User Profile
        </Typography>
        <div className={classes.div}>
          <EditUser />
            <Typography variant="body1" className={classes.text}>
              First Name: {user.firstname}
            </Typography>
            <Typography 
              variant="body1" 
              className={classes.text}
            >
              Last Name: {user.lastname}
            </Typography>
            <Typography 
              variant="body1" 
              className={classes.text}
            >
              Email: {user.email}
            </Typography>
          <EditPassword />
        </div>
        <div className={classes.div}>
          <Typography 
            className={classes.text}>
            Your Accessible 360s
          </Typography>
          {this.props.reduxState.userControls.user.map(izi => (
            <Typography key={izi.id} className={classes.text}>
            {izi.name}, {moment(izi.date).format('LL')}
            <Button className={classes.viewButton} 
            variant="contained">View</Button>
          </Typography>
          ))}   
          <RequestAccess />
          </div>
     </section>
   );
 }
};

const styles = {
  text: {
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 18,
    borderRadius: 10
  },
  header: {
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 25
  },
  viewButton: {
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 200,
    float: 'right'
  },
  div: {
    textAlign: 'left',
    width: 400,
    margin: '25px auto',
    padding: 20,
    fontSize: 18,
    background: '#eceff0',
    borderRadius: 10
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(UserProfile));