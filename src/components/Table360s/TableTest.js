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
import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import moment from 'moment';
import { withRouter } from 'react-router-dom';

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

// let counter = 0;
// function createData(name, calories, fat, carbs, protein) {
//   counter += 1;
//   return { id: counter, name, calories, fat, carbs, protein };
// }

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const tableHeadRows = [
  // { id: 'action', numeric: false, disablePadding: true, label: 'Actions' },
  { id: 'name', numeric: true, disablePadding: false, label: 'Name' },
  { id: 'client', numeric: true, disablePadding: false, label: 'Client' },
  { id: 'location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'date', numeric: true, disablePadding: false, label: 'Date' },
  { id: 'category', numeric: true, disablePadding: false, label: 'Category' },
];

class EnhancedTableHead extends React.Component {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

    return (
      <TableHead>
        <TableRow>
          <CustomTableCell width="20%" >Actions</CustomTableCell>
          {tableHeadRows.map( row => (
            <CustomTableCell
              key={row.id}
              align={row.numeric ? 'right' : 'left'}
              padding={row.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === row.id ? order : false}
            >
              <Tooltip
                title="Sort"
                placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === row.id}
                  direction={order}
                  onClick={this.createSortHandler(row.id)}
                >
                  {row.label}
                </TableSortLabel>
              </Tooltip>
            </CustomTableCell>
            ),
            this,
          )}
        </TableRow>
      </TableHead>
    );
  }
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

class CustomizedTable extends Component {

  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    // data: [
    //   createData('Cupcake', 305, 3.7, 67, 4.3),
    //   createData('Donut', 452, 25.0, 51, 4.9),
    //   createData('Eclair', 262, 16.0, 24, 6.0),
    //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //   createData('Gingerbread', 356, 16.0, 49, 3.9),
    //   createData('Honeycomb', 408, 3.2, 87, 6.5),
    //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //   createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //   createData('KitKat', 518, 26.0, 65, 7.0),
    //   createData('Lollipop', 392, 0.2, 98, 0.0),
    //   createData('Marshmallow', 318, 0, 81, 2.0),
    //   createData('Nougat', 360, 19.0, 9, 37.0),
    //   createData('Oreo', 437, 18.0, 63, 4.0),
    // ],
    page: 0,
    rowsPerPage: 1,

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

  // for pagination
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  // for pagination
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  // for pagination
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
  const { classes } = this.props;
  const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, this.props.rows.length - page * rowsPerPage);

  return (
    <Paper className={classes.rootTable}>
      <Table className={classes.table}>
        <EnhancedTableHead 
          numSelected={selected.length}
          order={order}
          orderBy={orderBy}
          onSelectAllClick={this.handleSelectAllClick}
          onRequestSort={this.handleRequestSort}
          rowCount={this.props.rows.length}
        />
        {/* <TableHead>
          <TableRow>
            <CustomTableCell width="20%" >Actions</CustomTableCell>
            <CustomTableCell>Name</CustomTableCell>
            <CustomTableCell>Client</CustomTableCell>
            <CustomTableCell>Location</CustomTableCell>
            <CustomTableCell>Date</CustomTableCell>
            <CustomTableCell>Category</CustomTableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {stableSort(this.props.rows, getSorting(order, orderBy))
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(row => {
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
      <TablePagination
        rowsPerPageOptions={[1, 2, 3]}
        component="div"
        count={this.props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        backIconButtonProps={{
          'aria-label': 'Previous Page',
        }}
        nextIconButtonProps={{
          'aria-label': 'Next Page',
        }}
        onChangePage={this.handleChangePage}
        onChangeRowsPerPage={this.handleChangeRowsPerPage}
      />
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