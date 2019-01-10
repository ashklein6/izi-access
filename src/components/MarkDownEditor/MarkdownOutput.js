import React from 'react';
import ReactMarkdown from "react-markdown";

const MarkDownOutput = (props) => {
  const { display } = props;
  return (
    <ReactMarkdown
      source={display}
      skipHtml={false}
      escapeHtml={false}
    />
  );
}

export default MarkDownOutput;