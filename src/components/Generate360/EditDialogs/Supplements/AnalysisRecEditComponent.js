import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Grid from '@material-ui/core/Grid';

class AnalysisRecEditComponent extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;
  
   return (
    <div key={this.props.index} className={classes.inputGroup}>
      <Grid container>
        <Grid item xs={6} className={classes.rowHeaderLeft}>
          <Typography variant="subtitle1" className={classes.rowLabel}>Findings</Typography>
        </Grid>
      </Grid>
      <TextField
        // Create focus on the first text box of the page:
        {...(this.props.index === 0) ? {autoFocus: true} : null}
        margin="dense"
        id="findings"
        name="findings"
        label="Findings"
        type="text"
        variant="outlined"
        value={this.props.row.findings}
        onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
        className={classes.input}
        fullWidth
        multiline
      />
      <Grid container>
        <Grid item xs={6} className={classes.rowHeaderLeft}>
          <Typography variant="subtitle1" className={classes.rowLabel}>Recommendation</Typography>
        </Grid>
      </Grid>
      <TextField
        margin="dense"
        id="recommendations"
        name="recommendations"
        label="Recommendation"
        type="text"
        variant="outlined"
        value={this.props.row.recommendations}
        onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
        className={classes.input}
        fullWidth
        multiline
      />
    </div>  
   );
 }
};

const styles = {
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputGroup: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: colors.lightGrey,
    borderRadius: 5
  },
  margin: {
    margin: '0.1vmin',
  },
  rowHeaderLeft: {
    alignItems: 'center',
    display: 'flex',
  },
  rowHeaderRight: {
    textAlign: 'right'
  },
  rowLabel: {
    marginLeft: '12px'
  },
  spaceBetween: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  }
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(AnalysisRecEditComponent));