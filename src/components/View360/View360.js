import React, { Component } from 'react';
import { connect } from 'react-redux';
import colors from '../App/colors';
import { Pie } from 'react-chartjs-2';
import moment from 'moment';
import { Textfit } from 'react-textfit';
import SideBar from './SideBar';
import TableTemplate from './TableTemplate/TableTemplate';
import MarkDownOutput from '../MarkDownEditor/MarkdownOutput';
import LoadingDialog from './LoadingDialog';

// Material-UI
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class View360 extends Component {

  state = {
    current360Id: this.props.location.state.current360Id
  };

  // navigates to /manage360s
  back = (event) => {
    event.preventDefault();
    this.props.history.goBack();
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_360', payload: {current360Id: this.state.current360Id} });
    console.log('DATADTADTADTADT ', this.props.reduxState.current360);
  }

  render() {
    const { classes } = this.props;
    console.log('this.props.history.location:',this.props.location);

    return (
      <Grid container spacing={0}>
        <LoadingDialog />
        <Grid className={classes.sideBar} item xs={2}>
          <Button
            className={classes.manage360Btn} 
            variant="contained"
            onClick={this.back}
          >
            Return
          </Button>
          <Divider />
          <SideBar />
        </Grid>
        <Grid className={classes.report} item xs={10}>
          <Textfit forceSingleModeWidth={false} className={classes.header}>
            {this.props.reduxState.current360.info[0].name}
          </Textfit>
          {/* <Typography variant="h2" className={classes.header}></Typography> */}
          <section className={classes.mainReportInfo}>
            <Typography className={classes.subHeader}>{this.props.reduxState.current360.info[0].client}</Typography>
            <Typography className={classes.subHeader}>{this.props.reduxState.current360.info[0].location}</Typography>
            <Typography className={classes.subHeader}>{moment(this.props.reduxState.current360.info[0].date).format('ll')}</Typography>
            <Divider className={classes.middleDivider} />
          </section>
          {this.props.reduxState.current360.info[0].goals_published ?
          <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="goals-assessment" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>            
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>Goals Assessment</Typography>
            </div>
            {/* section content */}
            <TableTemplate 
              headers={['Description', 'Desired', 'Delivered', 'Difference', 'Percent', 'Comments']} 
              width={['25%',null,null,null,null,null]}
              data={this.props.reduxState.current360.goalsAssessment} 
              className={[null,classes.centerText,classes.centerText,classes.centerText,classes.centerText,null]}
              cellVariables={['description', 'desired', 'delivered', 'difference', 'percent', 'comments']} 
            />
          </section> : null}
          {this.props.reduxState.current360.info[0].dashboard_published ?
          <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="dashboard" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>Dashboard</Typography>
            </div>
            {/* section content */}
            <TableTemplate 
              headers={['Description', 'Details']} 
              width={[null,null]}
              data={this.props.reduxState.current360.dashboard} 
              className={[null,null]}
              cellVariables={['row_title', 'row_info']} 
            />
          </section> : null}
          {this.props.reduxState.current360.info[0].threesixty_reports_published ?
          <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="360report" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>360 Report</Typography>
            </div>
            {/* section content */}
            <div className={classes.threesixtyReport}>
              <Typography variant="h5" className={classes.header5}>The 360 | Event Overview</Typography>
                <Typography variant="h6" className={classes.header6}>Demographics</Typography>
                  <div className={classes.paragraph}>
                    {this.props.reduxState.current360.threesixty_reports.map((row, index) => 
                      <MarkDownOutput display={row.demographic} key={index}/>)}
                  </div>
                <Typography variant="h6" className={classes.header6}>The 360 | Summary, Overview</Typography>
                  <div className={classes.paragraph}>
                    {this.props.reduxState.current360.threesixty_reports.map((row, index) => 
                      <MarkDownOutput display={row.summary} key={index}/>)}
                  </div>
              <Typography variant="h5" className={classes.header5}>Mindstorm Themes &amp; Analysis</Typography>
                <Typography variant="h6" className={classes.header6}>Overview | Methodology</Typography>
                  <div className={classes.paragraph}>
                    {this.props.reduxState.current360.threesixty_reports.map((row, index) => 
                      <MarkDownOutput display={row.demographic} key={index}/>)}
                  </div>
                <div className={classes.paragraph}>
                  {this.props.reduxState.current360.question_set.map((row, index) => 
                    <React.Fragment key={`question-set-${index}`}>
                      <Typography variant="h6" className={classes.header6}>Question Importance Number {index + 1}</Typography>
                      <MarkDownOutput display={row.breakdown} key={index}/>
                    </React.Fragment>
                  )}
                </div>
            </div>
          </section> : null }
          {this.props.reduxState.current360.info[0].analysis_recommendation_published ?
          <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="analysis" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>Analysis and Recommendations</Typography>
            </div>
              <Typography variant="h5" className={classes.header5}>Outreach Findings</Typography>
                <div className={classes.paragraph}>
                  {this.props.reduxState.current360.analysis_recommendation.map((row, index) => 
                    <MarkDownOutput display={row.findings} key={index}/>)}
                </div>
              <Typography variant="h5" className={classes.header5}>Recommendation</Typography>
                <div className={classes.paragraph}>
                {this.props.reduxState.current360.analysis_recommendation.map((row, index) => 
                    <MarkDownOutput display={row.recommendations} key={index}/>)}
                </div>
          </section> : null }
          {this.props.reduxState.current360.info[0].demographics_published ?
          <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="demo-data" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>IZI Demographic Data</Typography>
            </div>
            {/* section content */}
            <p className={classes.paragraph}>
              IZI Demo Key:<br></br>
              A - Plans to tell someone<br></br>
              B - First time at the Table<br></br>
              C - Interested in future conversations about preventing child abuse and neglect<br></br>
              D - Interested in future conversations about housing<br></br>
              E - Interested in future conversations about transportation<br></br>
              F - Interested in future conversations about education
            </p>
            <TableTemplate 
              headers={['Ethnic', 'Passion', 'Profession', 'Generation', 'Referral', 'Comments',
                        'A', 'B', 'C', 'D', 'E', 'F']} 
              width={['10%', '10%', '10%', '10%', null, null, null, null, null, null, null, null]}
              data={this.props.reduxState.current360.demographics} 
              className={[null,null]}
              cellVariables={['ethnicity','passion', 'profession','generation','referral','comments','plans_to_tell',
                        'first_time','child_abuse','housing','transportation','education']}
              interpretBoolean={true}
            />
            </section> : null }
            {this.props.reduxState.current360.info[0].demographics_published ?
            <section className={classes.section}>
            {/* anchor div for sidebar scroll placement */}
            <div style={{position: 'relative'}}>
              <div id="demo-data-charts" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            {/* sticky header for section */}
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>IZI Demographic Data Charts</Typography>
            </div>
            {/* <TrueFalse data={this.props.reduxState.current360.chart_data}/> */}
            {this.props.reduxState.current360.chart_data.map(data => (
              <div id="trueFalse" key={data.title}>
                <Pie
                  data={{
                    labels: ['Yes', 'No'],
                    datasets: [
                      {
                        data: 
                        data.data,
                        backgroundColor: [
                          'purple',
                          'red',
                        ]
                      }
                    ]
                  }}
                  height={50}
                  options={{
                    title:{
                      display:false,
                      text: 'Are you even good?',
                      fontSize:25
                    },
                    legend:{
                      display: data.legend,
                      position: 'left'
                    }
                  }}
                />
              </div>
            ))}
          </section> : null }
          {/* <section className={classes.section}>
            //anchor div for sidebar scroll placement
            <div style={{position: 'relative'}}>
              <div id="sticky-stats" style={{position: 'absolute', top: -80, left: 0}}></div>
            </div>
            //sticky header for section
            <div className={classes.sticky}>
              <Typography variant="h4" className={classes.sectionHeader}>Sticky Stats and Event Materials</Typography>
            </div>
            //section content
            <p className={classes.paragraph}>Sticky Stats will go here!</p>
          </section> */} 
        </Grid>
      </Grid>
    );
  }
};

