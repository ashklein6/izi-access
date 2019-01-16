import React from 'react';
import { connect } from 'react-redux';

const LogOutButton = props => (
  <button
    // This button shows up in multiple locations and can be styled differently
    // by sending the className from its parents through React props
    className={props.className}
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
  >
    Log Out
  </button>
);

export default connect()(LogOutButton);
