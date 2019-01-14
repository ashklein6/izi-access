import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class ThreesixtyInformationPublishDialog extends Component {

 state = {

 };

 render() {
   const { classes } = this.props;

   return (
     <React.Fragment>
      <Dialog
        open={this.props.open}
        onClose={this.props.handleClickClose}
        aria-labelledby="info-publish-dialog"
        scroll="paper"
        fullWidth
        maxWidth="lg"
        classes={{paper: classes.paper}}
      >
        <DialogTitle id="info-publish-dialog">Publish 360</DialogTitle>
        <DialogContent id="info-publish-dialog-content" ref={(el) => { this.scroll = el; }}>
          <DialogContentText>
            Are you sure you want to publish this 360? Publishing will make this 360 available 
            on the MarnitaConnect homepage. Make sure that your sections are accurately set
            to public/private before completing this action.
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.spaceBetween}>
          <div>
          </div>
          <div>
            <Button onClick={this.props.handleClickClose} color="primary">
              Cancel
            </Button>
            <Button variant="contained" onClick={this.props.handleSave} color="primary">
              Publish
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </React.Fragment>
   );
 }
};

const styles = {
  paper: {
    width: 500
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

export default connect(mapReduxStateToProps)(withStyles(styles)(ThreesixtyInformationPublishDialog));