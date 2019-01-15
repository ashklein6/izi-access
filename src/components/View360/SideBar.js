import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    paddingTop: '0px'
  },
};

const scrollWithOffset = (element, offset) => {
  console.log('element:', element, 'offset:', offset)
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

// const sectionIds = ['#goal-assessment', '"#dashboard"', '#360report', '#analysis', '#demo-data', '#sticky-stats', '#mindstorm', '#sign-in-sheets'];
// const sectionTitles = ['Goals Assessment', 'Dashboard', '360report', 'Analysis & Recommendations', 'Demo Data', 'Sticky Stats & Event Materials', 'Raw Mindstorm Discussions', 'Raw Sign-In Sheets'];

// info for sidebar links
// const sectionInfo = [
//   { title: 'Goals Assessment', id: '#goal-assessment' },
//   { title: 'DashBoard', id: '#dashboard' },
//   { title: '360 Report', id: '#360report' },
//   { title: 'Analysis & Recommendations', id: '#analysis' },
//   { title: 'Demo Data', id: '#demo-data' },
//   { title: 'Sticky Stats & Event Materials', id: '#sticky-stats' },
// ]

class SideBar extends Component {

  state = {
    selectedIndex: 0,
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ 
      selectedIndex: index 
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        {/* {sectionInfo.map( (sectionId, index) => 
        <Link key={sectionId.id} smooth to={sectionId.id}
          scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            key={index}
            selected={index === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, index)}
          >
            <Typography>{sectionId.title}</Typography>
          </MenuItem>
          <Divider />
        </Link>
        )} */}
        {// Check if section is published
        this.props.reduxState.current360.info[0].goals_published && 
        // Then check if section is public
        (this.props.reduxState.current360.info[0].goals_public ||
        // OR if user is a client with access
        (this.props.reduxState.userControls.user.some(e => e.id === String(this.state.current360Id))
        // OR if user is an employee or admin
        || this.props.reduxState.user.id >= 4))?
        <Link key="#goals-assessment" smooth to="#goals-assessment"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'goals' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, 'goals')}
          >
            <Typography>{'Goals Assessment'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
        {// Check if section is published
        this.props.reduxState.current360.info[0].dashboard_published && 
        // Then check if section is public
        (this.props.reduxState.current360.info[0].dashboard_public ||
        // OR if user is a client with access
        (this.props.reduxState.userControls.user.some(e => e.id === String(this.state.current360Id))
        // OR if user is an employee or admin
        || this.props.reduxState.user.id >= 4)) ?
        <Link key="#dashboard" smooth to="#dashboard"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'dashboard' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, 'dashboard')}
          >
            <Typography>{'Dashboard'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
        {// Check if section is published
        this.props.reduxState.current360.info[0].threesixty_reports_published && 
        // Then check if section is public
        (this.props.reduxState.current360.info[0].threesixty_reports_public ||
        // OR if user is a client with access
        (this.props.reduxState.userControls.user.some(e => e.id === String(this.state.current360Id))
        // OR if user is an employee or admin
        || this.props.reduxState.user.id >= 4)) ?
        <Link key="#360report" smooth to="#360report"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'360report' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, '360report')}
          >
            <Typography>{'360 Report'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
        {// Check if section is published
        this.props.reduxState.current360.info[0].analysis_recommendation_published && 
        // Then check if section is public
        (this.props.reduxState.current360.info[0].analysis_recommendation_public ||
        // OR if user is a client with access
        (this.props.reduxState.userControls.user.some(e => e.id === String(this.state.current360Id))
        // OR if user is an employee or admin
        || this.props.reduxState.user.id >= 4)) ?
        <Link key="#analysis" smooth to="#analysis"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'analysisRec' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, 'analysisRec')}
          >
            <Typography>{'Analysis & Recommendations'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
        {// Check if section is published
        this.props.reduxState.current360.info[0].demographics_published && 
        // Then check if section is public
        (this.props.reduxState.current360.info[0].demographics_public ||
        // OR if user is a client with access
        (this.props.reduxState.userControls.user.some(e => e.id === String(this.state.current360Id))
        // OR if user is an employee or admin
        || this.props.reduxState.user.id >= 4)) ?
        <Link key="#demo-data" smooth to="#demo-data"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'demoData' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, 'demoData')}
          >
            <Typography>{'Demographic Data'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
        {// Check if section is published
        this.props.reduxState.current360.info[0].demographics_published ?
        <Link key="#demo-data-charts" smooth to="#demo-data-charts"
        scroll={el => scrollWithOffset(el, 150)}
        >
          <MenuItem
            selected={'demoDataCharts' === this.state.selectedIndex}
            onClick={event => this.handleMenuItemClick(event, 'demoDataCharts')}
          >
            <Typography>{'Demographic Data Charts'}</Typography>
          </MenuItem>
          <Divider />
        </Link> : null }
      </List>
    );
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(SideBar));