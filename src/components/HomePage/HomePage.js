import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table360s from '../Table360s/Table360s';
import Search360s from '../Search360s/Search360s';
import moment, { max } from 'moment';

import MarnitaLogo from './marnita_logo.png';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

class Home extends Component {

 state = {

 };

 componentDidMount() {
  this.props.dispatch({type: 'FETCH_PUBLISHED'});
 };

 // when the user clicks 'view 360,' this function will route them to
 // the view 360 page, and also dispatch the selected 360 id
 // so the correct information can be displayed on the next page
 handleClick = (id) => {
  this.props.dispatch({type: 'FETCH_360', payload: id});
  this.props.history.push('/view360');
 };

 render() {
   const { classes } = this.props;

   return (
     <div>
       {/* {JSON.stringify(this.props.reduxState.all360s.recent)} */}
        <Typography variant="h3" className={classes.header}>
          Check out some recent IZI 360 Reports
        </Typography>

        <Grid className={classes.container} container spacing={0}>
        {/* the line below maps through the first 3 items in the array */}
        {/* and uses that information to display the cards. */}
        {/* the unaltered version of the array is sent to the table */}
        {this.props.reduxState.all360s.recent.map( izi => (
          <Grid item xs={4} key={izi.id}>
            <Card className={classes.card} elevation={5}>
            {/* TO DO: add a number of card classes, color formatting based on IZI category? */}

              <CardContent className={classes.card}>
                <div className={classes.image}>
                  <img src={MarnitaLogo} alt="Marnita's Table Placeholder" className={classes.image}/>
                </div>
                <div className={classes.body}>
                  <Typography variant="h6">
                    {izi.name}
                  </Typography>

                  <Typography className={classes.iziInfo} component="p">
                    {izi.description}
                  </Typography>
                  <Typography className={classes.iziInfo} component="p">
                    {moment(izi.date).format('LL')}
                  </Typography>
                  <Typography className={classes.iziInfo} component="p">
                    {izi.location}
                  </Typography>
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button className={classes.button} variant="contained" fullWidth={true} onClick={() => this.handleClick(izi.id)}>
                  View 360 Report
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
        </Grid>
        <div>
          {/* <Typography>Search By</Typography> */}
          <Search360s  status="true"/>
        </div>
        {/* this sends the array of published 360s to the table, */}
        {/* and specificies that this table is for the home page,  */}
        {/* and will not render the edit button. */}
        <Table360s rows={this.props.reduxState.all360s.published} homeVersion />

     </div>
   );
 }
};

const styles = {
  container: {
    display: 'flex',
    marginBottom: 50
  },
  card: {
    minWidth: 250,
    textAlign: 'center',
    justifyContent: 'center',
    padding: '0px',
    margin: 25
  },
  image: {
    margin: 'auto',
    padding: 10,
  },
  body: {
    padding: 15,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    padding: 20,
    textAlign: 'center'
  },
  button: {
    marginBottom: 20
  },
  iziInfo: {
    marginTop: 5
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));