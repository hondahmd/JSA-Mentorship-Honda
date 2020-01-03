import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import styles from './styles';

const SignInForm = () => {
  const initInput = {
    username: '',
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
    console.log(input);
    setInput(initInput);
  }

  return (
    <styles.Container>
      <div>
        <TextField
          id="username"
          label="Username"
          className="TextField"
          type="text"
          value={input.username}
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
        <Button variant="contained" onClick={() => handleClick()}>
          Sign In
        </Button>
      </div>
    </styles.Container>
  );
};

export default SignInForm;
