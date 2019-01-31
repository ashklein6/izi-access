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

function asc(a, b, orderBy) {
  if (b[orderBy] > a[orderBy]) {
    return -1;
  }
  if (b[orderBy] < a[orderBy]) {
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
  return order === 'asc' ? (a, b) => asc(a, b, orderBy) : (a, b) => -asc(a, b, orderBy);
}

const tableHeadRows = [
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
    const { order, orderBy } = this.props;

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
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
};

class CustomizedTable extends Component {

  state = {
    order: 'desc',
    orderBy: '',
    page: 0,
    rowsPerPage: 10, // rowsPerPage is the initial default # of IZIs in table
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

  // for pagination // sorts columns onClick of corresponding th
  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'asc';
    if (this.state.orderBy === property && this.state.order === 'asc') {
      order = 'desc';
    }
    this.setState({ order, orderBy });
  };

  // for pagination // displays the next page of the table
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  // for pagination // sets the number of rows displayed in table
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
  const { classes } = this.props;
  const { order, orderBy, rowsPerPage, page } = this.state;

  return (
    <Paper className={classes.rootTable}>
      <Table className={classes.table}>
        <EnhancedTableHead 
          order={order}
          orderBy={orderBy}
          onRequestSort={this.handleRequestSort}
        />
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

      {/* pagination controls will render if there are more than 10 IZIs */}
      {this.props.rows.length > 9 &&
      <TablePagination
        rowsPerPageOptions={[10, 15, 25]} // dropdown select sets the # of IZIs displayed
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
      />}
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