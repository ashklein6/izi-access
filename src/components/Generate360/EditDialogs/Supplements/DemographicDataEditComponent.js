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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class DemographicDataEditComponent extends Component {

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
          {/* <FormControlLabel
            control={
              <Switch
                checked={this.props.row.row_public}
                onChange={() => this.props.handleChangePublic(this.props.row.id)}
                name="row_public"
                value="public"
                classes={{
                  switchBase: classes.colorSwitchBase,
                  checked: classes.colorChecked,
                  bar: classes.colorBar
                }}
              />
            }
            label={this.props.row.row_public ? 'Public' : 'Private'}
          /> */}
          <IconButton aria-label="Delete" className={classes.margin} onClick={() => this.props.deleteRow(this.props.row.id)}>
            <DeleteForever fontSize="small"/>
          </IconButton>
        </Grid>
      </Grid>
      
      <div className={classes.spaceBetween}>
        <TextField
          // Create focus on the first text box of the page:
          {...(this.props.index === 0) ? {autoFocus: true} : null}
          margin="dense"
          id="ethnicity"
          name="ethnicity"
          label="Ethnicity"
          type="text"
          variant="outlined"
          value={this.props.row.ethnicity}
          onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
          className={classes.input}
          multiline
        />
        <TextField
          margin="dense"
          id="passion"
          name="passion"
          label="Passion"
          type="text"
          variant="outlined"
          value={this.props.row.passion}
          onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
          className={classes.input}
          multiline
        />
        <TextField
          margin="dense"
          id="profession"
          name="profession"
          label="Profession"
          type="text"
          variant="outlined"
          value={this.props.row.profession}
          onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
          className={classes.input}
          multiline
        />
        <TextField
          margin="dense"
          id="referral"
          name="referral"
          label="Referral"
          type="text"
          variant="outlined"
          value={this.props.row.referral}
          onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
          className={classes.input}
          multiline
        />
      </div>
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

export default connect(mapReduxStateToProps)(withStyles(styles)(DemographicDataEditComponent));