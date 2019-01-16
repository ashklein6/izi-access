import React, { Component } from 'react';
import PropTypes from 'prop-types';
import colors from '../App/colors';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import moment from 'moment';
import {
  withRouter
} from 'react-router-dom';

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

class CustomizedTable extends Component {

  state = {

  }

  goToGenerate360 = (id) => {
    this.props.history.push({
      pathname: `/generate360/${id}`,
    });
  }

  goToView360 = (id) => {
    this.props.history.push({
      pathname: `/view360/${id}`,
    });
  }

  render() {
  const { classes } = this.props;

  return (
    <Paper className={classes.rootTable}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell width="20%" >Actions</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Client</CustomTableCell>
            <CustomTableCell>Location</CustomTableCell>
            <CustomTableCell>Date</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.rows.map(row => {
            return (
              <TableRow key={row.id}>
                <CustomTableCell width="20%" className={classes.centerText} component="th" scope="row">
                  <Button onClick={() => this.goToView360(row.id)} className={classes.button} variant="contained">View</Button>

                  {!this.props.homeVersion && <Button onClick={() => this.goToGenerate360(row.id)} className={classes.button} variant="contained">Edit</Button>}

                </CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.name}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.client}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.location}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{moment(row.date).format('ll')}</CustomTableCell>
                <CustomTableCell className={classes.centerText}>{row.category}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
        }
}

const styles = {
  rootTable: {
   width: '95%',
   overflowX: 'scroll',
   margin: '0px auto 100px'
  },
  button: {
    marginRight: 5,
    marginLeft: 5
  },
  centerText: {
   textAlign: 'center'
  },
  table: {
   minWidth: 700
  },
 };

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CustomizedTable));