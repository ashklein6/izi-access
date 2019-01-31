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
import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';
import TableSortLabel from '@material-ui/core/TableSortLabel';

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
  { id: 'firstname', numeric: true, disablePadding: false, label: 'First Name' },
  { id: 'lastname', numeric: true, disablePadding: false, label: 'Last Name' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'access_type', numeric: true, disablePadding: false, label: 'Level' },
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
          <CustomTableCell width="20%" >Actions</CustomTableCell>
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

class TableUsers extends Component {

  state = {
    order: 'desc',
    orderBy: '',
    page: 0,
    rowsPerPage: 10, // rowsPerPage is the initial default # of IZIs in table
  }

  clearRequest = (id) => {
    this.props.dispatch({type: 'DELETE_PENDING_REQUEST', payload: id});
  };

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
            {stableSort(this.props.users, getSorting(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map(row => {
              return (
                <TableRow key={row.id}>
                  <CustomTableCell className={classes.centerText} component="th" scope="row">{row.firstname}</CustomTableCell>
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

        {/* pagination controls will render if there are more than 10 IZIs */}
        {this.props.users.length > 10 &&
        <TablePagination
          rowsPerPageOptions={[10, 15, 25]} // dropdown select sets the # of IZIs displayed
          component="div"
          count={this.props.users.length}
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