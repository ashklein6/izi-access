import React, { Component } from 'react';
import { connect } from 'react-redux';

import { HashLink as Link } from 'react-router-hash-link';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import { element } from 'prop-types';


const styles = {
  sideBar: {
    height: '100vh',
    backgroundColor: '#ccc',
    textAlign: 'center',
  },
  report: {
    height: '100vh',
  },
  mainInfo: {
    textAlign: 'center',
    height: '35vh'
  },
  header: {
    margin: '50px 0px 25px 0px'
  },
  subHeader: {
    marginBottom: '15px'
  },
  dashboardBtn: {
    margin: '15px 0px',
    justifyContent: 'center',
  },
  list: {
    paddingTop: '0px'
  },
  middleDivider: {
    margin: '25px auto',
    width: '90%'
  },
  content: {
    textAlign: 'left',
    margin: 'auto',
    width: '85%',
    height: '55vh',
    overflow: 'auto'
  },
  paragraph: {
    margin: '0px 5px 50px 5px',
    textIndent: '25px'
  }
};

const scrollWithOffset = (element, offset) => {
  const elementPosition = element.offsetTop - offset;
  console.log('element:', element, 'offset:', offset)
  element.scrollIntoView({
    block: 'start',
    behavior: 'smooth'
  });
}

class View360 extends Component {

  state = {

  };

  // will navigate to /manage360s
  toManage360s = (event) => {
    event.preventDefault();
    this.props.history.push('/manage360s');
  }
  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0}>
        <Grid className={classes.sideBar} item xs={2}>
          <Button
            className={classes.dashboardBtn} 
            variant="contained"
            onClick={this.toManage360s}
          >
            Return to Dashboard
          </Button>
          <Divider />

          <List className={classes.list}>
            <Link smooth to="#goal-assessment"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>Goals Assessment</Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#dashboard"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>Dashboard</Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#360report"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>360 Report</Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#analysis"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>
                  Analysis &amp; Recommendations
                </Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#demo-data"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>
                  Demo Data
                </Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#sticky-stats"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>
                  Sticky Stats &amp; Event Materials
                </Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#mindstorm"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>
                  Raw Mindstorm Discussions
                </Typography>
              </ListItem>
            </Link>
            <Divider />

            <Link smooth to="#sign-in-sheets"
              scroll={el => scrollWithOffset(el, 150)}
            >
              <ListItem button>
                <Typography>
                  Raw Sign-In Sheets
                </Typography>
              </ListItem>
            </Link>
            <Divider />

          </List>
        </Grid>
        <Grid className={classes.report} item xs={10}>
          <section className={classes.mainInfo}>
            <Typography variant="h2" className={classes.header}>360 Name</Typography>
            <Typography variant="h5" className={classes.subHeader}>Client</Typography>
            <Typography variant="h5" className={classes.subHeader}>Location</Typography>
            <Typography variant="h5" className={classes.subHeader}>Date</Typography>
            <Divider className={classes.middleDivider} />
          </section>
          <section className={classes.content}>
            <Typography variant="h5" className={classes.subHeader} id="goal-assessment">Goals Assessment</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="dashboard">Dashboard</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="360report">360 Report</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
                <br/>
                <br/>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="analysis">Analysis &amp; Recommendations</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="demo-data">Demo Data</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="sticky-stats">Sticky Stats &amp; Event Materials</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="mindstorm">Raw Mindstorm Discussions</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="sign-in-sheets">Raw Sign-In Sheets</Typography>
            <div className={classes.paragraph}>
              <Typography>
                Ut vel ipsum porttitor, varius nisl eget, suscipit leo. Maecenas mollis orci sagittis, vehicula ante ac, aliquet libero. Vivamus finibus finibus semper. 
                Praesent convallis arcu sapien, quis porttitor magna dapibus ac. Suspendisse facilisis ut felis et mattis. Duis et sem ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                Maecenas malesuada sem vitae urna pretium, id auctor neque vulputate. Proin sed urna ac tortor volutpat hendrerit sed in massa. Nunc varius neque eget nibh fringilla, a tincidunt nibh mollis. 
                Aenean condimentum porta felis sed vestibulum. Donec placerat purus urna, vel consectetur libero rutrum sit amet. Vestibulum egestas sapien sed eros pellentesque, at malesuada dolor tempor. 
                Vestibulum id libero vitae leo vehicula mattis. Etiam ante magna, rutrum at suscipit tempus, efficitur eu turpis. Sed in magna sed leo pretium rutrum eget eleifend risus.
                <br/>
                <br/>
                Nullam sodales leo nec viverra semper. Fusce suscipit porttitor molestie. Phasellus blandit ut diam vel tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean molestie dui quis lectus tempor, a laoreet mi blandit. Curabitur quis elit mauris. Ut sollicitudin cursus volutpat. Donec sodales consectetur tincidunt. 
                Duis posuere auctor risus. Donec sit amet ante urna.
              </Typography>
            </div>
          </section>
        </Grid>
      </Grid>
    );
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(View360));