import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import MarkDownOutput from './MarkdownOutput';
import InputCode from './InputCode';
import colors from '../App/colors';
import "./MarkDownEditor.css";

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const defaultInput = "\n# Header 1\n## Header 2\n### Header 3\n ![marnita's table logo](https://carepharmaceuticals.com.au/wp-content/uploads/sites/19/2018/02/placeholder-600x400.png)\n \n**Blockquotes:**\n>This is a blockquote \n\n**List Items**\n * Item 1\n * Item 2\n * Item 3\n\n** Tables: ** \n\n| Table Header  | Table Header |\n| ------- | ------- |\n| Table Cell | ✔ |\n| Table Cell | ✔ |\n| Table Cell | ✔ |";

// MainDisplay Component
class MarkDownEditor extends Component {

  state = {
    input: defaultInput,
    maximized: { editor: false, preview: false }
  }

  // will change the input state and preview if any change in the text-area is detected
  handleChangeTextInput = (newInput) => {
    this.setState({ input: newInput });
  }

  render() {
    const { input } = this.state;
    const { classes } = this.props;
    return (
        <div className={classes.container}>

        {/* Mark Down Editor Section */}
          {/* <section>
            <div className={classes.headerDiv}>
              <Typography className={classes.header} variant="h5">Editor</Typography>
            </div>
            <div className={classes.inputContainer}>
              <InputCode
              className="editor"
                value={input}
                onInputChange={this.handleChangeTextInput}
              />
            </div>
          </section> */}
          {/* <Button className={classes.submitButton} variant="contained">Submit</Button> */}


          {/* Mark Down Preview Section */}
          <div>
            <div className={classes.headerDiv}>
              <Typography className={classes.header} variant="h5">Previewer</Typography>
            </div>
            <div className={classes.inputContainer}>
              <MarkDownOutput 
                display={input} 
              />
            </div>
          </div>
        </div>
    );
  }
}

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    marginBottom: 50
  },
  inputContainer: {
    padding: 15,
    backgroundColor: colors.lightGrey,
    width: 'calc(100% - 30px)',
    overflow: 'auto',
  },
  // editor: {
  //   background: '#f2f2f2',
  //   padding: 15,
  //   fontSize: '15px',
  //   width: '100%',
  //   height: '100vh',
  //   resize: 'none',
  //   border: 'none'
  // },
  header: {
    color: '#fff'
  },
  headerDiv: {
    textAlign: 'center',
    backgroundColor: '#7d52a1',
    color: '#fff',
    margin: 0,
    padding: 15,
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    padding: 10,
    margin: 10,
  }
}
export default (withStyles(styles)(MarkDownEditor));
