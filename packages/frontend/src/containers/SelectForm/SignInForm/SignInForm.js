import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import thunks from 'thunks/userInfo';

import styles from './styles';

const SignInForm = ({ signIn, history }) => {
  const initInput = {
    email: '',
    password: ''
  };
  const [state, setState] = useState({ filled: true, input: initInput });

  function handleInput(event) {
    const { id, value } = event.target;
    const newState = { ...state };
    newState.input[id] = value;
    if (state.input.email !== '' && state.input.password !== '') newState.filled = false;
    setState(newState);
  }

  async function handleClick() {
    signIn(state.input);
    setState({ filled: true, input: initInput });
    history.push('/dashboard');
  }

  return (
    <styles.Container>
      <div>
        <TextField
          id="email"
          label="Email"
          className="TextField"
          type="email"
          value={state.input.email}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          className="TextField"
          type="password"
          value={state.input.password}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <Button variant="contained" disabled={state.filled} onClick={() => handleClick()}>
          Sign In
        </Button>
      </div>
    </styles.Container>
  );
};

SignInForm.defaultProps = {
  signIn: null,
  history: {}
};

SignInForm.propTypes = {
  signIn: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

const mapDispatchToProps = dispatch => ({
  signIn: userInfo => dispatch(thunks.signIn(userInfo))
});

export default connect(null, mapDispatchToProps)(withRouter(SignInForm));
