import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import thunks from 'thunks/userInfo';

import styles from './styles';

const SignInForm = ({ signIn }) => {
  const initInput = {
    email: '',
    password: ''
  };
  const [input, setInput] = useState(initInput);

  function handleInput(event) {
    const { id, value } = event.target;
    const newInput = { ...input };
    newInput[id] = value;
    setInput(newInput);
  }

  function handleClick() {
    signIn(input);
    setInput(initInput);
  }

  return (
    <styles.Container>
      <div>
        <TextField
          id="email"
          label="Email"
          className="TextField"
          type="email"
          value={input.email}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          className="TextField"
          type="password"
          value={input.password}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <Link to="/dashboard">
          <Button variant="contained" onClick={() => handleClick()}>
            Sign In
          </Button>
        </Link>
      </div>
    </styles.Container>
  );
};

const mapDispatchToProps = dispatch => ({
  signIn: userInfo => dispatch(thunks.signIn(userInfo))
});

export default connect(null, mapDispatchToProps)(SignInForm);
