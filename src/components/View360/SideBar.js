import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
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
let sectionInfo = [
  { title: 'Goals Assessment', id: '#goal-assessment' },
  { title: 'DashBoard', id: '#dashboard' },
  { title: '360 Report', id: '#360report' },
  { title: 'Analysis & Recommendations', id: '#analysis' },
  { title: 'Demo Data', id: '#demo-data' },
  { title: 'Sticky Stats & Event Materials', id: '#sticky-stats' },
  { title: 'Raw Mindstorm Discussions', id: '#mindstorm' },
  { title: 'Raw Sign-In Sheets', id: '#sign-in-sheets' }
]

class SideBar extends Component {

  state = {
  };

  render() {
    const { classes } = this.props;

    return (
      <List className={classes.list}>
        {sectionInfo.map( sectionId => 
        <Link smooth to={sectionId.id}
          scroll={el => scrollWithOffset(el, 150)}
        >
          <ListItem button>
            <Typography>{sectionId.title}</Typography>
          </ListItem>
          <Divider />
        </Link>
        )}
      </List>
    );
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(SideBar));