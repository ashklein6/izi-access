import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../../App/colors';

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
                  <CustomTableCell key={header} width={this.props.width[index]}>{header}</CustomTableCell>
                )}
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.data.map(row => {
            return (
              <TableRow key={row.id}>
                {this.props.cellVariables.map(( variable, index ) => 
                  <CustomTableCell key={variable} width={this.props.width[index]} component="th" scope="row" className={this.props.className[index]}>
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
 rootTable: {
  alignItems: 'center',
  overflowX: 'scroll'
 },
 centerText: {
  textAlign: 'center'
 },
 icon: {
  verticalAlign: 'bottom',
  height: 20,
  width: 20,
 },
 iconColored: {
  color: colors.pink
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