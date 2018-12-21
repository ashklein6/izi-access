import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../App/colors';
import SideBar from './SideBar';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const sectionInfo = [
  { actionType: 'FETCH_GOALS', section: 'goalsAssessment' },
  { actionType: 'FETCH_DASHBOARD', section: 'dashboard' },
  { actionType: 'FETCH_THREESIXTY_REPORTS', section: 'threesixty_reports' },
  { actionType: 'FETCH_ANALYSIS_RECOMMENDATION', section: 'analysis_recommendation' },
  { actionType: 'FETCH_DEMOGRAPHIC', section: 'demographics' },
  { actionType: 'FETCH_CIRCLE_SHARE', section: 'circle_share' },
  { actionType: 'FETCH_QUESTION_SET', section: 'question_set' },
  { actionType: 'FETCH_ORAL_REPORT', section: 'oral_report' },
]

class View360 extends Component {

  state = {
  };

  // navigates to /manage360s
  toManage360s = (event) => {
    event.preventDefault();
    this.props.history.push('/manage360s');
  }

  componentDidMount() {
    for (let entry of sectionInfo) {
      this.props.dispatch({ type: entry.actionType, payload: {section: entry.section, current360Id: 1} });
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={0}>
        <Grid className={classes.sideBar} item xs={2}>
          <Button
            className={classes.manage360Btn} 
            variant="contained"
            onClick={this.toManage360s}
          >
            Return to 360 Manager
          </Button>
          <Divider />
          <SideBar />
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
            <Paper className={classes.rootTable}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell width="25%">Description</CustomTableCell>
                  <CustomTableCell>Desired</CustomTableCell>
                  <CustomTableCell>Delivered</CustomTableCell>
                  <CustomTableCell>Difference</CustomTableCell>
                  <CustomTableCell>Percent</CustomTableCell>
                  <CustomTableCell>Comments</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.reduxState.current360.goalsAssessment.map(row => {
                  return (
                    <TableRow key={row.id}>
                      <CustomTableCell component="th" scope="row" width="25%">
                        {row.description}
                      </CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.desired}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.delivered}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.difference}</CustomTableCell>
                      <CustomTableCell className={classes.centerText}>{row.percent}%</CustomTableCell>
                      <CustomTableCell>{row.comments}</CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="dashboard">Dashboard</Typography>
            <div className={classes.paragraph}>
              <Typography>
                {JSON.stringify(this.props.reduxState.current360.dashboard)}
              </Typography>
            </div>

            <Typography variant="h5" className={classes.subHeader} id="360report">360 Report</Typography>
            <div className={classes.paragraph}>
              <Typography>
              {JSON.stringify(this.props.reduxState.current360.threesixty_reports)}
              </Typography>
              <Typography>
              {JSON.stringify(this.props.reduxState.current360.oral_reports)}
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
  manage360Btn: {
    margin: '15px 0px',
    justifyContent: 'center',
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

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(View360));