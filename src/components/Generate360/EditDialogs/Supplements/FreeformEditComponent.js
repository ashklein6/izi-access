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

class FreeformEditComponent extends Component {

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
      <TextField
        // Create focus on the first text box of the page:
        {...(this.props.index === 0) ? {autoFocus: true} : null}
        margin="dense"
        id="title"
        name="title"
        label="Title"
        type="text"
        variant="outlined"
        value={this.props.row.title}
        onChange={(event) => this.props.handleChangeFor(event,this.props.row.id)}
        className={classes.input}
        fullWidth
        multiline
      />
      <TextField
        margin="dense"
        id="content"
        name="content"
        label="Content"
        type="text"
        variant="outlined"
        value={this.props.row.content}
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

export default connect(mapReduxStateToProps)(withStyles(styles)(FreeformEditComponent));