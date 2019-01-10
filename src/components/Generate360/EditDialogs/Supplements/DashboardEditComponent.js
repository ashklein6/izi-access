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

class DashboardEditComponent extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;
  
   return (
    <div key={this.props.index} className={classes.inputGroup}>
      <Grid container>
        <Grid item xs={6} className={classes.rowHeaderLeft}>
          <Typography variant="subtitle1" className={classes.rowLabel}>Row {this.props.index + 1}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rowHeaderRight}>
          <IconButton aria-label="Delete" className={classes.margin} onClick={() => this.props.deleteRow(this.props.row.id)}>
            <DeleteForever fontSize="small"/>
          </IconButton>
        </Grid>
      </Grid>
      <TextField
        // Create focus on the first text box of the page:
        {...(this.props.index === 0) ? {autoFocus: true} : null}
        margin="dense"
        id="description"
        name="row_title"
        label="Description"
        type="text"
        variant="outlined"
        value={this.props.row.row_title}
        onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
        className={classes.input}
        fullWidth
        multiline
      />
      <TextField
        margin="dense"
        id="details"
        name="row_info"
        label="Details"
        type="text"
        variant="outlined"
        value={this.props.row.row_info}
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

export default connect(mapReduxStateToProps)(withStyles(styles)(DashboardEditComponent));