import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData( calories, fat, carbs, protein, tacos) {
  id += 1;
  return { id, calories, fat, carbs, protein, tacos };
}

const rows = [
  createData('Health Matters', 'SCHCSC', 'Scott County', '10-24-2017', 'Health'),
  createData('Health Matters', 'SCHCSC', 'Scott County', '10-24-2017', 'Health'),
  createData('Health Matters', 'SCHCSC', 'Scott County', '10-24-2017', 'Health'),
  createData('Health Matters', 'SCHCSC', 'Scott County', '10-24-2017', 'Health'),
  createData('Health Matters', 'SCHCSC', 'Scott County', '10-24-2017', 'Health'),
];

function CustomizedTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell>Actions</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Client</CustomTableCell>
            <CustomTableCell>Location</CustomTableCell>
            <CustomTableCell>Date</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow className={classes.row} key={row.id}>
                <CustomTableCell component="th" scope="row">
                  <Button>View</Button>
                  <Button>Edit</Button>
                </CustomTableCell>
                <CustomTableCell>{row.calories}</CustomTableCell>
                <CustomTableCell>{row.fat}</CustomTableCell>
                <CustomTableCell>{row.carbs}</CustomTableCell>
                <CustomTableCell>{row.protein}</CustomTableCell>
                <CustomTableCell>{row.tacos}</CustomTableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);