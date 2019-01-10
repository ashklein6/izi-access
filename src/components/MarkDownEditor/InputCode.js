import React, { Component } from "react";
import "./MarkDownEditor.css";

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
        className="editor"
        id="editor"
        value={value}
        onChange={this.handleChange}
        spellCheck="false"
      />
    );
  }
}

export default InputCode;