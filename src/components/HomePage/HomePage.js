import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table360s from '../Table360s/Table360s';
import Search360s from '../Search360s/Search360s';
import moment from 'moment';
import LinesEllipsis from 'react-lines-ellipsis';
import colors from '../App/colors';
import './HomePage.css';

import MarnitaLogo from './marnita_logo.png';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';

class Home extends Component {

 state = {
  useEllipsis: true
 };

 componentDidMount() {
  this.props.dispatch({type: 'FETCH_PUBLISHED'});
 };

 // when the user clicks 'view 360,' this function will route them to
 // the view 360 page, and also dispatch the selected 360 id
 // so the correct information can be displayed on the next page
 handleClick = (id) => {
  this.props.dispatch({type: 'FETCH_360', payload: id});
  this.props.history.push({
    pathname: `/view360/${id}`,
  });
 };

 render() {
   const { classes } = this.props;
   return (
     <div>
        <Typography variant="h4" className={classes.header}>
          Check out some recent 360s!
        </Typography>

        <Grid className={classes.container} container spacing={0}>
        {/* the line below maps through the first 3 items in the array */}
        {/* and uses that information to display the cards. */}
        {/* the unaltered version of the array is sent to the table */}
        <div className={classes.centerContainer}>
        {this.props.reduxState.all360s.recent.map( izi => (
            <Card className={classes.cardSize} key={izi.id} elevation={5}>
              <CardContent className={classes.card}>
                  <img src={MarnitaLogo} alt="Marnita's Table Placeholder" className={classes.image}/>
                <div className={classes.divHeader}>
                  <LinesEllipsis
                    text={izi.name}
                    className={classes.cardHeader}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                </div>
                <div className={classes.cardBody}>
                  <LinesEllipsis
                    text={izi.location + ' - ' + moment(izi.date).format('LL')}
                    className={classes.iziInfo}
                    maxLine='1'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                  {/* <Typography className={classes.iziInfo} component="p">
                  {izi.location} - {moment(izi.date).format('LL')}
                  </Typography> */}
                  <LinesEllipsis
                    text={izi.description}
                    className="ellipsis-text"
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                  />
                </div>
              </CardContent>
              <CardActions className={classes.cardActions}>
                <Button className={classes.button} variant="contained" fullWidth={true} onClick={() => this.handleClick(izi.id)}>
                  View 360
                </Button>
              </CardActions>
            </Card>
        ))}
        </div>
        </Grid>
        <Typography variant="h4" className={classes.header}>
          Or search through past 360s:
        </Typography>
        <div className={classes.centerContainer}>
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
    marginBottom: 25
  },
  centerContainer: {
    margin: 'auto',
    textAlign: 'center',
  },
  card: {
    width: 260,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: 250,
    alignItems: 'center',
    textAlign: 'center',
    padding: 0,
    margin: 20,
    display: 'flex'
  },
  cardSize: {
    maxWidth: 300,
    display: 'inline-block',
    margin: 20,
    padding: 0
  },
  divHeader: {
    flexGrow: '1',
    width: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardHeader: {
    height: '100%',
    fontWeight: 'bold',
    color: colors.pink
  },
  cardBody: {
    minHeight: 100,
    padding: 15,
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    width: 240,
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    padding: 20,
    textAlign: 'center',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 0
  },
  button: {
    marginBottom: 20,
  },
  iziInfo: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: '0.875rem'
  },
  image: {
    width: 75,
    marginBottom: 15
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));