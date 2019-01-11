import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';

class TrueFalse extends Component {

  // componentDidMount(){
  //   console.log('DATADATADATA', this.props.data);
  // }

  render() {
    return (
        <div id="trueFalse">
            <Pie
                data={{
                    labels: ['Yes', 'No'],
                    datasets: [
                        {
                            data: 
                            [1,2]
                            // this.props.data
                        ,
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
                    display:true,
                    position: 'bottom'
                }
            }}
        />
        </div>
    )}
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(TrueFalse);