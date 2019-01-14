import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ReactLoading from 'react-loading';
import colors from '../App/colors';

class LoadingDialog extends Component {

 state = {

 };

 componentDidMount() {
    this.props.dispatch({ type: 'FETCH_360', payload: {current360Id: 1} })
 }

 render() {
   const { classes } = this.props;

   return (
     <React.Fragment>
      <Dialog
        open={this.props.reduxState.current360.loadingDialogOpen}
        aria-labelledby="info-publish-dialog"
        scroll="paper"
        fullWidth
        maxWidth="lg"
        classes={{paper: classes.paper}}
      >
        <DialogTitle id="info-publish-dialog" className={classes.center}>Loading 360</DialogTitle>
        <DialogContent id="info-publish-dialog-content" className={classes.center} ref={(el) => { this.scroll = el; }}>
          <ReactLoading type={'bubbles'} color={colors.pink} delay={0} height={100} width={100}/>
        </DialogContent>
      </Dialog>
    </React.Fragment>
   );
 }
};

const styles = {
  center: {
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  paper: {
    width: 300,
    height: 200,
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

export default connect(mapReduxStateToProps)(withStyles(styles)(LoadingDialog));