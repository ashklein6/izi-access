import React, { Component } from 'react';
import { connect } from 'react-redux';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
import Close from '@material-ui/icons/Close';

let root = document.querySelector(':root');
const colors = {
  purple: window.getComputedStyle(root).getPropertyValue('--main-purple'),
  purpleHover: window.getComputedStyle(root).getPropertyValue('--main-purple-hover'),
  red: window.getComputedStyle(root).getPropertyValue('--main-red'),
  redHover: window.getComputedStyle(root).getPropertyValue('--main-red-hover'),
  pink: window.getComputedStyle(root).getPropertyValue('--main-pink'),
  pinkHover: window.getComputedStyle(root).getPropertyValue('--main-pink-hover'),
  orange: window.getComputedStyle(root).getPropertyValue('--main-orange'),
  orangeHover: window.getComputedStyle(root).getPropertyValue('--main-orange-hover'),
};

// Cleanly style table cells within Material-UI
const CustomTableCell = withStyles(theme => ({
  head: {
    fontSize: '1rem',
    backgroundColor: colors.orange,
    color: 'white',
    padding: 10,
    textAlign: 'center'
  },
  body: {
    padding: 5,
  },
}))(TableCell);

class TableUsers extends Component {

  clearRequest = (id) => {
    this.props.dispatch({type: 'DELETE_PENDING_REQUEST', payload: id});
  };

  render() {
    const { classes } = this.props;

    return (
    
      <Paper className={classes.rootTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              {this.props.headers.map( (header, index) => 
                  <CustomTableCell width={this.props.width[index]}>{header}</CustomTableCell>
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(row => {
            return (
              <TableRow key={row.id}>
                {this.props.cellVariables.map(( variable, index ) => 
                  <CustomTableCell width={this.props.width[index]} component="th" scope="row" className={this.props.className[index]}>
                    {/* Check if value is truthie. If true, print 'yes' */}
                    {row[variable] === true ? <CheckCircleOutline className={classes.iconColored}/> : 
                    // Next, check if value is falsie. If not, print the value
                    ((row[variable] === false || row[variable] === null) ? <Close /> : row[variable])}
                  </CustomTableCell>
                )}
              </TableRow>
            );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
};

const styles = {
 root: {
  width: '100%',
 },
 rootTable: {
  alignItems: 'center',
  overflowX: 'scroll'

 },
 centerText: {
  textAlign: 'center'
 },
 colorBar: {
  // needs to be here for custom-css switch to work.
 },
 colorChecked: {
  // needs to be here for custom-css switch to work.
 },
 colorSwitchBase: {
  color: colors.orange,
  '&$colorChecked': {
   color: colors.orange,
   '& + $colorBar': {
    backgroundColor: colors.orange
   }
  }
 },
 details: {
  alignItems: 'center',
 },
 heading: {
  fontSize: "1.5rem",
 },
//  editBtn: {
//   float: 'right'
//  },
 icon: {
  verticalAlign: 'bottom',
  height: 20,
  width: 20,
 },
 iconColored: {
  color: colors.pink
 },
 status: {
  flexBasis: '25.00%',
  alignItems: 'center',
  justifyContent: 'flex-end',
  display: 'flex'
 },
 subheading: {
  fontSize: '1rem',
  color: 'green',
  fontWeight: 'bold'
 },
 summary: {
  alignItems: 'center'
 },
 table: {
  minWidth: 700
 },
 title: {
  flexBasis: '75.00%',
 },
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

TableUsers.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(TableUsers));