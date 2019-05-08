import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForever from '@material-ui/icons/DeleteForever';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';

class GoalsAssessmentEditComponent extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;
   console.log('row:', this.props.row)
  
   return (
    <div key={this.props.index} className={classes.inputGroup}>
      <Grid container>
        <Grid item xs={6} className={classes.rowHeaderLeft}>
          <Typography variant="subtitle1" className={classes.rowLabel}>Row {this.props.index + 1}</Typography>
        </Grid>
        <Grid item xs={6} className={classes.rowHeaderRight}>
          <FormControlLabel
            control={
              <Checkbox
                name="row_public"
                checked={this.props.row.row_public}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="row_public"
              />
            }
            label="Public"
          />
          <IconButton aria-label="Delete" className={classes.margin} onClick={() => this.props.deleteRow(this.props.row.id)}>
            <DeleteForever fontSize="small"/>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <TextField
            // Create focus on the first text box of the page:
            {...(this.props.index === 0) ? {autoFocus: true} : null}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            type="text"
            variant="outlined"
            value={this.props.row.description}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
            multiline
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            margin="dense"
            id="desired"
            name="desired"
            label="Desired"
            type="number"
            variant="outlined"
            value={this.props.row.desired}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            margin="dense"
            id="delivered"
            name="delivered"
            label="Delivered"
            type="number"
            variant="outlined"
            value={this.props.row.delivered}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            margin="dense"
            id="difference"
            name="difference"
            label="Difference"
            type="number"
            variant="outlined"
            value={this.props.row.difference}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            margin="dense"
            id="percent"
            name="percent"
            label="Percent"
            type="number"
            variant="outlined"
            value={this.props.row.percent}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="dense"
            id="comments"
            name="comments"
            label="Comments"
            type="text"
            variant="outlined"
            value={this.props.row.comments}
            onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
            className={classes.input}
            fullWidth
            multiline
          />
        </Grid>
      </Grid>
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

export default connect(mapReduxStateToProps)(withStyles(styles)(GoalsAssessmentEditComponent));