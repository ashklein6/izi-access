import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForever from '@material-ui/icons/DeleteForever';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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
          <IconButton aria-label="Delete" className={classes.margin} onClick={() => this.props.deleteRow(this.props.row.id)}>
            <DeleteForever fontSize="small"/>
          </IconButton>
        </Grid>
      </Grid>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={4}>
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
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" className={classes.formControl} margin="dense" fullWidth>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="ethnic_category"
            >
              Ethnicity by Category
            </InputLabel>
            <Select
              autoWidth
              value={this.props.row.ethnic_category}
              onChange={(event) => this.props.handleChangeFor(event, this.props.row.id)}
              input={
                <OutlinedInput
                  labelWidth={140}
                  notched
                  name="ethnic_category"
                  id="ethnic_category"
                />
              }
            >
              {this.props.ethnicCategories.map((ethnic_cat) => {
                return <MenuItem key={ethnic_cat.id} value={ethnic_cat.id}>{ethnic_cat.ethnicity}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <FormControl variant="outlined" className={classes.formControl} margin="dense" fullWidth>
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="gen_category"
            >
              Generation
            </InputLabel>
            <Select
              autoWidth
              value={this.props.row.gen_category}
              onChange={(event) => this.props.handleChangeFor(event, this.props.row.id)}
              input={
                <OutlinedInput
                  labelWidth={75}
                  notched
                  name="gen_category"
                  id="gen_category"
                />
              }
            >
              {this.props.generationCategories.map((gen_cat) => {
                return <MenuItem key={gen_cat.id} value={gen_cat.id}>{gen_cat.generation}</MenuItem>
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
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
        <Grid item xs={6} sm={4} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="plans_to_tell"
                checked={this.props.row.plans_to_tell}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="plans_to_tell"
              />
            }
            label="Plans to tell someone"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="first_time"
                checked={this.props.row.first_time}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="first_time"
              />
            }
            label="First Time at the Table"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="child_abuse"
                checked={this.props.row.child_abuse}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="child_abuse"
              />
            }
            label="Child Abuse and Neglect"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="housing"
                checked={this.props.row.housing}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="housing"
              />
            }
            label="Housing"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <FormControlLabel
            control={
              <Checkbox
                name="transportation"
                checked={this.props.row.transportation}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="transportation"
              />
            }
            label="Transportation"
          />
        </Grid>
        <Grid item xs={6} sm={4} md={4}> 
          <FormControlLabel
            control={
              <Checkbox
                name="education"
                checked={this.props.row.education}
                onChange={(event) => this.props.handleCheckboxChange(event, this.props.row.id)}
                value="education"
              />
            }
            label="Education"
          />
        </Grid>
      </Grid>
    </div>
   );
 }
};

const styles = {
  formControl: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
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