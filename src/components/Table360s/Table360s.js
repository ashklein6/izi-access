import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

// const CustomTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const styles = theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing.unit * 3,
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   row: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// });

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

  goToGenerate360 = () => {
    this.props.history.push('/generate360');
  }

  render() {
  const { classes } = this.props;

  return (
    <Paper className={classes.rootTable}>
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
          {this.props.rows.map(row => {
            return (
              <TableRow key={row.id}>
                <CustomTableCell className={classes.centerText} component="th" scope="row">
                  <Button variant="contained">View</Button>

                  {!this.props.homeVersion && <Button onClick={this.goToGenerate360} variant="contained">Edit</Button>}

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
  root: {
   width: '100%',
  },
  rootTable: {
   width: '95%',
   overflowX: 'scroll',
   margin: '0px auto 100px'
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

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(CustomizedTable));