const styles = {
  sideBar: {
    height: 'calc(100vh - 122px)',
    backgroundColor: '#ccc',
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center'
  },
  report: {
    height: 'calc(100vh - 122px)',
    overflowY: 'auto',
    overflowX: 'auto',
  },
  mainReportInfo: {
    textAlign: 'center',
    // height: '35vh',
  },
  header: {
    margin: '50px 0px 25px 0px',
    // position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    textAlign: 'center',
    padding: '10px',
    zIndex: '1050',
    color: colors.purple,
    fontWeight: 'bold',
    height: 60
  },
  header5: {
    margin: '0px 10px 0px 10px',
    textAlign: 'right',
    fontWeight: 'bold'
  },
  header6: {
    margin: '0px 10px 0px 10px',
    color: colors.red,
    textAlign: 'right',
    fontWeight: 'bold'
  },
  subHeader: {
    marginBottom: '15px',
    fontSize: '1.5rem'
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
    height: '100%',
    overflow: 'auto'
  },
  paragraph: {
    margin: '0px 10px 0px 10px',
    fontSize: '0.8125rem'
  },
  markDownEditorContainer: {
    width: '100%',
  },
  section: {
    paddingBottom: 20
  },
  sectionHeader: {
    padding: 10,
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: colors.purple
  },
  sticky: {
    // position: '-webkit-sticky',
    position: 'sticky',
    top: 80,
    backgroundColor: 'white',
    boxShadow: 'box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
  },
  textMargin: {
    margin: '0px 10px 0px 10px'
  }
};

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(withStyles(styles)(View360));