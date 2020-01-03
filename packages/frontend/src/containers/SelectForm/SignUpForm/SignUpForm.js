import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import styles from './styles';

const SignUpForm = () => {
  const initInput = {
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: ''
  };
  const [input, setInput] = useState(initInput);

  function handleInput(event) {
    const { id, value } = event.target;
    const newInput = { ...input };
    newInput[id] = value;
    setInput(newInput);
  }

  function handleClick() {
    console.log(input);
    setInput(initInput);
  }

  return (
    <styles.Container>
      <div>
        <TextField
          id="firstName"
          label="First Name"
          className="TextField"
          type="text"
          value={input.firstName}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <TextField
          id="lastName"
          label="Last Name"
          className="TextField"
          type="text"
          value={input.lastName}
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
        <TextField
          id="confirmPassword"
          label="Confirm Password"
          className="TextField"
          type="password"
          value={input.confirmPassword}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <TextField
          id="email"
          label="Email Address"
          className="TextField"
          type="email"
          value={input.email}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <Button variant="contained" onClick={() => handleClick()}>
          Sign Up
        </Button>
      </div>
    </styles.Container>
  );
};

export default SignUpForm;
