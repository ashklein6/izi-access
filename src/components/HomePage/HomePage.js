import React, { Component } from 'react';
import { connect } from 'react-redux';

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

 render() {
   const { classes } = this.props;

   return (
     <div>
        <Typography variant="h3" className={classes.header}>Check out some recent IZI 360 Reports</Typography>
        <Grid container>
          <Grid item xs={4}>
            <Card className={classes.card}>
            {/* TO DO: add a number of card classes, color formatting based on IZI category? */}

              <CardActionArea>
                <CardContent>

                  <img src={MarnitaLogo} alt="Marnita's Table Placeholder" className={classes.image}/>

                  <Typography gutterBottom variant="h4" component="h4">
                    Health Matters!
                  </Typography>

                  <Typography component="p">
                    A brief description of the IZI will be here ... if the text is longer
                  </Typography>
                  <br></br>
                  <Typography component="p">
                    December 17, 2018
                  </Typography>
                  <Typography component="p">
                    Location of IZI
                  </Typography>

                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                  View 360 Report
                </Button>
              </CardActions>

            </Card>
          </Grid>

        </Grid>

     </div>
   );
 }
};

const styles = {
  card: {
    textAlign: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 150,
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'center'
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(Home));