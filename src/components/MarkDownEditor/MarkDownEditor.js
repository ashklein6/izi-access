import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import "./MarkDownEditor.css";

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// InputCode Component
class InputCode extends Component {

  handleChange = (event) => {
    const { onInputChange } = this.props;
    onInputChange(event.target.value);
  }

  render() {
    const { value } = this.props;
    return (
      <textarea
        className={"editor"}
        id="editor"
        value={value}
        onChange={this.handleChange}
        spellCheck="false"
      />
    );
  }
}

function MarkDownOutput(props) {
  const { display } = props;
  return (
    <ReactMarkdown
      source={display}
      skipHtml={false}
      escapeHtml={false}
    />
  );
}

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
      <div>
        <div className={classes.container}>

        {/* Mark Down Editor Section */}
          <section>
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
          </section>

          {/* Mark Down Preview Section */}
          {/* <div>
            <div className="titles">
              <h2>Previewer</h2>
            </div>
            <div className="preview-area">
              <MarkDownOutput 
                display={input} 
              />
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    margin: 'auto'
  },
  inputContainer: {
    backgroundColor: '#7d52a1',
    width: '100%',
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
  }
}
export default (withStyles(styles)(MarkDownEditor));
