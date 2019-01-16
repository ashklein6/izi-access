import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ViewUser from '../ManageUsers/ViewUserDialog/ViewUser';
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
              <CustomTableCell>First Name</CustomTableCell>
              <CustomTableCell>Last Name</CustomTableCell>
              <CustomTableCell>Email</CustomTableCell>
              <CustomTableCell>Level</CustomTableCell>
              <CustomTableCell>Actions</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.users.map(row => {
            return (
              <TableRow key={row.id}>
                <CustomTableCell className={classes.centerText} component="th" scope="row">
                {row.firstname}
                </CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.lastname}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.email}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.access_type}</CustomTableCell>
                <CustomTableCell className={classes.centerText} component="th" scope="row">
                  <ViewUser user={row}/>
                  {row.request_id &&
                  <Button className={classes.editBtn} size="small" variant="contained" onClick={() => this.clearRequest(row.request_id)}>DELETE</Button>}
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
 rootTable: {
  width: '100%',
  overflowX: 'scroll'
 },
 centerText: {
  textAlign: 'center'
 },
 table: {
  minWidth: 700
 },
};

const mapReduxStateToProps = (reduxState) => ({
 reduxState
});

TableUsers.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(TableUsers));