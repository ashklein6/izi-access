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
import Button from '@material-ui/core/Button';

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

  render() {
    const { classes } = this.props;

    return (
    
      <Paper className={classes.rootTable}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>First Name</CustomTableCell>
              <CustomTableCell>Last Name</CustomTableCell>
              <CustomTableCell>Email</CustomTableCell>
              <CustomTableCell>Level</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.users.map((row,index) => {
            return (
              <TableRow key={row.index}>
                <CustomTableCell className={classes.centerText} component="th" scope="row">
                {row.firstname}
                </CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.lastname}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.email}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.access_type}</CustomTableCell>
                <CustomTableCell className={classes.centerText} component="th" scope="row">
                  <Button className={classes.editBtn} size="small" variant="contained" onClick={() => this.props.addAccess(row)}>GIVE ACCESS</Button>
                </CustomTableCell>
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
  width: '100%',
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