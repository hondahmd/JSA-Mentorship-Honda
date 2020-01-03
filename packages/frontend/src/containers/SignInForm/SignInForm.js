import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

import styles from './styles';

const SignInForm = () => {
  const [input, setInput] = useState({ username: '', password: '' });

  function handleInput(event) {
    if (event.target.id === 'Username') {
      setInput({
        ...input,
        username: event.target.value
      });
    } else if (event.target.id === 'Password') {
      setInput({
        ...input,
        password: event.target.value
      });
    }
  }

  function handleClick() {
    console.log(input);
    setInput({ username: '', password: '' });
  }

  return (
    <styles.Container>
      <div>
        <TextField
          id="Username"
          label="Username"
          className="TextField"
          type="text"
          value={input.username}
          onChange={e => handleInput(e)}
        />
      </div>
      <div>
        <TextField
          id="Password"
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
